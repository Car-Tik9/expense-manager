import React from 'react'
import {withStyles} from '@material-ui/styles'
import ExpenseFilterCondtion from './ExpenseFilterCondtion'
import ExpenseGrid from './ExpenseGrid'


const styles = theme =>({
    root:{
        padding:theme.spacing(2)
    }
       
})
class Expenses extends React.Component{
    render(){
        const { classes } = this.props;
        return (
             <div className={classes.root}>
                 <ExpenseFilterCondtion/>
                 <ExpenseGrid/>
             </div>
        );
    }
}

export default withStyles(styles)(Expenses);