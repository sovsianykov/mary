import React from 'react';
import styles from "./Painting.module.scss"
import {createStyles, makeStyles, Theme} from "@material-ui/core";

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

const Painting = () => {
    return (
        <div>
          Panting
        </div>
    );
};

export default Painting;
