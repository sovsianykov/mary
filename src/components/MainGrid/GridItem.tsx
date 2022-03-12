import React, { FunctionComponent } from "react";
import styles from "./MainGrid.module.scss";
import { Paint } from "../Gallery/models";

interface GridItemProps {
  image: Paint;
}

const GridItem: FunctionComponent<GridItemProps> = ({ image }) => {
  return (
    <div className={styles.imageFrame}>
      <img src={image.src} alt={image.title} className={styles.picture} />
    </div>
  );
};

export default GridItem;
