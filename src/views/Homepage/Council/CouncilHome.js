"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from "./council-home.module.css";
import AppImage from "../../../components/AppImage";

export default function CouncilHome() {
  const router = useRouter();
  return (
    <div className={Styles.container}>
      <div className={Styles.headerRegion}>
        <div className={Styles.yellowSubtitle}>CURRENT OFFICE BEARERS</div>
        <h2 className={Styles.mainTitle}>COUNCIL</h2>
      </div>

      <div className={Styles.councilWrapper}>
        <div className={Styles.councilContent}>
          <div className={Styles.councilDescription}>
            <p>
              The Technology Students&apos; Gymkhana is led by a representative council comprising 
              <strong> elected and nominated student office bearers, along with faculty members.</strong>
            </p>
            <p>
              At its core, the <strong>Executive Council</strong> oversees all activities across the four verticals, 
              coordinating events, managing operations, and shaping policy. Together, they ensure 
              that the Gymkhana functions efficiently while <strong>representing</strong> and <strong>advancing</strong> the interests 
              of the student community.
            </p>
          </div>
        </div>

        <div className={Styles.councilImageContainer}>
          <div className={Styles.imagePadWhite}>
            <AppImage src="/images/officebearers.png" alt="Council" width={1000} height={600} />
          </div>
        </div>
      </div>

      <div className={Styles.buttonContainer}>
        <button className={Styles.viewAllBtn} onClick={() => router.push('/contacts')}>
          Learn More
        </button>
      </div>
    </div>
  );
}
