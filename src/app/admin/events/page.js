"use client";

import PrivateRoute from "../../../routes/PrivateRoute";
import EventsUpdatePage from "../../../views/admin/DataUpdate/EventsUpdatePage";

export default function AdminEventsPage() {
  return (
    <PrivateRoute>
      <EventsUpdatePage />
    </PrivateRoute>
  );
}
