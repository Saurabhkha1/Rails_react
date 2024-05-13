import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Typography,
  CssBaseline,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

export const SignUpScreen = () => {
  const { handleSubmit, register } = useForm();
  const [csrfToken, setCsrfToken] = useState("");
  const [flashMessage, setFlashMessage] = useState("");

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    if (metaTag) {
      setCsrfToken(metaTag.getAttribute("content"));
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ user: data }),
      });

      if (response.ok) {
        setFlashMessage("Signup successful! Welcome aboard!");
        // ...
      } else {
        setFlashMessage("Login Failed, Invalid Credentials!");
      }
    } catch (error) {
      // Handle network or server error
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container component={Paper}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1633265486064-086b219458ec)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              {flashMessage && (
                <div className="flash success">{flashMessage}</div>
              )}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                {/* Include the CSRF token as a hidden input */}
                <input type="hidden" name="authenticity_token" value={csrfToken} />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  {...register("password_confirmation")}
                />

                <FormControlLabel
                  control={<Checkbox value="agree" color="primary" />}
                  label="I agree to the terms and conditions"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
