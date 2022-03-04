import React, { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
import {Instagram, Facebook, Telegram} from "@mui/icons-material";
const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <a href="https://www.facebook.com/profile.php?id=100008529724244"
             target="_blank"
             rel="noreferrer"
             className={styles.iconsWrapper}>
            <Instagram className={styles.icons} />
          </a>
            <a href="https://www.facebook.com/profile.php?id=100008529724244"
               target="_blank"
               rel="noreferrer"
               className={styles.iconsWrapper}>
                <Facebook className={styles.icons}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008529724244"
               target="_blank"
               rel="noreferrer"
               className={styles.iconsWrapper}>
                <Telegram  className={styles.icons}/>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
