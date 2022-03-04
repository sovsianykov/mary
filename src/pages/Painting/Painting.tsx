import React from "react";
import styles from "../DigitalPaintings/DigitalPaintings.module.scss";
import MainGrid from "../../components/MainGrid/MainGrid";
import { Paints } from "../../assets/painting/Paints/Paints";

const Painting = () => {
  return (
    <div className={styles.main}>
      <MainGrid images={Paints} />
    </div>
  );
};

export default Painting;
