"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "../../components/Layouts/Layout";
import {
  DropdownSelector,
  eventVerticals,
} from "../../components/DropdownSelector";

export default function Results() {
  const pathname = usePathname();

  const [pageHeading, setPageHeading] = useState("");

  useEffect(() => {
    if (pathname === "/results/gc") {
      setPageHeading("GENERAL CHAMPIONSHIP");
    } else if (pathname === "/results/interiit") {
      setPageHeading("INTER IIT");
    }
  }, [pathname]);

  if (typeof window !== "undefined") document.title = "Results | TSG";

  return (
    <Layout>
      <section className="withTable">
        <p className="pageHeading">{pageHeading}</p> {/* GLOBAL CSS */}
        <DropdownSelector
          itemList={eventVerticals}
          defaultOption={eventVerticals[0]}
        />
      </section>
    </Layout>
  );
}
