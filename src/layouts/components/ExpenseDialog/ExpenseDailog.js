import React from 'react'
import { Dialog, DialogTitle, DialogContentText, DialogContent, TextField, RadioGroup, FormControlLabel, Radio, DialogActions, Button, Paper, Chip, Avatar, InputAdornment, Select, Grid, InputLabel, colors } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import FoodIcon from '@material-ui/icons/Fastfood'
import ShoppingIcon from '@material-ui/icons/ShoppingCart'
import TravelIcon from '@material-ui/icons/CardTravel'
import EntertainmentIcon from '@material-ui/icons/Theaters'
import HospitalIcon from '@material-ui/icons/LocalHospital'
import CompareIcon from '@material-ui/icons/CompareArrows'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { saveExpense , closeExpenseDialog } from '../../../actions/expenseActions'

const chips = [
    {
        label: 'Food',
        id:1,
        icon: <FoodIcon />
    },
    {
        label: 'Shopping',
        id:2,
        icon: <ShoppingIcon />
    },
    {
        label: 'Travel',
        id:3,
        icon: <TravelIcon />
    },
    {
        label: 'Entertainment',
        id:4,
        icon: <EntertainmentIcon />
    },
    {
        label: 'Medical',
        id:5,
        icon: <HospitalIcon />
    },
    {
        label: 'Other',
        id:6,
        icon: <EntertainmentIcon />
    },
];

const styles = theme => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
        marginBottom: theme.spacing(1)
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    chip_active: {
        backgroundColor: "#00695C"
    },
    notes: {
        margin: theme.spacing(2)
    }
})
const initialState = {
    isSubmitted: false,
    expense: {
            transactionMode: '1',
            dateOfTransaction: new Date(),
            transactionAmount : '',
            notes: '',
            cdDiv: '1',
            moneySendto: '',
            categoryId: '',
    }
}
class ExpenseDialog extends React.Component {
    state = initialState;
    handleChange = name => event => {
        const { value } = event.target;
        this.setState( previousState => ({
            expense:{
                ...previousState.expense,
                [name]: value
            }
        }))
    }

    handleChipClick = categoryId => event => {
        this.setState( previousState => ({
            expense:{
                ...previousState.expense,
                categoryId
            }
        }))
    }

    handleDateClick = dateOfTransaction  => {
        console.log(dateOfTransaction)
        this.setState( previousState => ({
            expense:{
                ...previousState.expense,
                dateOfTransaction
            }
        }))
    }

    handleSubmit = () => {
        this.setState({isSubmitted:true})
        if( !this.canbeSubmitted()){
            return;
        }
        const { expense } = this.state;
        this.props.saveExpense(expense);
        this.setState(initialState)
    }

    canbeSubmitted(){
        const { expense } = this.state; 
        return (
            expense.transactionAmount !== '' &&
            expense.categoryId !== '' &&
            expense.moneySendto !== '' 
        );
    }

    handleDialogClose = () => {
        this.props.closeExpenseDialog();
    }
    render() {
        const { dialogOpen, dialogClose, classes, ...rest } = this.props;
        return (
            <Dialog onClose={this.handleDialogClose} open={dialogOpen} >
                <DialogTitle>Add an Expense</DialogTitle>
                <DialogContent>
                    <DialogContentText>Choose category and add expense</DialogContentText>
                    <Paper className={classes.paper}>
                        {chips.map(chip => (
                            <Chip icon={chip.icon}
                                label={chip.label}
                                clickable={true}
                                key={chip.id}
                                className={`${classes.chip} ${this.state.expense.categoryId === chip.id  && classes.chip_active}`}
                                color="secondary"
                                onClick={this.handleChipClick(chip.id)}></Chip>
                        ))}
                    </Paper>
                    <InputLabel 
                                error={true}>{this.state.isSubmitted && 
                                 this.state.expense.categoryId ==='' && 'Please select category'}</InputLabel>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} item>
                            <RadioGroup row={true} value = {this.state.expense.cdDiv}
                            onChange={this.handleChange('cdDiv')}>
                                <FormControlLabel value="1"
                                    label="Credit"
                                    labelPlacement="end"
                                    control={<Radio color="primary"></Radio>}>Credit</FormControlLabel>
                                <FormControlLabel value="0"
                                    label="Debit"
                                    labelPlacement="end"
                                    control={<Radio color="primary"></Radio>}>Debit</FormControlLabel>
                            </RadioGroup>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <InputLabel htmlFor="transaction-type">Transaction Type</InputLabel>
                            <Select autoWidth={true} native
                                inputProps={{
                                    name: 'age',
                                    id: 'transaction-type',
                                }} value={this.state.expense.transactionMode}
                                onChange={this.handleChange('transactionMode')}>
                                <option value="1">IMPS</option>
                                <option value="2">NETBANKING</option>
                                <option value="3">UPI</option>
                                <option value="4">NEFT</option>
                                <option value="5">CASH</option>
                                <option value="6">OTHER</option>
                            </Select>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                fullWidth
                                margin="dense"
                                id="amount"
                                label="Amount"
                                variant="outlined"
                                type="number"
                                value={this.state.expense.transactionAmount}
                                error={this.state.isSubmitted && this.state.expense.transactionAmount ===''}
                                helperText= {this.state.isSubmitted && this.state.expense.transactionAmount ===''
                                && "please input expense amount"}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment>
                                            ₹
                                        </InputAdornment>
                                    )
                                }}
                                onChange={this.handleChange('transactionAmount')}
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField fullWidth
                                margin="dense"
                                label="Sent/Received Details"
                                id="send_details"
                                variant="outlined"
                                value={this.state.expense.moneySendto}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment>
                                            <CompareIcon />
                                        </InputAdornment>
                                    )
                                }}
                                error={this.state.isSubmitted && this.state.expense.moneySendto ===''}
                                helperText= { this.state.isSubmitted && this.state.expense.moneySendto ==='' 
                                && 'Please Mention about  sent/received details '} 
                                onChange={this.handleChange('moneySendto')}
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date"
                                    format="MM/dd/yyyy"
                                    label="Date of Expense Done"
                                    value={this.state.expense.dateOfTransaction}
                                    onChange={this.handleDateClick}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField className={classes.notes}
                                value={this.state.expense.notes}
                                label="Notes" onChange={this.handleChange('notes')}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <InputLabel error ={true}> {this.props.expenseError} </InputLabel>
                    <Button color="primary" variant="contained" onClick={this.handleSubmit}>Ok</Button>
                    <Button variant="outlined" onClick={this.handleDialogClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

function mapToState(state){
    const dialogOpen = state.expense.dialogOpen
    return { dialogOpen };
}

export default withStyles(styles)(connect(mapToState,{saveExpense , closeExpenseDialog})(ExpenseDialog))