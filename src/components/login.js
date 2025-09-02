import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      setError("");
      alert(`Welcome back, ${matchedUser.name}! ✅`);
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid size={{ xs: 10, sm: 6, md: 4 }}>
        <Paper elevation={3} style={{ padding: "24px" }}>
          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
