import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';

const useStyles =  makeStyles(theme => ({
    '@global':{
         body:{
             backgroundColor:theme.palette.common.white
         },
    },
     paper: {
       marginTop: theme.spacing(8),
       display:'flex',
       alignItems: 'center',
       flexDirection:'center',
     },
   }));


class SignIn extends React.Component{
    render(){
        const classes ={}
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className ={classes.paper}>
                    <Typography component="h1" variant="h5">
                        SignIn
                    </Typography>

                </div>
            </Container>
        );
    }
}

export default SignIn