"use client";
import React, { useState, useEffect } from "react";
import AppImage from "../AppImage";
import Styles from "./preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Disable scrolling when preloader is active
    document.body.style.overflow = "hidden";

    // Start fading out at 0.5 seconds
    const timer = setTimeout(() => {
      setFade(true);
    }, 500);

    // Completely unmount after fade transition completes (500ms display + 400ms fade)
    const removeTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 900);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`${Styles.preloaderContainer} ${fade ? Styles.fadeOut : ""}`}>
      <div className={Styles.contentWrapper}>
        <AppImage
          src="/data/media/images/general/gymkhanaLogo.png"
          alt="Gymkhana Logo"
          width={200}
          height={200}
        />
        <div className={Styles.textWrapper}>
          <span className={Styles.textSmall}>TECHNOLOGY STUDENTS&apos;</span>
          <span className={Styles.textLarge}>GYMKHANA</span>
        </div>
      </div>
    </div>
  );
}
