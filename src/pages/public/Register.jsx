import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import Footer from "../../components/common/Footer";

import InputField from "../../components/common/InputField";

import PasswordInput from "../../components/common/PasswordInput";

import { registerUser } from "../../services/authService";

import {
  validateEmail,
  validatePassword,
} from "../../utils/validators/authValidator";

// register page
// backend register API + frontend validation

function Register() {

  const navigate = useNavigate();

  // form state

  const [formData, setFormData] = useState({

    first_name: "",

    last_name: "",

    gender: "",

    email: "",

    phone: "",

    alternate_phone: "",

    password: "",

    confirm_password: "",
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

  // register submit handler

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

    // confirm password validation

    if (
      formData.password !==
      formData.confirm_password
    ) {

      setError(
        "Passwords match nahi kar rahe"
      );

      return;
    }

    try {

      setLoading(true);

      // register API call

      await registerUser(formData);

      // success redirect

      navigate("/login");

    }

    catch (err) {

      setError(

        err?.response?.data?.message ||

        "Registration failed"
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

        <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-20">

          <div className="bg-white shadow-custom rounded-custom p-10 w-full max-w-2xl">

            {/* heading */}

            <h1 className="text-3xl font-bold text-center mb-8">
              Register
            </h1>

            {/* error */}

            {error && (

              <p className="text-red-500 text-center mb-4">
                {error}
              </p>
            )}

            {/* register form */}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >

              <InputField
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />

              <InputField
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />

              <InputField
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
              />

              <InputField
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <InputField
                name="alternate_phone"
                placeholder="Alternate Phone (Optional)"
                value={formData.alternate_phone}
                onChange={handleChange}
              />

              <PasswordInput
                name="password"
                placeholder="Password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />

              <PasswordInput
                name="confirm_password"
                placeholder="Confirm Password"
                autoComplete="new-password"
                value={formData.confirm_password}
                onChange={handleChange}
              />

              {/* register button */}

              <div className="md:col-span-2">

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
                    ? "Registering..."
                    : "Register"}

                </button>

              </div>

            </form>

            {/* login redirect */}

            <p className="text-center mt-6 text-grayText">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Register;