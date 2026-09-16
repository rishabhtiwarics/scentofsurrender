import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/common/AuthLayout.jsx";
export default function Register() {
  return <AuthLayout title="Create Account" subtitle="Join SOS for faster checkout and fragrance updates." footer={<span>Already registered? <Link to="/login">Login</Link></span>}><form className="auth-form"><input placeholder="Full name" /><input type="email" placeholder="Email address" /><input type="password" placeholder="Password" /><button type="button">Register</button></form></AuthLayout>;
}
