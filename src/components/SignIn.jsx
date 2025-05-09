import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (name && email && password) {
      const userData = { name, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("flag", "1");

      console.log("User registered:", name);

      navigate("/"); // Redirect after sign-up (or to login)
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper elevation={6} sx={{ padding: 4, width: "100%", maxWidth: 400, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Register Account
        </Typography>

        <form onSubmit={handleSignUp}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextField
            label="Email"
            type='email'
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            // color="primary"
            fullWidth
            sx={{ bgcolor:'red',mt: 2, borderRadius: "20px" }}
          >
            Sign Up
          </Button>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/login" variant="body2" underline="hover">
              Already have an account? Login
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignIn;
