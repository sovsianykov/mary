import React from "react";
import {Box, Button, Paper} from "@mui/material";


import { makeStyles } from '@mui/styles'


const useStyles  = makeStyles(() =>({
  root: {
    maxWidth:"1100px",
    height :"100vh",
     margin:'0 auto',
    textAlign:"center" ,
      justifyContent:"center",
      color: "#871010"

  },
    contacts : {
       marginTop: 100,
        width: "350px",
        height: 200,
        display:"flex",
        flexDirection:'column',
        alignItems:'center',
    },
    title : {
      marginTop: 50,
      fontSize: 20,
        letterSpacing:"0.1rem",
        fontWeight: 400,
        color: "#871010",

    },
    email : {
        textDecoration:"none",

    }
}))


const Contacts = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root} role='presentation'>
        <Paper className={classes.contacts} >
              <h2 className={classes.title}> Email me</h2>
            <a href='mailto:molbert2014@gmail.com?subject=from_my_website&body=Hello!' className={classes.email}>
            <Button variant='contained' color='warning' >
                molbert2014@gmail.com
            </Button>
            </a>
        </Paper>
    </Box>
  );
};

export default Contacts;
