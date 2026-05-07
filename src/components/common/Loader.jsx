// reusable loader component
// API loading aur page loading ke liye

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="w-14 h-14 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>

    </div>
  );
}

export default Loader;