import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({ confirmPassword: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "confirmPassword") {
      if (value && value !== formData.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (errors.confirmPassword) {
    alert("Please fix errors before submitting");
    return;
  }

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = [...existingUsers, formData];

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  alert("Signup successful! User added to localStorage ✅");

  setFormData({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
};


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid size={{ xs: 10, sm: 6, md: 4 }}>
        <Paper elevation={3} style={{ padding: "24px" }}>
          <Typography variant="h5" gutterBottom align="center">Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              FormHelperTextProps={{ style: { minHeight: 24 } }}
            />
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
              FormHelperTextProps={{ style: { minHeight: 24 } }}
            />
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              FormHelperTextProps={{ style: { minHeight: 24 } }}
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
              autoComplete="new-password"
              FormHelperTextProps={{ style: { minHeight: 24 } }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
              autoComplete="new-password"
              FormHelperTextProps={{ style: { minHeight: 24 } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
