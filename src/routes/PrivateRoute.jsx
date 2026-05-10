import { Navigate } from "react-router-dom";

// protected route
// token + role dono check ho rahe hain

function PrivateRoute({ children, allowedRole }) {

  const token = localStorage.getItem("access_token");

  const role = localStorage.getItem("role");

  // agar token nahi hai

  if (!token) {

    return <Navigate to="/login" />;
  }

  // agar role match nahi kar raha

  if (allowedRole && role !== allowedRole) {

    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default PrivateRoute;