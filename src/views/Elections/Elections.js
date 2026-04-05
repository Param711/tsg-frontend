"use client";
import { Typography, Container, Box, Button } from "@material-ui/core";
import React from "react";

import Layout from "../../components/Layouts/Layout";
import Styles from "./elections.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
export default function Elections() {
  if (typeof window !== "undefined") document.title = "Elections 2025-2026 | TSG";
  return (
    <Layout>
      <div className={Styles.pageContainer}>
        {/* Header Region */}
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>2025-2026</div>
          <h1 className={Styles.mainTitle}>TSG ELECTIONS</h1>
        </div>

        <Box className={Styles.electionBody}>
          <Typography variant="body2" className={Styles.introText}>
            Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries
            out election to select office bearers from students for smooth
            conduction of student related activities.
          </Typography>
          <Typography variant="body2" className={Styles.introText}>
            The nomination, approval and voting will be done using digital
            platform developed by ERP, IIT Kharagpur. The date for Gymkhana
            Election is as follows:
          </Typography>
          <div className={Styles.detailsBox}>
            <p><b>Date of Election:</b> 6th April 2025 (Saturday)</p>
            <p><b>Time of Election:</b> 8:00 AM to 6:00 PM</p>
            <p><b>Venue:</b> Computer & Informatics Center (CIC), Takshashila, IIT Kharagpur</p>
            <p><b>Platform:</b> Institute ERP</p>
            <br />
            <p className={Styles.noteText}>Note: Remember to keep your ID card, ERP and Institute Email password with you when you go for voting!</p>
          </div>
        </Box>

        <Box className={Styles.electionBody}>
          <Typography variant="h5" className={Styles.sectionTitle}>Notices:</Typography>
          <Box className={Styles.notices}>
            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Elections 2025-2026 Results
              </div>
              <a
                href="/data/media/files/Results_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                View Result <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>

            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Advisory for TSG Elections 2025-26
              </div>
              <a
                href="/data/media/files/Advisory_TSG_Elections_2025-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                View Notice <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>

            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                SOAPBOX SCHEDULE 2025-26
              </div>
              <a
                href="/data/media/files/SOAPBOX_Schedule_2025-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                View Schedule <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>

            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Final Proposals of Candidates
              </div>
              <a href="/elections/candidates" rel="noopener noreferrer" className={Styles.goldButton}>
                View Proposals <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>

            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Final List of Nominations for TSG Election (2025-26)
              </div>
              <a
                href="/data/media/files/Final_List_of_Candidates_for_Election_of_Office_Bearers_of_TSG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                View List <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>

            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                TSG Election (2025-2026) Notification
              </div>
              <a
                href="/data/media/files/Election 2025-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                View Schedule and Rules <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>

            <div className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Election Officer (2025 - 2026)
              </div>
              <a
                href="mailto:samantaray@mech.iitkgp.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.goldButton}
              >
                Prof. Arun Kumar Samantaray <LaunchIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </a>
            </div>
          </Box>
        </Box>

        <Box className={Styles.electionBody}>
          <Typography variant="h5" className={Styles.sectionTitle}>Relevant Documents:</Typography>
          <Box className={Styles.buttonGroup}>
            <a
              href="/data/media/files/Rules 2025-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.goldButton}
            >
              Rules
            </a>
            <a
              href="/data/media/files/General_Conduct_Rules_and_Guidelines_of_IIT_Kharagpur.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.goldButton}
            >
              Conduct Guidelines
            </a>
            <a
              href="/data/media/files/voting_procedure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.goldButton}
            >
              Voting Procedure
            </a>
          </Box>
        </Box>
      </div>
    </Layout>
  );
}
