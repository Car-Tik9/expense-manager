import React from 'react'
import { Typography, colors, withStyles } from '@material-ui/core'


const styles  =  theme =>({
    root:{
        backgroundColor : colors.grey[100]
    },
    content:{
        paddingTop: theme.spacing(2),
        textAlign: 'center',
        height:80
    }
})
class DeveloperInfo extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className ={classes.root}>
                <div className ={classes.content}>
                    <Typography>Developed by Karthik and Dileep</Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DeveloperInfo)