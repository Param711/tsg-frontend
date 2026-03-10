"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to top on route change (replaces ScrollToTop component)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
