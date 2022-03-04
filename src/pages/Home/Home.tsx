import React, { memo } from "react";
import styles from "./Home.module.scss";
import HeroPhoto from "../../components/HeroPhoto/HeroPhoto";
import { Grid, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container className={styles.home}>
      <Grid item xs={12} sm={5} className={styles.picture}>
        <HeroPhoto />
      </Grid>
      <Grid item xs={12} sm={7} className={styles.text}>
        <Typography className={styles.title}>Hello, I'm Mariia! </Typography>
        <p className={styles.description}>
          My name is Mariia Ovsianykova. Im 18 years old. Im illustrator from
          Ukraine. I am a first year student at the National Academy of Fine
          Arts and Architecture. I love Japanese culture, and most of my work in
          Japanese style.{" "}
        </p>
      </Grid>
    </Grid>
  );
};

export default memo(Home);
