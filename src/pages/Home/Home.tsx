import React from 'react';
import styles from "./Home.module.scss"
import HeroPhoto from "../../components/HeroPhoto/HeroPhoto";
import {Grid, Typography} from "@material-ui/core";

const Home = () => {
    return (
            <Grid container className={styles.home} >
                <Grid item xs={12}  sm={5} className={styles.picture} >
                    <HeroPhoto/>
                </Grid>
                <Grid item xs={12}  sm={7}>
                   <Typography  className={styles.title}>Hello, I'm Mary ! </Typography>
                   <p className={styles.description}>Lorem ipsum dolor sit amet,
                       consectetur adipisicing elit. Ad adipisci aliquam amet animi
                       at dolores doloribus earum error est et ex exercitationem harum,
                       inventore iste magnam modi nesciunt nisi nostrum
                       odio odit placeat praesentium quidem sit suscipit vel vitae voluptas? </p>
                </Grid>

            </Grid>

    );
};

export default Home;
