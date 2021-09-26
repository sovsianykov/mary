import React, {FunctionComponent} from "react";
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
    Grid,
  Typography,
} from "@material-ui/core";
  const useStyles = makeStyles<Theme>(() => {
  return createStyles({
    rootWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      margin: " 0px auto",


    },
    paper: {
      marginTop: "10px",
      padding: "20px",
      width: "80%",

    title: {
      margin: "20px",
      fontSize: "50px",
      letterSpacing: ".2rem",
      fontWeight: 500,
    },
    text: {
      fontSize: "20px",
      padding: " 30px",
      letterSpacing: ".1rem",
      fontWeight: 500,
      margin: "30px",
    },
    }
  });
});

const About: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid  container  className={classes.rootWrapper}>
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant="h4" align="center">
          обо мне
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

        </Typography>
      </Paper>
    </Grid>
  );
};

export default About;
