import React from 'react'
import { Card, CardHeader, Divider, CardContent, Table, TableHead, TableBody, TableCell, IconButton, TableRow } from '@material-ui/core'
import FoodIcon  from '@material-ui/icons/Fastfood'
import PerfecrSlider from 'react-perfect-scrollbar'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { getExpenses } from '../../actions/expenseActions'
const styles = theme =>({
    root:{
        marginTop:theme.spacing(1)
    },
    card:{
        padding: theme.spacing(1)
    },
    content:{
        padding:0
    }
})
class ExpenseGrid extends React.Component{
    componentDidMount(){
        this.props.getExpenses();
    }
    render(){
        const {classes , expenseData} = this.props;
        console.log(this.props)
        return(
            <Card className = {classes.root}>
                <CardHeader className={classes.card} title="Expenses" titleTypographyProps={{ variant:'h6' ,component:'h6' }}>
                </CardHeader>
                <Divider/>
                <CardContent className ={classes.content}>
                    <PerfecrSlider>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableCell>Date</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Mode</TableCell>
                                <TableCell>Remarks</TableCell>
                                <TableCell>Category</TableCell>
                            </TableHead>
                            <TableBody>
                                { expenseData.map( expense => (
                                    <TableRow hover key={expense.transactionId}>
                                        <TableCell>
                                           {expense.dateOfTransaction} 
                                        </TableCell>
                                        <TableCell>
                                           {expense.transactionAmount} 
                                        </TableCell>
                                        <TableCell>
                                           {expense.transactionMode} 
                                        </TableCell>
                                        <TableCell>
                                           {expense.notes} 
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </PerfecrSlider>    
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps(state){
    const {expenses} = state.expense;
    return  { expenseData : expenses}
}
export default withStyles(styles)(connect(mapStateToProps,{getExpenses})(ExpenseGrid))