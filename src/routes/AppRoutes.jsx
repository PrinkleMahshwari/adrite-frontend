import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/public/Login";

import Unauthorized from "../pages/unauthorized/Unauthorized";

import PrivateRoute from "./PrivateRoute";

// temporary dashboard pages
// later actual pages replace karenge

function ClientDashboard() {

  return <h1>Client Dashboard</h1>;
}

function AdminDashboard() {

  return <h1>Admin Dashboard</h1>;
}

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* default route */}

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* public route */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* client protected route */}

        <Route
          path="/client"
          element={
            <PrivateRoute allowedRole="client">
              <ClientDashboard />
            </PrivateRoute>
          }
        />

        {/* admin protected route */}

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRole="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* unauthorized page */}

        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;