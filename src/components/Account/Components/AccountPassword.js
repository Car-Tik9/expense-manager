import React from 'react'
import { Card, CardContent, Typography, Avatar, Divider, CardActions, Button, CardHeader, TextField, Grid } from '@material-ui/core'

class AccountPassword extends React.Component{
    render(){
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

export default AccountPassword