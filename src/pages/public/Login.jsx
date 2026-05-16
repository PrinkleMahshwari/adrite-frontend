import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import Footer from "../../components/common/Footer";

import InputField from "../../components/common/InputField";

import PasswordInput from "../../components/common/PasswordInput";

import { loginUser } from "../../services/authService";

import { saveAuthData } from "../../utils/helpers/authHelper";

import {
  validateEmail,
  validatePassword,
} from "../../utils/validators/authValidator";

// login page
// backend login API + validation + role navigation

function Login() {

  const navigate = useNavigate();

  // form state

  const [formData, setFormData] = useState({

    email: "",

    password: "",
  });

  // error state

  const [error, setError] = useState("");

  // loading state

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

    setError("");

    // email validation

    if (!validateEmail(formData.email)) {

      setError("Email format sahi nahi hai");

      return;
    }

    // password validation

    if (!validatePassword(formData.password)) {

      setError(
        "Password strong hona chahiye"
      );

      return;
    }

    try {

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

      setError(

        err?.response?.data?.message ||

        "Invalid email or password"
      );
    }

    finally {

      setLoading(false);
    }
  };

  return (

    <>

      <div className="gradient-bg min-h-screen">

        <Navbar />

        <div className="flex items-center justify-center min-h-screen px-4 pt-24">

          <div className="bg-white shadow-custom rounded-custom p-10 w-full max-w-md">

            {/* page heading */}

            <h1 className="text-3xl font-bold text-center mb-8">
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

              <InputField
                type="email"
                name="email"
                placeholder="Enter Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />

              <PasswordInput
                name="password"
                placeholder="Enter Password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />

              {/* forgot password placeholder */}

              <div className="text-right">

                <button
                  type="button"
                  className="text-primary text-sm hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* submit button */}

              <button
                type="submit"

                disabled={loading}

                className={`
                  w-full
                  bg-primary
                  text-white
                  py-3
                  rounded-lg
                  transition-all
                  duration-300
                  ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-90"
                  }
                `}
              >

                {loading
                  ? "Logging in..."
                  : "Login"}

              </button>

            </form>

            {/* register redirect */}

            <p className="text-center mt-6 text-grayText">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Login;