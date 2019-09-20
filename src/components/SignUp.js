import React from 'react'
import { connect } from 'react-redux'
import { Container, CssBaseline, Typography, Grid, TextField, Paper, Button, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import Image from '../images/sign_up.jpg';
import { register } from '../actions';

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
    state = {
        name : '',
        userName:'',
        email :'',
        password: '',
        submitted:false
    }

    handleOnChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    handleOnSubmit= event =>{
        event.preventDefault();
        this.setState({submitted:true})
        const {name, userName,email,password} =  this.state;
        if(name  && userName && email && password){
            const user = {};
            user.name = name;
            user.userName = userName;
            user.email = email;
            user.password = password;
            this.props.register( user );
        }
    }
    render(){
        console.log(this.props)
        const { classes } = this.props;
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline></CssBaseline>
                <div className={classes.paper}>
                <Paper elevation={2} className = {classes.paperconatiner}>
                    <Typography component="h1" variant="h5" align="center">
                        Sign up
                    </Typography>
                    <form className ={classes.form} noValidate onSubmit={this.handleOnSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value ={this.state.name}
                                    onChange ={this.handleOnChange}
                                    error = { (this.state.submitted && this.state.name==='') || this.props.name !==undefined}
                                    autoFocus
                                    helperText ={this.props.name}
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
                                    value ={this.state.userName}
                                    onChange ={this.handleOnChange}
                                    error = {(this.state.submitted && this.state.userName==='') || this.props.userName !== undefined}
                                    helperText ={this.props.userName}
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
                                    value ={this.state.email}
                                    onChange ={this.handleOnChange}
                                    error = {(this.state.submitted && this.state.email==='') || this.props.email!==undefined}
                                    helperText ={this.props.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    type="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    autoComplete="password"
                                    value ={this.state.password}
                                    onChange ={this.handleOnChange}
                                    error = {(this.state.submitted && this.state.password==='') || this.props.password !== undefined}
                                    helperText ={this.props.password}
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


function mapToState(state){
    console.log(state);
    const {errorData , registering }  = state.registration;
    return {...errorData,registering};
}
export default withStyles(styles)(connect(mapToState ,{register})(SignUp))