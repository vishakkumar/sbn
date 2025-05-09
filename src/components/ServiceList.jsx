import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ServiceList = ({ search, category, location, businessName }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("./services.json");
        setServices(response.data.services);
      } catch (err) {
        setError("Failed to fetch services. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch = search
      ? service.service.toLowerCase().includes(search.toLowerCase()) ||
        service.business_name.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesCategory =
      category && category !== "all" ? service.service === category : true;

    const matchesLocation =
      location && location !== "all"
        ? service.contact.location === location
        : true;

    const matchesBusiness =
      businessName && businessName !== "all"
        ? service.business_name === businessName
        : true;

    return (
      matchesSearch && matchesCategory && matchesLocation && matchesBusiness
    );
  });

  if (loading)
    return (
      <CircularProgress style={{ display: "block", margin: "20px auto" }} />
    );

  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box
      sx={{
        padding: "20px",
        background: "rgb(228,241,234)",
        borderRadius: "20px",
        width: "95%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom textAlign={"center"}>
         Services
      </Typography>

      {filteredServices.length === 0 ? (
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign="center"
          mt={4}
        >
          No services found matching your criteria.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredServices.map((service) => (
            <Grid item xs={12} sm={6} md={12} key={service.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  height: "250px",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/service/${service.id}`)}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom color="red">
                    {service.business_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.service}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary">
                    📍 {service.contact.location}
                  </Typography>
                  <Typography variant="subtitle2" color="text.primary">
                    📞 {service.contact.phone}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ServiceList;
