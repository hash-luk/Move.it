import { useState, useEffect } from "react";
import styles from "../styles/components/MenuBar.module.css";

export default function MenuBar() {

  return (
    <div className={styles.MenuBar}>
      <div>
        <a href="#">
          <img src="/move-it-logo.svg" alt="Logo" />
        </a>
      </div>
      <div>
        <div className={styles.MenuBarMain}>
            <button type="button" autoFocus>
              <img src="/icons/home.svg" alt="Home Icon" />
            </button>

            <button type="button">
              <img src="/icons/leaderboard.svg" alt="Leaderboard Icon" />
            </button>
        </div>
      </div>
      <div>{/* Esta div é apenas para alinha o menu */}</div>
    </div>
  );
}
