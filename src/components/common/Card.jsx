// reusable card component
// services, dashboard, features waghera me use hoga

function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-custom shadow-custom p-6 transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;