import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RecommendationVisualizer from "./RecommendationVisualizer";

const RecommendationPage = () => {
  const [crop, setCrop] = useState("");
  const [soil, setSoil] = useState("");
  const [stage, setStage] = useState("");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [location, setLocation] = useState(null);

  const crops = ["Wheat", "Rice", "Maize", "Sugarcane"];
  const soilTypes = ["Loamy", "Sandy", "Clay", "Silty"];
  const stages = ["Germination", "Vegetative", "Flowering", "Maturity"];

  const MAX_WEATHER_ENTRIES = 5;


  const fetchWeatherData = async () => {
    if (!location) {
      alert("Please allow location access.");
      return;
    }
  
    const apiKey = "d7997cb8bd36e3bfb05a2bc33a9371b3";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const body = await response.json();
      const forecastData = body.list
        .slice(0, MAX_WEATHER_ENTRIES)
        .map((entry) => ({
          Date_Time: entry.dt_txt,
          Temperature_C: entry.main.temp,
          Rain_Amount_mm: entry.rain ? entry.rain["3h"] : 0,
        }));
      setWeatherData(forecastData);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch weather data");
    }
  };
  

  const handleWeatherChange = (index, key, value) => {
    const updated = [...weatherData];
    updated[index][key] = value;
    setWeatherData(updated);
  };

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(position),
        (error) => setError("Unable to fetch your location. Please enable location access."),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }

  const handleSubmit = async () => {
    setError("");
    const requestData = {
      field_data: {
        Soil_Type: soil,
        Crop: crop,
        Stage: stage,
        Current_Moisture: parseFloat(moisture),
        Current_N: parseFloat(nitrogen),
        Current_P: parseFloat(phosphorus),
        Current_K: parseFloat(potassium),
      },
      weather_forecast: weatherData.map((entry) => ({
        Date_Time: entry.Date_Time,
        Temperature_C: parseFloat(entry.Temperature_C),
        Rain_Amount_mm: parseFloat(entry.Rain_Amount_mm),
      })),
    };

    try {
      setLoading(true);
      const res = await fetch(
        "https://farmers-friend-jambu-804603944436.asia-south1.run.app/get-recommendations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );
      if (!res.ok) throw new Error("Failed to fetch recommendations");
      const data = await res.json();
      setRecommendations(null); // Reset before setting new data
      setTimeout(() => {
        setRecommendations(data);
        setOpenDialog(true);
      }, 50); // small delay to force visualizer update
    } catch (err) {
      console.error(err.message);
      setError("Failed to fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAutoFill = () => {
    setCrop("wheat");
    setSoil("loamy");
    setStage("Germination");
    setMoisture("22");
    setNitrogen("18");
    setPhosphorus("11");
    setPotassium("25");
    setWeatherData([
      { Date_Time: "2025-04-20 10:00", Temperature_C: "33", Rain_Amount_mm: "2" },
      { Date_Time: "2025-04-20 12:00", Temperature_C: "35", Rain_Amount_mm: "0" },
      { Date_Time: "2025-04-20 14:00", Temperature_C: "37", Rain_Amount_mm: "5" },
    ]);
    setRecommendations({
      summary: "This is a sample recommendation for Maize in Flowering stage with Sandy soil.",
      chartData: [
        { label: "Nutrient Uptake", value: 85 },
        { label: "Water Need", value: 60 },
      ],
    });
    setOpenDialog(true);
  };

  useEffect(() => {
    if (!location) getUserLocation();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🌾 Crop Recommendation System</h1>

      <div className="grid gap-4">
        <select className="p-2 border rounded" value={crop} onChange={(e) => setCrop(e.target.value)}>
          <option value="">Select Crop</option>
          {crops.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <select className="p-2 border rounded" value={soil} onChange={(e) => setSoil(e.target.value)}>
          <option value="">Select Soil Type</option>
          {soilTypes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <select className="p-2 border rounded" value={stage} onChange={(e) => setStage(e.target.value)}>
          <option value="">Select Crop Stage</option>
          {stages.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <input className="p-2 border rounded" type="number" placeholder="Current Moisture (%)" value={moisture} onChange={(e) => setMoisture(e.target.value)} />
        <input className="p-2 border rounded" type="number" placeholder="Nitrogen (N)" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} />
        <input className="p-2 border rounded" type="number" placeholder="Phosphorus (P)" value={phosphorus} onChange={(e) => setPhosphorus(e.target.value)} />
        <input className="p-2 border rounded" type="number" placeholder="Potassium (K)" value={potassium} onChange={(e) => setPotassium(e.target.value)} />

        <h2 className="text-xl font-semibold mt-6">Weather Forecast</h2>
        {weatherData.map((entry, idx) => (
          <div key={idx} className="grid gap-2 mb-2">
            <input className="p-2 border rounded" placeholder={`Forecast ${idx + 1} - Date & Time`} value={entry.Date_Time} onChange={(e) => handleWeatherChange(idx, "Date_Time", e.target.value)} />
            <input className="p-2 border rounded" type="number" placeholder="Temperature (°C)" value={entry.Temperature_C} onChange={(e) => handleWeatherChange(idx, "Temperature_C", e.target.value)} />
            <input className="p-2 border rounded" type="number" placeholder="Rain Amount (mm)" value={entry.Rain_Amount_mm} onChange={(e) => handleWeatherChange(idx, "Rain_Amount_mm", e.target.value)} />
          </div>
        ))}

        <button onClick={fetchWeatherData} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Get Weather Data
        </button>

        <button onClick={handleSubmit} disabled={loading} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          {loading ? "Loading..." : "Get Recommendations"}
        </button>

        {/* <button onClick={handleAutoFill} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mt-2">
          Auto-fill Form
        </button> */}

        {error && <p className="text-red-600">{error}</p>}

        {/* Dialog Modal */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="md">
          <DialogTitle>
            Recommendations
            <IconButton aria-label="close" onClick={() => setOpenDialog(false)} sx={{ position: "absolute", right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            {recommendations ? <RecommendationVisualizer key={JSON.stringify(recommendations)} data={recommendations} /> : <p>No data available.</p>}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default RecommendationPage;
