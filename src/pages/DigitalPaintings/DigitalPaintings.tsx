import React from 'react';
import Gallery from "../../components/Gallery/Gallery";
import {digitalPaints} from "../../assets/painting/Digital/Digital";

const DigitalPaintings = () => {
    return (
        <Gallery images={digitalPaints}/>
    );
};

export default DigitalPaintings;