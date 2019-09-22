import React from 'react'
import { Card, CardHeader, CardContent, Grid, Divider, TextField, CardActions, Button, Avatar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const style  = theme =>({
    avatar :{
        marginLeft : 'auto',
        height : 70,
        width:70
    },
});
class AccountDetails extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <Card>
                <CardHeader
                disableTypography = {true} 
                title = {
                    <Typography variant="h5">
                        Karthik Uppala
                    </Typography>
                }
                subheader ="Check and update the corresponding details"
                avatar = {
                    <Avatar className ={classes.avatar}>

                    </Avatar>
                }>
                </CardHeader>
                <Divider color="primary"/>
                <CardContent>
                    <Grid container spacing ={3}>
                        <Grid item md ={6} xs ={12}>
                            <TextField 
                            fullWidth
                            label="Name"
                            name="name"
                            margin="dense"
                            variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item md ={6} xs ={12}>
                            <TextField 
                            fullWidth
                            label="UserName"
                            name="userName"
                            margin="dense"
                            variant="outlined"
                            ></TextField>
                        </Grid>
                        <Grid item md ={6} xs ={12}>
                            <TextField 
                            fullWidth
                            label="Email Address"
                            name="email"
                            margin="dense"
                            variant="outlined"
                            ></TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider></Divider>
                <CardActions>
                    <Button color ="primary"
                    variant="contained">
                        Save Details
                    </Button>
                    <Button color ="primary"
                        variant="outlined"
                        component="label">
                        Upload Photo
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(style)(AccountDetails)