import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import { saveAuthData } from "../../utils/helpers/authHelper";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validators/authValidator";

// Login page (production ready)
// backend login API connect + proper navigation handle

function Login() {
  const navigate = useNavigate();

  // form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // error state (validation + API errors)
  const [error, setError] = useState("");

  // loading state (button disable + UX improve)
  const [loading, setLoading] = useState(false);

  // input change handler
  const handleChange = (e) => {
    // simple state update (controlled inputs)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // login submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // frontend validation (email check)
    if (!validateEmail(formData.email)) {
      setError("Email format sahi nahi hai");
      return;
    }

    // password validation (strong password rule)
    if (!validatePassword(formData.password)) {
      setError(
        "Password strong hona chahiye (uppercase, lowercase, number, special char)"
      );
      return;
    }

    try {
      setLoading(true); // button disable + loading start

      // real backend API call
      const response = await api.post("/auth/login", formData);

      const { access_token, role } = response.data;

      // token + role save in localStorage
      saveAuthData(access_token, role);

      // role based navigation (clean way instead of window.location)
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "client") {
        navigate("/client");
      } else {
        navigate("/");
      }
    } catch (err) {
      // backend error handling
      setError(
        err?.response?.data?.message || "Invalid email or wrong password"
      );
    } finally {
      setLoading(false); // request finish
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="bg-white shadow-custom rounded-custom p-10 w-full max-w-md">

        {/* title */}
        <h1 className="text-3xl font-bold mb-8 text-center">
          Login
        </h1>

        {/* error message */}
        {error && (
          <p className="text-red-500 mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* email input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-borderColor p-3 rounded-lg outline-none"
          />

          {/* password input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-borderColor p-3 rounded-lg outline-none"
          />

          {/* submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white py-3 rounded-lg transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;