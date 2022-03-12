import React from "react";
import { graphicsPaints } from "../../assets/painting/Graphics/Graphics";
import Gallery from "../../components/Gallery/Gallery";

const Graphics = () => {
  return (
      <Gallery images={graphicsPaints} />
  );
};

export default Graphics;
