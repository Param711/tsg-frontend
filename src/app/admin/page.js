"use client";

import PrivateRoute from "../../routes/PrivateRoute";
import Dashboard from "../../views/admin/Dashboard/Dashboard";

export default function AdminPage() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
}
