import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/common/AuthLayout.jsx";
import { Mail, Lock } from "../components/common/Icons.jsx";

export default function ForgotPassword() {
  return (
    <AuthLayout icon={Lock} title="Reset Password" subtitle="Enter your email and we will send password reset instructions." footer={<span>Remembered it? <Link to="/login">Back to login</Link></span>}>
      <form className="auth-form">
        <div className="form-group">
          <Mail className="input-icon" size={18} />
          <input type="email" placeholder="Email address" />
        </div>
        <button type="button">Send Reset Link</button>
      </form>
    </AuthLayout>
  );
}
