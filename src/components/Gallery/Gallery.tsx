import React, { FunctionComponent, memo, useCallback, useState } from "react";
import Masonry from "react-masonry-component";
import styles from "./styles.module.scss";
import { Box, Button } from "@mui/material";
import { Direction, GalleryProps, LightBox } from "./models";

const Gallery: FunctionComponent<GalleryProps> = ({ images }) => {
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
    (direction: Direction.prev | Direction.next): void => {
      if (direction === Direction.next) {
        setLightbox({
          open: true,
          index: lightBox.index!! + 1,
          url: images[lightBox.index!! + 1].src,
        });
      } else if (direction === Direction.prev) {
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
        <Masonry className={styles.masonry} elementType="div">
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
        <Box className={styles.lightbox} role="presentation">
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
              onClick={() => navigate(Direction.prev)}
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
              onClick={() => navigate(Direction.next)}
            >
              Next
            </Button>
          )}
        </Box>
      )}
    </>
  );
};
export default memo(Gallery);
