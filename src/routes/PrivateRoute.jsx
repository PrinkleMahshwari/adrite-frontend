// ye component check karega:
// 1. user login hai ya nahi
// 2. correct role hai ya nahi

import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {

  // localStorage se token aur role nikaal rahe hain
  const token = localStorage.getItem("access_token");
  const userRole = localStorage.getItem("role");

  // agar token nahi hai → login page pe bhej do
  if (!token) {
    return <Navigate to="/login" />;
  }

  // agar role match nahi kar raha → bhi login pe bhej do
  if (role && role !== userRole) {
    return <Navigate to="/login" />;
  }

  // sab sahi hai → page render karo
  return children;
}

export default PrivateRoute;