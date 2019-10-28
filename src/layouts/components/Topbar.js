import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton , Hidden} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import InputIcon from '@material-ui/icons/Input'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'
import { logout } from './../../actions'



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
                        <Hidden mdDown>
                            <IconButton className ={classes.signOutButton}
                            color="inherit" onClick ={this.handleSignout}>
                                <InputIcon></InputIcon>
                            </IconButton>
                        </Hidden>
                        <Hidden lgUp>
                            <IconButton className ={classes.signOutButton}
                                color="inherit"
                                onClick = {onSidebarOpen}>
                                    <MenuIcon></MenuIcon>
                            </IconButton>
                        </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
    handleSignout = () => {
        this.props.logout();
    }
}
function mapToState(state){
    return state;
}

export default withStyles(styles)(Topbar)
// export default withStyles(styles)(connect(mapToState,{logout})(Topbar))