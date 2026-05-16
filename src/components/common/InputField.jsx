// reusable input component
// auth forms aur future forms me reuse hoga

function InputField({

  type = "text",

  name,

  placeholder,

  value,

  onChange,

  autoComplete,

  required = false,
}) {

  return (

    <input
      type={type}

      name={name}

      placeholder={placeholder}

      value={value}

      onChange={onChange}

      autoComplete={autoComplete}

      required={required}

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
  );
}

export default InputField;