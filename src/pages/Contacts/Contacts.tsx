import React from "react";
import styles from "./Contacts.module.scss";
import { Button, FormGroup, Grid, Input, Paper, TextField} from "@mui/material";

const Contacts = () => {
  return (
    <main className={styles.main}>

          <Grid container className={styles.contactForm}>
            <Grid item lg={12}>
              <Paper className={styles.wrapper} >
                <FormGroup id="contact-form" >
                  {/* Row 1 of form */}
                  <Grid container >
                    <Grid item lg={6}>
                      <Input
                        type="text"
                        name="name"
                        className="form-control formInput"
                        placeholder="Name"
                      />
                    </Grid>
                      <Grid item lg={6}>
                      <Input
                        type="email"
                        name="email"
                        className="form-control formInput"
                        placeholder="Email address"
                      />
                      </Grid>
                  </Grid>
                  {/* Row 2 of form */}
                  <Grid container >
                    <Grid item lg={12}>
                      <Input
                        type="text"
                        name="subject"
                        className="form-control formInput"
                        placeholder="Subject"
                      />
                    </Grid>
                  </Grid>
                  {/* Row 3 of form */}
                  <Grid container style={{ margin: "10px 0"}}>
                    <Grid item lg={12}>
                      <TextField
                        rows={3}
                        name="message"
                        className="form-control formInput"
                        placeholder="Message"
                      />
                    </Grid>
                  </Grid>
                  <Button variant='contained' type="submit" color='warning'>
                    Submit
                  </Button>
                </FormGroup>
              </Paper>
            </Grid>
          </Grid>
    </main>
  );
};

export default Contacts;
