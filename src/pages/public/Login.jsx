import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";

import { saveAuthData } from "../../utils/helpers/authHelper";

import {
  validateEmail,
  validatePassword,
} from "../../utils/validators/authValidator";

// login page
// backend auth API yahan connect ki hai
// proper validation + loading + role based navigation handle ho raha hai

function Login() {

  const navigate = useNavigate();

  // form state
  // controlled inputs use kar rahe hain

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // validation + API error state

  const [error, setError] = useState("");

  // loading state
  // request ke time button disable rahega

  const [loading, setLoading] = useState(false);

  // input change handler

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // login submit handler

  const handleSubmit = async (e) => {

    e.preventDefault();

    // purani error clear

    setError("");

    // email validation

    if (!validateEmail(formData.email)) {

      setError("Email format sahi nahi hai");

      return;
    }

    // password validation
    // backend password rules follow kar rahe hain

    if (!validatePassword(formData.password)) {

      setError(
        "Password strong hona chahiye (uppercase, lowercase, number, special char)"
      );

      return;
    }

    try {

      // loading start

      setLoading(true);

      // login API call

      const data = await loginUser(formData);

      const {
        access_token,
        role,
      } = data;

      // token + role save

      saveAuthData(
        access_token,
        role
      );

      // role based navigation

      if (role === "admin") {

        navigate("/admin");

      }

      else if (role === "client") {

        navigate("/client");

      }

      else {

        navigate("/");
      }

    }

    catch (err) {

      // backend error handling

      setError(

        err?.response?.data?.message ||

        "Invalid email or wrong password"
      );
    }

    finally {

      // loading stop

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-light px-4">

      <div className="bg-white shadow-custom rounded-custom p-10 w-full max-w-md">

        {/* page heading */}

        <h1 className="text-3xl font-bold mb-8 text-center">
          Login
        </h1>

        {/* error message */}

        {error && (

          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        {/* login form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* email input */}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-borderColor p-3 rounded-lg outline-none focus:border-primary"
          />

          {/* password input */}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-borderColor p-3 rounded-lg outline-none focus:border-primary"
          />

          {/* submit button */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white py-3 rounded-lg transition-all duration-300 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;