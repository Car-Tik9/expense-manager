import React from 'react'
import { Card, CardContent, Typography, Avatar, Divider, CardActions, Button, CardHeader, TextField, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
const style = theme => ({
    details :{
        display:'flex'
    },
    avatar :{
        marginLeft : 'auto',
        height : 110,
        width:100
    },
    cardTitle :{
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
})
class AccountProfile extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <Card>
                <CardHeader title="Password" 
                subheader="Update your password">
                </CardHeader>
                <Divider></Divider>
                <CardContent>
                    <TextField fullWidth 
                        label="Password"
                        name="password"
                        variant="outlined">
                    </TextField>
                    <TextField fullWidth 
                        label="Confirm Password"
                        name="password"
                        style={{ marginTop: '1rem' }}
                        variant="outlined">
                    </TextField>
                </CardContent>
                <Divider></Divider>
                <CardActions>
                    <Button color ="primary" variant="outlined" >
                        UPDATE
                    </Button>
                </CardActions>
            </Card>
        )
    }    
}

export default withStyles(style)(AccountProfile)