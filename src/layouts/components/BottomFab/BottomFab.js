import React from 'react'
import { Tooltip, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit'
import { withStyles } from '@material-ui/styles'
import ExpenseDialog from '../ExpenseDialog/ExpenseDailog';
import { connect } from 'react-redux'
import { openExpenseDialog } from '../../../actions/expenseActions'


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
                <Fab color="secondary"  onClick ={this.handleOpenClick}aria-label="edit" className={classes.fab}>
                    <EditIcon /> 
                </Fab>
          </Tooltip>
          <ExpenseDialog></ExpenseDialog>
          </div>
        );
    }
    handleOpenClick = () =>{
        this.props.openExpenseDialog();
    }
    handleCloseDialog = () => {
        this.setState({dialogOpen:false})
    }
}

function mapToState(state) {
    return state;
}
export default withStyles(style)(connect(mapToState,{openExpenseDialog})(BottomFab))
