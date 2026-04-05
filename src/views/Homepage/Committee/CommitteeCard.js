"use client";
import React from "react";
import Link from "next/link";
import Styles from "./committee-card.module.css";
import AppImage from "../../../components/AppImage";

export default function CommitteeCard({ data, index, societies = [] }) {
  return (
    <Link href={data.route} style={{ textDecoration: "none" }}>
      <div className={`${Styles.card} ${index === 0 ? Styles.firstCard : ''}`}>
        <div className={Styles.topSection}>
          <AppImage src={data.background} alt={data.heading} width={400} height={300} />
          <div className={Styles.titleContainer}>
            <h3 className={data.titleClass}>{data.heading}</h3>
          </div>
          <p className={Styles.description}>{data.description}</p>
        </div>
        <div className={Styles.clubList}>
          <div className={Styles.clubScrollArea}>
            {societies.map((soc) => (
              <div key={soc.shortform} className={Styles.clubItem}>
                <div className={Styles.clubLogo}>
                  <AppImage
                    src={soc.img}
                    alt={soc.name}
                    width={28}
                    height={28}
                  />
                </div>
                <div className={Styles.clubName}>{soc.name}</div>
              </div>
            ))}
          </div>
          <div className={Styles.exploreLink}>
            {data.exploreLine}
          </div>
        </div>
      </div>
    </Link>
  );
}
