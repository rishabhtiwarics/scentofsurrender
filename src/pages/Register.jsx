import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/common/AuthLayout.jsx";
import { User, Mail, Lock, Eye, EyeOff, Google, LogInIcon } from "../components/common/Icons.jsx";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout icon={User} title="Create Account" subtitle="Join SOS for faster checkout and fragrance updates." footer={<span>Already registered? <Link to="/login">Login</Link></span>}>
      <form className="auth-form">
        <div className="form-group">
          <User className="input-icon" size={18} />
          <input placeholder="Full name" />
        </div>
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
        <button type="button" className="primary-btn">
          Register <LogInIcon size={18} />
        </button>

        <div style={{ textAlign: "center", margin: "4px 0", color: "#999", fontSize: "14px" }}>OR</div>

        <button type="button" className="google-btn">
          <Google size={20} /> Continue with Google
        </button>
      </form>
    </AuthLayout>
  );
}
