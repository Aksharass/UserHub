import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google User:", decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    navigate("/home");
  };

  const handleGoogleError = () => {
    alert("Google login failed!");
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-gray-500">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>

          {/* Username & Password Login */}
          <input
            className="w-full p-2 border mb-4"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full p-2 border mb-4"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded mb-4"
          >
            Login
          </button>

          <div className="text-center mb-2">OR</div>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
          </div>
        </div>
      </div>
    
  );
}
