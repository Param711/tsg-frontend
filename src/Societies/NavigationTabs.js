"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import "./NavigationTabs.css";

const NavigationTabs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabs = [
    { id: "about", label: "About" },
    { id: "posts", label: "Posts" },
    { id: "event", label: "Event" },
    { id: "team", label: "Team" },
  ];

  // Get tab from query string
  const activeTab = searchParams.get("tab") || "about";

  const handleTabClick = (tabId) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='tabs-container'>
      <div className='tabs-wrapper'>
        <div className='tabs-list'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
