import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, CircularProgress, Alert } from "@mui/material";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get("/services.json");
        const serviceData = response.data.services.find((s) => s.id.toString() === id);

        if (!serviceData) {
          setError("Service not found");
        } else {
          setService(serviceData);
        }
      } catch (err) {
        setError("Failed to load service details.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <CircularProgress style={{ display: "block", margin: "20px auto" }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <Typography variant="h4" color="red">{service.business_name}</Typography>
      <Typography variant="h6" color="gray">{service.service}</Typography>
      <Typography variant="body1" paragraph>{service.description}</Typography>
      <Typography variant="subtitle1">📍 Location: {service.contact.location}</Typography>
      <Typography variant="subtitle1">📞 Contact: {service.contact.phone}</Typography>
      
      <Button
        sx={{ marginTop: "20px", background: "rgb(170, 170, 20)", color: "white" }}
        onClick={() => navigate(-1)}
      >
        Book Service Now
      </Button>
      <Button
        sx={{ marginTop: "20px", background: "rgb(170, 170, 20)", color: "white" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Box>
  );
};

export default ServiceDetails;
