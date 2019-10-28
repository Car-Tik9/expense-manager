import React from 'react'
import { ExpansionPanel, ExpansionPanelSummary, Typography  , TextField, InputAdornment, IconButton ,Grid, ExpansionPanelDetails, Select, InputLabel} from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { withStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/SearchRounded'
import DateFnsUtils from '@date-io/date-fns';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme =>({
    transactionType:{
        marginTop:theme.spacing(2)
    }
})
class ExpenseFilterCondtion extends React.Component{
    render(){
        const { classes } = this.props;
        return (
        <div>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon = {<ExpandMoreIcon/>}>
                    <Typography>Filter to get what you needed</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                        <Grid item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date"
                                        format="MM/dd/yyyy"
                                        label="Date of Expense Done"
                                        onChange={this.handleDateClick}
                                    />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item>
                        <InputLabel className = {classes.transactionType} htmlFor="transaction-type">Transaction Type</InputLabel>
                            <Select autoWidth={true} native
                                inputProps={{
                                    name: 'transactionType',
                                    id: 'transaction-type',
                                }} >
                                <option value="1">IMPS</option>
                                <option value="2">NETBANKING</option>
                                <option value="3">UPI</option>
                                <option value="4">NEFT</option>
                                <option value="5">CASH</option>
                                <option value="6">OTHER</option>
                            </Select>
                        </Grid>
                        <Grid item>
                        <InputLabel className = {classes.transactionType} htmlFor="transaction-type">Category</InputLabel>
                            <Select autoWidth={true} native
                                inputProps={{
                                    name: 'categoryType',
                                    id: 'category-type',
                                }} >
                                <option value="1">FOOD</option>
                                <option value="2">SHOPPING</option>
                                <option value="3">TRAVEL</option>
                                <option value="4">ENTERTAINMENT</option>
                                <option value="5">MEDICAL</option>
                                <option value="6">OTHER</option>
                            </Select>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>    
            </ExpansionPanel>    
        </div>
        );
    }
}


export default withStyles(styles)(ExpenseFilterCondtion)