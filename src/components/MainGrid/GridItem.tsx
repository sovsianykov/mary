import React, {FunctionComponent} from 'react';
import {Paint} from "../../assets/painting/Digital/Digital";
import {Grid} from "@material-ui/core";

interface GridItemProps {
    image : Paint;
}

const GridItem:FunctionComponent<GridItemProps> = ({image}) => {
    return (
        <Grid item xs={12} md={3} >

        </Grid>
    );
};

export default GridItem;
