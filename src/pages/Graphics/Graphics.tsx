import React from "react";
import MainGrid from "../../components/MainGrid/MainGrid";
import { graphicsPaints } from "../../assets/painting/Graphics/Graphics";
import styles from "./Graphics.module.scss";

const Graphics = () => {
  return (
    <main className={styles.main}>
      <MainGrid images={graphicsPaints} />
    </main>
  );
};

export default Graphics;
