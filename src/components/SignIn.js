import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, TextField, Button, Grid, Link, Paper, InputAdornment, IconButton, InputLabel } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email'
import PasswordIcon from '@material-ui/icons/VpnKey'

import Image from '../images/login_four.jpg'
import { login } from '../actions'

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
     errorString:{
         textAlign:'center'
     },
   });


class SignIn extends React.Component{
    state ={ 
        username:'',
        password:'',
        submitted:false
    };
    render(){
        const { classes } = this.props;
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className ={ classes.paper }>
                    <Paper elevation={2} className = {classes.paperconatiner}>
                    <Typography component="h1" variant="h5" align="center">
                        Expense Manager
                    </Typography>
                    <form className= {classes.form} noValidate onSubmit={this.handleOnSubmit}>
                        <TextField id="username"
                                variant="outlined" 
                                required fullWidth 
                                label="User Name"
                                name = "username"
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
                                onChange = {event => this.setState({username:event.target.value})}
                                value={this.state.username}
                                error={this.state.submitted && this.state.username ===''}
                                helperText="please input username"
                        />
                        <TextField id="password" 
                                variant="outlined"
                                required fullWidth 
                                label="Password"
                                name = "password"
                                margin="normal"
                                type="password"
                                InputProps ={{
                                    endAdornment:(
                                        <InputAdornment>
                                            <IconButton>
                                                <PasswordIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                onChange = {event => this.setState({password:event.target.value})}
                                value={this.state.password}
                                error={this.state.submitted && this.state.password ===''}
                                helperText="please input password"
                        />
                        <InputLabel className={classes.errorString}
                        error={true}>{this.props.errorMessage}</InputLabel>
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
                            <Link href="/signup" variant="body2">
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
    handleOnSubmit = event => {
        event.preventDefault();
        this.setState({submitted:true});
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }

    }
}

function mapToState(state){
    const errorMessage = state.authentication.errorMessage;
    return {errorMessage};
}

export default withStyles(styles)(connect(mapToState,{login})(SignIn))