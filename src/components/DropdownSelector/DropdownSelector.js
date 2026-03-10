"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "./DropdownSelector.css";

import RenderContactsFromDropdown from "../../views/Contacts/RenderContacts";
import RenderAwardsFromDropdown from "../../views/Awards/RenderAwards";
import RenderFaqFromDropdown from "../../views/FAQ/RenderFaq";
import RenderResultsFromDropdown from "../../views/Results/RenderResults";

export function DropdownSelector({ itemList, defaultOption }) {
  /**
   * States
   */
  const [option, setOption] = useState(defaultOption);

  /**
   * Constants
   */
  const pathname = usePathname();

  return (
    <>
      {/* Render Dropdown Selector */}
      <div className="dropdownSelector">
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="selector"
        >
          {itemList.map((item) => (
            <option key={item} value={item?.index ?? item}>
              {item?.title ?? item}
            </option>
          ))}
        </select>
        <span className="material-icons expandMore">expand_more</span>
      </div>

      {/* Render page content based on Selected option from Dropdown menu */}
      <div className="content">
        {/* CONTACTS PAGE */}
        {pathname === "/contacts" && (
          <RenderContactsFromDropdown option={option} />
        )}

        {/* AWARDS PAGE */}
        {pathname === "/awards" && (
          <RenderAwardsFromDropdown option={option} />
        )}

        {/* FAQ PAGE */}
        {pathname === "/faq" && (
          <RenderFaqFromDropdown option={option} />
        )}

        {/* RESULTS PAGE */}
        {(pathname === "/results/interiit" ||
          pathname === "/results/gc") && (
          <RenderResultsFromDropdown option={option} />
        )}
      </div>
    </>
  );
}
