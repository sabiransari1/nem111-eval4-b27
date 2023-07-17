import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { PostsPage } from "../pages/PostsPage";
import { SignupPage } from "../pages/SignupPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};
