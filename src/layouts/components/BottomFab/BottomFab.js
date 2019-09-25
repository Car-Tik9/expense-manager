import React from 'react'
import { Tooltip, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import { withStyles } from '@material-ui/styles'
import ExpenseDialog from '../ExpenseDialog/ExpenseDailog';


const style = theme =>({
    fab:{
        position:'absolute',
        bottom:theme.spacing(2),
        right:theme.spacing(2),
      }
})



class BottomFab extends React.Component{
    state ={
        dialogOpen:false
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
            <Tooltip title="Add Expense" placement="left" aria-label="add">
                <Fab color="secondary"  onClick ={()=> this.setState({dialogOpen:true})}aria-label="edit" className={classes.fab}>
                    <EditIcon /> 
                </Fab>
          </Tooltip>
          <ExpenseDialog dialogClose = {this.handleCloseDialog} dialogOpen ={this.state.dialogOpen}></ExpenseDialog>
          </div>
        );
    }
    handleCloseDialog = () => {
        this.setState({dialogOpen:false})
    }
}

export default withStyles(style)(BottomFab)