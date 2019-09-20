import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import InputIcon from '@material-ui/icons/Input'



const styles = theme  => ({
    root: {
        boxShadow: 'none'
      },
      flexGrow: {
        flexGrow: 1
      },
      signOutButton: {
        marginLeft: theme.spacing(1)
      },
      linkText :{
          color:'white',
          textDecoration:'none'
      }
   });
class Topbar extends React.Component{
    render(){
        const { classes,className, onSidebarOpen, ...rest} = this.props;
        return(
            <AppBar {...rest}
            className ={clsx(classes.root,className)}>
                <Toolbar>
                    <RouterLink to="/" className ={classes.linkText}>
                        <Typography gutterBottom = {false} component="h1" variant="h6">
                            Expense Manager
                        </Typography>
                    </RouterLink>
                    <div className ={classes.flexGrow} />
                        <IconButton className ={classes.signOutButton}
                        color="inherit">
                            <InputIcon></InputIcon>
                        </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Topbar)