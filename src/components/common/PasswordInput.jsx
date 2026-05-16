import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

// reusable password input
// login + register dono me use hoga

function PasswordInput({

  name,

  placeholder,

  value,

  onChange,

  autoComplete = "current-password",
}) {

  // password visibility state

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="relative">

      <input
        type={showPassword ? "text" : "password"}

        name={name}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

        autoComplete={autoComplete}

        className="
          w-full
          border
          border-borderColor
          p-3
          rounded-lg
          outline-none
          focus:border-primary
          transition-all
          duration-300
        "
      />

      {/* password visibility toggle */}

      <button
        type="button"

        onClick={() => setShowPassword(!showPassword)}

        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-gray-500
        "
      >

        {showPassword
          ? <FaEyeSlash />
          : <FaEye />
        }

      </button>

    </div>
  );
}

export default PasswordInput;