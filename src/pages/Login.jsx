import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/common/AuthLayout.jsx";
export default function Login() {
  return <AuthLayout title="Welcome Back" subtitle="Login to manage your orders and saved fragrances." footer={<span>New here? <Link to="/register">Create account</Link></span>}><form className="auth-form"><input type="email" placeholder="Email address" /><input type="password" placeholder="Password" /><div className="auth-form__row"><label><input type="checkbox" /> Remember me</label><Link to="/forgot-password">Forgot?</Link></div><button type="button">Login</button></form></AuthLayout>;
}
