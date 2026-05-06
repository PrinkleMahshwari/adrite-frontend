// routing ka main control yahan hoga
// public + protected + role-based routes

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// pages
import Login from "../pages/public/Login";
import ClientDashboard from "../pages/client/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* public route */}
        <Route path="/login" element={<Login />} />

        {/* client dashboard */}
        <Route
          path="/client"
          element={
            <PrivateRoute role="client">
              <ClientDashboard />
            </PrivateRoute>
          }
        />

        {/* admin dashboard */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* default route (agar kuch bhi match na ho) */}
        <Route path="*" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;