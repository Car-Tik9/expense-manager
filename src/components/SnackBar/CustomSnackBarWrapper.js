import React from 'react'
import { SnackbarContent } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};


const style = theme =>({
    success: {
        backgroundColor: green[600],
      },
      error: {
        backgroundColor: theme.palette.error.dark,
      },
      info: {
        backgroundColor: theme.palette.primary.main,
      },
      warning: {
        backgroundColor: amber[700],
      },
      icon: {
        fontSize: 20,
      },
      iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
      },
      message: {
        display: 'flex',
        alignItems: 'center',
      },
})

class CustomSnackBarWrapper extends React.Component{

    render(){
        console.log(this.props);
        const { classes , className , message , onClose , variant , ...other} = this.props;
        console.log(className)
        const Icon = variantIcon[variant]
        return(
           <SnackbarContent 
           className = {clsx(classes[variant] , className)}
               message = {
                   <span id="expense-snackbar" className={classes.message}>
                        <Icon className={clsx(classes.icon,classes.iconVariant)}/>
                        {message}
                   </span>
               }>
           </SnackbarContent>
        );
    }
}

function mapStateToProps(state){
  const  { variant, message } = state.snackbar;
  return { variant , message }
}

export default withStyles(style)(connect(mapStateToProps,{})(CustomSnackBarWrapper))