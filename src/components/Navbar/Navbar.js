"use client";

import React, { useState, useEffect } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import Styles from "../../styles/components/navbar.module.css";
import useNavbar from "./useNavbar";
import eventsData from "../../views/Events/eventsData.js";
import Notification from "./Notification";
import { useRouter } from "next/navigation";
import ResultsDropdown from "./ResultsDropdown.js";

export default function Navbar() {
  // Custom Hook useNavbar for logic of navbarClass
  const [dropdown, setDropdown] = useState(false);
  const navbarClass = useNavbar();
  const [click, setClick] = useState(false);
  const [notification, setNotification] = useState({
    badgeContent: 0,
    click: false,
  });
  const handleClick = () => setClick(!click);
  const highlightEvents = eventsData.filter((event) => event.isHighlight);
  let listClass;
  if (click) {
    listClass = `${Styles.navMenu} ${Styles.active}`;
  } else {
    listClass = `${Styles.navMenu}`;
  }

  const router = useRouter();
  useEffect(() => {
    setNotification({ badgeContent: highlightEvents.length, click: false });
  }, [highlightEvents.length]);

  // Notifcation Click Handlers
  const handleNotificationClick = () => {
    if (!notification.click) {
      setNotification({ badgeContent: 0, click: true });
    } else {
      setNotification({ badgeContent: 0, click: false });
    }
  };
  const handleNotiClick = () => {
    router.push("/events");
  };

  return (
    <div className={navbarClass}>
      <nav className={Styles.navbar}>
        {/* Navbar logo */}
        <div className={Styles.navLogo}>
          <Link href='/' style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img src='/data/media/images/general/gymkhanaLogo.png' alt='KGP_logo' />
            <span>&nbsp;TSG</span>
          </Link>
        </div>

        {/* Menu icon on smaller devices */}
        <div className={Styles.menuIcon} onClick={() => handleClick()}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Navlinks */}
        <ul className={listClass}>
          {/* HOME */}
          <li className={Styles.navItem}>
            <Link href='/' className={Styles.navLinks}>
              Home
            </Link>
          </li>

          <li className={Styles.navItem}>
            <Link href='/societies' className={Styles.navLinks}>
              Societies
            </Link>
          </li>

          {/* EVENTS */}
          <li className={Styles.navItem}>
            <Link href='/events' className={Styles.navLinks}>
              Events
            </Link>
          </li>

          {/* BLOGS */}
          <li className={Styles.navItem}>
            {
              <a href='https://tsgblog.iitkgp.ac.in/' target='_blank' rel='noreferrer'>
                Blogs
              </a>
            }
          </li>

          {/* AWARDS */}
          <li className={Styles.navItem}>
            <Link href='/awards' className={Styles.navLinks}>
              Awards
            </Link>
          </li>

          {/* RESULTS */}
          <li
            className={`${Styles.navItem} ${Styles.results}`}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}>
            <span
              className={Styles.navLinks}
              style={{ cursor: "default" }}>
              Results
            </span>
            {dropdown && (
              <ResultsDropdown
                handleClick={() => {
                  handleClick();
                }}
              />
            )}
          </li>

          <li className={Styles.navItem}>
            <Link href='/letter-to-you' className={Styles.navLinks}>
              Letter to you
            </Link>
          </li>

          {/* ELECTIONS */}
          <li className={Styles.navItem}>
            <Link href='/elections' className={Styles.navLinks}>
              Elections
            </Link>
          </li>

          {/* NOMINATIONS */}
          <li className={Styles.navItem}>
            <Link href='/nominations' className={Styles.navLinks}>
              Nominations
            </Link>
          </li>

          {/* GALLERY */}
          {/* <li className={Styles.navItem}>
            <NavLink
              to="/gallery"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Gallery
            </NavLink>
          </li> */}

          {/* CONTACTS */}
          <li className={Styles.navItem}>
            <Link href='/contacts' className={Styles.navLinks}>
              Contacts
            </Link>
          </li>

          {/* FAQs */}
          <li className={Styles.navItem}>
            <Link href='/faq' className={Styles.navLinks}>
              FAQ
            </Link>
          </li>

          {/* NOTIFICATIONS */}
          {/* {window.innerWidth > 768 && (
            <li
              className={Styles.navItem}
              onClick={handleNotificationClick}
              style={{ position: "relative" }}
              id="notification"
            >
              <Badge badgeContent={notification.badgeContent} color="secondary">
                <NotificationsIcon
                  style={{ color: "darkgrey", cursor: "pointer" }}
                />
              </Badge>
              {notification.click && (
                <div className={Styles.notifications}>
                  {highlightEvents.length ? (
                    highlightEvents.map((event, index) => (
                      <Notification
                        key={index}
                        event={event}
                        handleClick={handleNotiClick}
                      />
                    ))
                  ) : (
                    <p style={{ padding: "1rem" }}>No Notifications</p>
                  )}
                </div>
              )}
            </li>
          )} */}
        </ul>
      </nav>
    </div>
  );
}
