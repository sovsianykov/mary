import React, {FunctionComponent} from 'react';
import { Paint } from "../../assets/painting/Digital/Digital";
import styles from "./MainGrid.module.scss";


interface GridItemProps {
    image : Paint;
}

const GridItem:FunctionComponent<GridItemProps> = ({image}) => {
    return (

           <div className={styles.imageFrame}>
               <img src={image.src} alt={image.title} className={styles.picture}/>
           </div>
    );
};

export default GridItem;
