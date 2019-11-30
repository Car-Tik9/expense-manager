import React from 'react'
import { Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import {connect} from 'react-redux'

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
                <Avatar className = {classes.avatar} alt={this.props.userProfile.imageAltText} src={this.props.userProfile.imageUrl}>

                </Avatar>
                <Typography variant="h6" className={classes.name}>
                    {this.props.userProfile.name}
                </Typography>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { userProfile} = state.expense;
    return { userProfile };
}
export default withStyles(styles)(connect(mapStateToProps,{})((Profile)))