"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Styles from "./events-home.module.css";
import AppImage from "../../../components/AppImage";

export default function EventsHome() {
  const router = useRouter();
  return (
    <div className={Styles.container}>
      <div className={Styles.headerRegion}>
        <div className={Styles.yellowSubtitle}>THE SPIRIT OF KGP</div>
        <h2 className={Styles.mainTitle}>EVENTS</h2>
      </div>

      <div className={Styles.eventsGrid}>
        {/* Wellbeing Day */}
        <div className={Styles.eventRow}>
          <div className={`${Styles.eventImageContainer} ${Styles.imageLeft}`}>
            <AppImage src="/images/wellbeing.jpg" alt="Wellbeing Day" width={500} height={350} />
            <div className={Styles.dateBadge}>MAR 2026</div>
          </div>
          <div className={Styles.eventTextContainer}>
            <h3 className={Styles.eventTitle}>WELLBEING <br/> DAY</h3>
            <p className={Styles.eventDesc}>
              Organised by the Students&apos; Welfare Committee, this day is dedicated to the holistic well-being of the KGP community through mental health workshops and interactive sessions.
            </p>
            <div className={Styles.exploreLink}>
              <span onClick={() => router.push('/events')}>Explore Event</span>
              <div className={Styles.yellowLine} />
            </div>
          </div>
        </div>

        {/* Spring Fest */}
        <div className={Styles.eventRow}>
          <div className={`${Styles.eventTextContainer} ${Styles.textLeft}`}>
            <h3 className={Styles.eventTitleRight}>SPRING <br/> FEST &apos;26</h3>
            <p className={Styles.eventDescRight}>
              IIT Kharagpur&apos;s annual socio-cultural extravaganza returned with the theme &quot;Ethereal Enigma&quot;, featuring a dazzling lineup of performances, competitions, and workshops.
            </p>
            <div className={Styles.exploreLinkRight}>
              <div className={Styles.yellowLine} />
              <span onClick={() => router.push('/events')}>Explore Event</span>
            </div>
          </div>
          <div className={`${Styles.eventImageContainer} ${Styles.imageRight}`}>
            <AppImage src="/images/springfest.jpg" alt="Spring Fest" width={500} height={350} />
            <div className={Styles.dateBadgeLeft}>FEB 2026</div>
          </div>
        </div>
      </div>

      <div className={Styles.buttonContainer}>
        <button className={Styles.viewMoreBtn} onClick={() => router.push('/events')}>
          View More
        </button>
      </div>
    </div>
  );
}
