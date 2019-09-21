import React from 'react'

import { withStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core';
import AccountProfile from './Components/AccountProfile';
import AccountDetails from './Components/AccountDetails';

const styles  = theme =>({
    root:{
        padding : theme.spacing(4)
    }
});
class Account extends React.Component{
    render(){
        const { classes } =  this.props;
        return(
           <div className = {classes.root}>
               <Grid container spacing = {3}>
                    <Grid item lg={8} md={6} xl={8} xs={12}>
                        <AccountDetails></AccountDetails>
                    </Grid>
                    <Grid item lg={4} md={6} xl={4} xs={12}>
                       <AccountProfile></AccountProfile>
                    </Grid>
                </Grid>           
            </div>
        )
    }
}

export default withStyles(styles)(Account)