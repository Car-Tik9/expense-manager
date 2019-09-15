import React from 'react'
import { Container, CssBaseline, Typography, Grid, TextField, Paper, Button, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import Image from '../images/sign_up.jpg'

const styles = theme  => ({
    '@global':{
         body:{
            backgroundColor:theme.palette.common.white,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${Image})`,
	        backgroundSize:'cover',
         },
    },
     paper: {
       marginTop: theme.spacing(18),
       display:'flex',
       alignItems: 'center',
     },
     paperconatiner:{
        padding:theme.spacing(4,2),
        opacity:0.8,
    },
     form:{
         width: '100%',
         marginTop:theme.spacing(2),
     },
     submit:{
         margin:theme.spacing(3,0,2),
     },
     errorString:{
         textAlign:'center'
     },
   });

class SignUp extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline></CssBaseline>
                <div className={classes.paper}>
                <Paper elevation={2} className = {classes.paperconatiner}>
                    <Typography component="h1" variant="h5" align="center">
                        Sign up
                    </Typography>
                    <form className ={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="userName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="User Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth
                        variant="contained"
                        color="primary" 
                        className= {classes.submit}> 
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signin">
                                    Already have an account? Sign In
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                    </Paper>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(SignUp)