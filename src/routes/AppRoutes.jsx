import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/public/Login";

import Register from "../pages/public/Register";

import Unauthorized from "../pages/unauthorized/Unauthorized";

import PrivateRoute from "./PrivateRoute";

// temporary dashboards
// later actual dashboards replace honge

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

        {/* public routes */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* client route */}

        <Route
          path="/client"
          element={
            <PrivateRoute allowedRole="client">

              <ClientDashboard />

            </PrivateRoute>
          }
        />

        {/* admin route */}

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRole="admin">

              <AdminDashboard />

            </PrivateRoute>
          }
        />

        {/* unauthorized */}

        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;