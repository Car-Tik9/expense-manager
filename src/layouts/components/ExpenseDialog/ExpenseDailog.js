import React from 'react'
import { Dialog, DialogTitle, DialogContentText, DialogContent, TextField, RadioGroup, FormControlLabel, Radio, DialogActions, Button, Paper, Chip, Avatar, InputAdornment, Select, Grid, InputLabel } from '@material-ui/core';
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
import { saveExpense } from '../../../actions/expenseActions'

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
        margin: theme.spacing(0.5)
    },
    notes: {
        margin: theme.spacing(2)
    }
})
class ExpenseDialog extends React.Component {
    state = {
        expense: {
            transactionMode: '',
            dateOfTransaction: new Date(),
            transactionAmount : '',
            notes: '',
            cdDiv: '',
            moneySendto: '',
            categoryId: '',
        },
        isSubmitted: false
    }
    handleChange = name => event => {
        const { value } = event.target;
        this.setState( previousState => ({
            expense:{
                ...previousState.expense,
                [name]: value
            }
        }))
    }

    handleChipClick = label => event => {
        this.setState( previousState => ({
            expense:{
                ...previousState.expense,
                categoryId: label
            }
        }))
    }

    handleDateClick = dateOfTransaction  => {
        console.log(typeof(dateOfTransaction))
        this.setState( previousState => ({
            expense:{
                ...previousState.expense,
                dateOfTransaction
            }
        }))
    }

    handleSubmit = () => {
        const { expense } = this.state;
        expense.dateOfTransaction = expense.dateOfTransaction.toLocaleDateString();
        this.props.saveExpense(expense);
    }
    render() {
        const { dialogOpen, dialogClose, classes, ...rest } = this.props;
        return (
            <Dialog onClose={dialogClose} open={dialogOpen || this.state.dialogOpen} >
                <DialogTitle>Add an Expense</DialogTitle>
                <DialogContent>
                    <DialogContentText>Choose category and add expense</DialogContentText>
                    <Paper className={classes.paper}>
                        {chips.map(chip => (
                            <Chip icon={chip.icon}
                                label={chip.label}
                                clickable={true}
                                key={chip.id}
                                className={classes.chip}
                                color="secondary"
                                onClick={this.handleChipClick(chip.id)}></Chip>
                        ))}
                    </Paper>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} item>
                            <RadioGroup row={true} value = {this.state.expense.cdDiv}
                            onClick={this.handleChange('cdDiv')}>
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
                                <option value="0">IMPS</option>
                                <option value="1">NETBANKING</option>
                                <option value="2">UPI</option>
                                <option value="3">CASH</option>
                                <option value="4">OTHER</option>
                            </Select>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                fullWidth
                                margin="dense"
                                id="amount"
                                label="Amount"
                                variant="outlined"
                                value={this.state.expense.amount}
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
                                onChange={this.handleChange('moneySendto')}
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date"
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
                    <Button color="primary" variant="contained" onClick={this.handleSubmit}>Ok</Button>
                    <Button variant="outlined" onClick={dialogClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

function mapToState(state){
    return state;
}

export default withStyles(styles)(connect(mapToState,{saveExpense})(ExpenseDialog))