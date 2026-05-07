// reusable button component
// poore project me same button use hoga
// different variants already added hain

function Button({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
}) {

    // button ki common styling
  const baseStyle =
    'px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm';

    // button variants
  // primary = green/yellow style
  // secondary = dark button
  // outline = bordered button
  const variants = {
    primary:
      'bg-accent text-dark hover:bg-primary hover:text-white',

    secondary:
      'bg-secondary text-white hover:bg-dark',

    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white',
  };

    // final button render
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        fullWidth ? 'w-full' : ''
      }`}
    >
      {text}
    </button>
  );
}

export default Button;