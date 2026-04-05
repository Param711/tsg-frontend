"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Scroll to top and refresh AOS on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [pathname]);

  return <>{children}</>;
}
