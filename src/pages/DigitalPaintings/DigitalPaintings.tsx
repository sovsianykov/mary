import React, {FunctionComponent} from 'react';
import MainGrid from "../../components/MainGrid/MainGrid";
import { digitalPaints } from "../../assets/painting/Digital/Digital";
import styles from "./DigitalPaintings.module.scss";


const DigitalPaintings:FunctionComponent = () => {
    return (
        <div className={styles.main}>
          <MainGrid images={digitalPaints}/>
        </div>
    );
};

export default DigitalPaintings;