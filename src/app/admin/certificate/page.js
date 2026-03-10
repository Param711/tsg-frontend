"use client";

import PrivateRoute from "../../../routes/PrivateRoute";
import CertifGen from "../../../views/admin/CertificateGenerator/CertifGen";

export default function CertificatePage() {
  return (
    <PrivateRoute>
      <CertifGen />
    </PrivateRoute>
  );
}
