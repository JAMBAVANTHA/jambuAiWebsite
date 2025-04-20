"use client";

import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4caf50", "#f44336"]; // Green and Red

const RecommendationVisualizer = ({ data }) => {
  if (!data || !data.recommendations) return null;

  const irrigation = data.recommendations.irrigation;
  const fertilizer = data.recommendations.fertilizer;

  const moisturePieData = [
    {
      name: "Needed",
      value: irrigation.needed ? irrigation.amount : 0,
    },
    {
      name: "Rain Will Cover",
      value: irrigation.upcoming_rain ? irrigation.amount : 0,
    },
  ];

  const fertilizerData = ["N", "P", "K"].map((key) => ({
    name: key,
    Ideal: fertilizer[key].ideal,
    Current: fertilizer[key].current,
  }));

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        🌾 Smart Farming Guidance
      </Typography>

      <Typography sx={{ mb: 2 }}>
        <strong>Soil:</strong> {data.metadata.actual_match.soil_type} |{" "}
        <strong>Crop:</strong> {data.metadata.actual_match.crop} |{" "}
        <strong>Stage:</strong> {data.metadata.actual_match.stage}
      </Typography>

      {/* Metadata Note */}
      <Typography sx={{ mb: 2, fontStyle: "italic", color: "gray" }}>
        📝 Note: {data.metadata.notes}
      </Typography>

      <Grid container spacing={4}>
        {/* Irrigation Card */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">💧 Irrigation Advice</Typography>
              <Typography>Current Moisture: {irrigation.current}%</Typography>
              <Typography>Ideal Moisture: {irrigation.ideal}%</Typography>
              <Typography sx={{ mt: 1 }}>
                Status: <Chip label={irrigation.status} color="warning" />
              </Typography>
              <Typography
                sx={{ my: 1, fontWeight: "bold", color: "#2e7d32" }}
              >
                {irrigation.advice}
              </Typography>

              <Typography sx={{ mt: 2, fontStyle: "italic", fontSize: "0.875rem" }}>
                Date: {getCurrentDate()}
              </Typography>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={moisturePieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) =>
                      `${name}: ${value.toFixed(1)} mm`
                    }
                  >
                    {moisturePieData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Fertilizer Card */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">🌱 Fertilizer Advice</Typography>
              <Typography sx={{ mb: 1 }}>
                Check your N-P-K levels and follow the advice below:
              </Typography>
              <Typography sx={{ my: 1, fontWeight: "bold", color: "#1565c0" }}>
                <Box>🌾 Nitrogen (N): {fertilizer.N.recommendation}</Box>
                <Box>🌿 Phosphorus (P): {fertilizer.P.recommendation}</Box>
                <Box>🌻 Potassium (K): {fertilizer.K.recommendation}</Box>
              </Typography>

              {/* General Advice from Fertilizer */}
              <Typography sx={{ mt: 2, fontStyle: "italic", color: "gray" }}>
                🧪 General Advice: {fertilizer.general_advice}
              </Typography>

              <Typography sx={{ mt: 2, fontStyle: "italic", fontSize: "0.875rem" }}>
                Date: {getCurrentDate()}
              </Typography>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={fertilizerData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Ideal" fill="#4caf50" />
                  <Bar dataKey="Current" fill="#f44336" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecommendationVisualizer;
