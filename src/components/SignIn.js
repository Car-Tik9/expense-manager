import React from 'react';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, TextField, Button, Grid, Link, Paper, InputAdornment, IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email'
import PasswordIcon from '@material-ui/icons/VpnKey'

import Image from '../images/login_four.jpg'

const styles = theme  => console.log(theme) || ({
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
       flexDirection:'column',
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
   });


class SignIn extends React.Component{
    render(){
        console.log(this.props);
        const { classes } = this.props;
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className ={ classes.paper }>
                    <Paper elevation="2"className = {classes.paperconatiner}>
                    <Typography component="h1" variant="h5" align="center">
                        Expense Manager
                    </Typography>
                    <form className= {classes.form}>
                        <TextField id="email"
                                variant="outlined" 
                                required fullWidth 
                                label="Email Address"
                                name = "email"
                                margin="normal"
                                autoFocus
                                InputProps ={{
                                    endAdornment:(
                                        <InputAdornment>
                                            <IconButton>
                                                <EmailIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                        />
                        <TextField id="password" 
                                variant="outlined"
                                required fullWidth 
                                label="Password"
                                name = "password"
                                margin="normal"
                                InputProps ={{
                                    endAdornment:(
                                        <InputAdornment>
                                            <IconButton>
                                                <PasswordIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >SignIn</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot Password ?
                                </Link>
                            </Grid> 
                            <Grid item>
                            <Link href="#" variant="body2">
                                   Sign Up ?
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

export default withStyles(styles)(SignIn)