import React from 'react'

import { withStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core';
import AccountDetails from './Components/AccountDetails';
import AccountPassword from './Components/AccountPassword'

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
                       <AccountPassword></AccountPassword>
                    </Grid>
                </Grid>           
            </div>
        )
    }
}

export default withStyles(styles)(Account)