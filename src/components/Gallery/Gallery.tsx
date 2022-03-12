import React, {FunctionComponent, memo, useCallback, useState} from "react";
import Masonry from "react-masonry-component";
import styles from "./styles.module.scss";
import { Paint } from "../../assets/painting/Digital/Digital";
import {Box, Button} from "@mui/material";

interface LightBox {
  open: boolean;
  index: number | null;
  url: string;
}
interface Props {
  images: Paint[];
}

const Gallery: FunctionComponent<Props> = ({ images }) => {
  const [lightBox, setLightbox] = useState<LightBox>({
    open: false,
    index: null,
    url: "",
  });

  const showLightbox = useCallback(
    (url: string, index: number | null): void => {
      setLightbox({
        open: true,
        index,
        url,
      });
    },
    []
  );

  const navigate = useCallback(
    (direction: string): void => {
      if (direction === "next") {
        setLightbox({
          open: true,
          index: lightBox.index!! + 1,
          url: images[lightBox.index!! + 1].src,
        });
      } else if (direction === "prev") {
        setLightbox({
          open: true,
          index: lightBox.index!! - 1,
          url: images[lightBox.index!! - 1].src,
        });
      }
    },
    [lightBox.index, images]
  );

  const closeLightbox = useCallback((): void => {
    setLightbox({
      open: false,
      index: null,
      url: "",
    });
  }, []);

  return (
    <>
      <Box className={styles.app}>
        <Masonry className={styles.masonry} elementType="div" >
          {images.map((image, i) => (
            <Box className={styles.box} key={image.id}>
              <img
                alt={image.src}
                src={image.src}
                onClick={() => showLightbox(image.src, i)}
              />
            </Box>
          ))}
        </Masonry>
      </Box>

      {lightBox.open && (
        <Button className={styles.lightbox} role='presentation'>
          <Button
            variant="contained"
            color="warning"
            className="close"
            onClick={closeLightbox}
          >
            close
          </Button>
          {lightBox.index !== 0 && (
            <Button
              variant="contained"
              color="warning"
              className={styles.leftBtn}
              onClick={() => navigate("prev")}
            >
              Prev
            </Button>
          )}
          <img src={lightBox.url} alt={lightBox.url} />
          {lightBox.index !== images.length - 1 && (
            <Button
              variant="contained"
              color="warning"
              className={styles.rightBtn}
              onClick={() => navigate("next")}
            >
              Next
            </Button>
          )}
        </Button>
      )}
    </>
  );
};
export default memo(Gallery);
