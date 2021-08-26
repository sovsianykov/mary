import React, {FunctionComponent} from "react";
import styles from "./About.module.scss";
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
  const useStyles = makeStyles<Theme>((theme: Theme) => {
  return createStyles({
    rootWrapper: {
      display: "flex",
      width: "100%",
      margin: " 0 auto",
    },
    root: {
      marginTop: "50px",
      padding: "10px",
      width: "100%",
    },
    title: {
      marginTop: "20px",
      fontSize: "50px",
      letterSpacing: ".2rem",
      fontWeight: 500,
    },
    text: {
      fontSize: "20px",
      padding: " 30px",
      letterSpacing: ".1rem",
      fontWeight: 500,
    },
  });
});

const About: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <section className={classes.rootWrapper}>
      <Paper className={classes.root}>
        <Typography className={classes.title} variant="h4" align="center">
          About me
        </Typography>
        <Typography className={classes.text} variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          hic id modi perferendis porro sunt voluptas. Deserunt, excepturi
          expedita iusto magni repellendus saepe sequi velit voluptate. Ad alias
          aliquid cupiditate distinctio dolor eveniet in molestiae
          necessitatibus optio quam quis, ullam! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusamus hic id modi perferendis porro
          sunt voluptas. Deserunt, excepturi expedita iusto magni repellendus
          saepe sequi velit voluptate. Ad alias aliquid cupiditate distinctio
          dolor eveniet in molestiae necessitatibus optio quam quis, ullam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          hic id modi perferendis porro sunt voluptas. Deserunt, excepturi
          expedita iusto magni repellendus saepe sequi velit voluptate. Ad alias
          aliquid cupiditate distinctio dolor eveniet in molestiae
          necessitatibus optio quam quis, ullam! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusamus hic id modi perferendis porro
          sunt voluptas. Deserunt, excepturi expedita iusto magni repellendus
          saepe sequi velit voluptate. Ad alias aliquid cupiditate distinctio
          dolor eveniet in molestiae necessitatibus optio quam quis, ullam!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          hic id modi perferendis porro sunt voluptas. Deserunt, excepturi
          expedita iusto magni repellendus saepe sequi velit voluptate. Ad alias
          aliquid cupiditate distinctio dolor eveniet in molestiae
          necessitatibus optio quam quis, ullam!
        </Typography>
      </Paper>
    </section>
  );
};

export default About;
