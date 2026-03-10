"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function PrivateRoute({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [router]);

  if (loading) return null;
  if (!isAuthenticated) return null;

  return <>{children}</>;
}

export default PrivateRoute;
