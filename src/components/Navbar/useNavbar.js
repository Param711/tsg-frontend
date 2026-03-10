"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Styles from "../../styles/components/navbar.module.css";
export default function useNavbar() {
  // using setIsScrolled state to render navbar on the basis of scroll status
  const pathname = usePathname(); //to render navbar on the basis of route
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      window.scrollY > 80 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", changeNavbarBackground);
    return () => window.removeEventListener("scroll", changeNavbarBackground);
  }, []);

  // navbar class on the basis of scroll status
  let navbarClass;

  //if path is home then render tranparent navbar
  if (pathname === "/") {
    if (isScrolled) {
      navbarClass = `${Styles.navbarContainer} ${Styles.activeNavbar}`;
    } else {
      navbarClass = `${Styles.navbarContainer}`;
    }
  } else {
    navbarClass = `${Styles.navbarContainer} ${Styles.activeNavbar}`;
  }
  return navbarClass;
}
