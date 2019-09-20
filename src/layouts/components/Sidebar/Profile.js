import React from 'react'
import { Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
    root:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        minHeight:'fit-content'
    },
    avatar:{
        width:80,
        height:80
    },
    name:{
        marginTop :theme.spacing(1)
    }
})
class Profile extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Avatar className = {classes.avatar}>

                </Avatar>
                <Typography variant="h6" className={classes.name}>
                    Karthik Uppala
                </Typography>
            </div>
        );
    }
}
export default withStyles(styles)(Profile)