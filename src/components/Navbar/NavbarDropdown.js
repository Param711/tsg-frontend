"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "../../styles/components/navbar.module.css";

export default function NavbarDropdown({ title, items, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.98, 
      y: 10, 
      height: 0,
      overflow: "hidden" 
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      height: "auto",
      transition: {
        height: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.2 },
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.2, ease: "easeIn" },
        opacity: { duration: 0.15 },
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
  };

  return (
    <li
      className={`${Styles.navItem} ${Styles.hasDropdown}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className={`${Styles.navLinks} ${isActive ? Styles.activeLink : ""}`}>
        {title} <i className="fas fa-caret-down" style={{ fontSize: "0.8rem", marginLeft: "4px" }}></i>
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={Styles.dropdownMenu}
          >
            {items.map((item, index) => (
              <motion.li key={index} variants={itemVariants} className={Styles.dropdownItem}>
                {item.path.startsWith("http") ? (
                  <a href={item.path} target="_blank" rel="noreferrer" className={Styles.dropdownLink}>
                    {item.title}
                  </a>
                ) : (
                  <Link href={item.path} className={Styles.dropdownLink} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
