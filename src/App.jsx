import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import TopHeader from "./components/common/TopHeader.jsx";
import Footer from "./components/common/Footer.jsx";
import FloatingVideoWidget from "./components/common/FloatingVideoWidget.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

const authRoutes = ["/login", "/register", "/forgot-password"];

export default function App() {
  const { pathname } = useLocation();
  const isAuthPage = authRoutes.includes(pathname);

  return (
    <>
      {!isAuthPage && <TopHeader />}
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <FloatingVideoWidget />}
    </>
  );
}
