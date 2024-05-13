import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginScreen, SignUpScreen, WelcomeScreen } from "./screens";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="*" element={<LoginScreen />} />
    </Routes>
  );
};
