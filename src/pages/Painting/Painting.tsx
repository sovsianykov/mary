import React from "react";
import { Paints } from "../../assets/painting/Paints/Paints";
import Gallery from "../../components/Gallery/Gallery";

const Painting = () => {
  return (
      <Gallery photos={Paints} />
  );
};

export default Painting;
