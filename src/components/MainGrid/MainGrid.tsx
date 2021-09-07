import React, { FunctionComponent } from "react";
import styles from "./MainGrid.module.scss";
import { Paint,digitalPaints } from "../../assets/painting/Digital/Digital";
import { Grid } from "@material-ui/core";
import GridItem from "./GridItem";

interface MainGridProps {
  digitalPaints: Paint[];
}

const MainGrid: FunctionComponent<MainGridProps> = () => {



  return (
   <Grid container >
           {digitalPaints.map(image => <GridItem key={image.id} image={image} />}
   </Grid>
  );
}
export default MainGrid;
