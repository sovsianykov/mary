import React, { FunctionComponent } from "react";
import styles from "./MainGrid.module.scss";
import { Paint  } from "../../assets/painting/Digital/Digital";
import { Grid } from "@material-ui/core";
import GridItem from "./GridItem";

interface MainGridProps {
  images: Paint[];
}

const MainGrid: FunctionComponent<MainGridProps> = ({images}) => {



  return (
   <Grid container className={styles.mainGrid} alignItems="stretch">
       {images.map((image) => <Grid item key={image.id} xs={12} md={4} lg={3}   >
           <GridItem image={image} />
       </Grid> )}
   </Grid>
  );
}
export default MainGrid;
