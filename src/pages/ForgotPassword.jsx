import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/common/AuthLayout.jsx";
export default function ForgotPassword() {
  return <AuthLayout title="Reset Password" subtitle="Enter your email and we will send password reset instructions." footer={<span>Remembered it? <Link to="/login">Back to login</Link></span>}><form className="auth-form"><input type="email" placeholder="Email address" /><button type="button">Send Reset Link</button></form></AuthLayout>;
}
