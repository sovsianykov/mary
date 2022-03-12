import React from 'react';
import Gallery from "../../components/Gallery/Gallery";
import {digitalPaints} from "../../assets/painting/Digital/Digital";

const DigitalPaintings = () => {
    return (
        <Gallery photos={digitalPaints}/>
    );
};

export default DigitalPaintings;