"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Styles from "../../../styles/views/home.module.css";
import AppImage from "../../../components/AppImage";

export default function AboutUs() {
  const [easterEggs, setEasterEggs] = useState([]);

  const handleDoubleClick = (e) => {
    const eggId = Date.now() + Math.random();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setEasterEggs((prev) => [...prev, { id: eggId, x, y }]);
    setTimeout(() => {
      setEasterEggs((prev) => prev.filter((egg) => egg.id !== eggId));
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 150, damping: 15, delay: 0 }
    }
  };

  const descriptionVariants = (delay) => ({
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay }
    }
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: "circOut", delay: 0 }
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.aboutUsSectionWrapper}>
        <div className={Styles.aboutContent}>
          <motion.h2
            className={Styles.aboutHeading}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            OVERVIEW
          </motion.h2>

          <motion.div
            variants={descriptionVariants(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className={Styles.aboutDescription}>
              <span className={Styles.highlightWhite}>Technology Students&apos; Gymkhana</span> is the hub of the numerous <span className={Styles.highlightWhite}>extra-curricular and co-curricular</span> activities in IIT Kharagpur ranging from <span className={Styles.highlightWhite}>sports to socio-cultural</span>. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
            </p>
          </motion.div>

          <motion.div
            variants={descriptionVariants(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className={Styles.aboutDescription}>
              The motto of Technology Students&apos; Gymkhana is <span className={Styles.highlightWhite}>YOGAH KARMASU KAUSALAM</span>, which in English means <span className={Styles.highlightWhite}>&quot;Excellence in action is Yoga&quot;</span>. Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.
            </p>
          </motion.div>

          <motion.div
            className={Styles.readConstitution}
            variants={descriptionVariants(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <a href="/data/media/files/Gymkhana_Constitution.pdf" target="_blank" rel="noopener noreferrer">Read The Constitution</a>
            <div className={Styles.yellowLine}></div>
          </motion.div>
        </div>

        <motion.div
          className={Styles.aboutImageContainer}
          onDoubleClick={handleDoubleClick}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AppImage src="/images/iitkgp.jpg" alt="IIT Kharagpur Main Building" width={600} height={400} />
          <AnimatePresence>
            {easterEggs.map((egg) => (
              <motion.div
                key={egg.id}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: -40 }}
                exit={{ opacity: 0, scale: 0, y: -60 }}
                className={Styles.easterEggText}
                style={{ left: egg.x, top: egg.y }}
              >
                Peace hai!
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
