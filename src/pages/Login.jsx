import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/common/AuthLayout.jsx";
import { Mail, Lock, Eye, EyeOff, Google, LogInIcon, User } from "../components/common/Icons.jsx";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout icon={User} title="Welcome Back" subtitle="Login to manage your orders and saved fragrances." footer={<span>New here? <Link to="/register">Create account</Link></span>}>
      <form className="auth-form">
        <div className="form-group">
          <Mail className="input-icon" size={18} />
          <input type="email" placeholder="Email address" />
        </div>
        <div className="form-group">
          <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          <input type={showPassword ? "text" : "password"} placeholder="Password" className="password-input" />
        </div>
        <div className="auth-form__row">
          <label><input type="checkbox" /> Remember me</label>
          <Link to="/forgot-password">Forgot?</Link>
        </div>
        <button type="button" className="primary-btn">
          Login <LogInIcon size={18} />
        </button>

        <div style={{ textAlign: "center", margin: "4px 0", color: "#999", fontSize: "14px" }}>OR</div>

        <button type="button" className="google-btn">
          <Google size={20} /> Continue with Google
        </button>
      </form>
    </AuthLayout>
  );
}
