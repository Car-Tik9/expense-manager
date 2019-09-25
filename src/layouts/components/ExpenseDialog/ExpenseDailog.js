import React from 'react'
import { Dialog, DialogTitle, DialogContentText, DialogContent, TextField, RadioGroup, FormControlLabel, Radio, DialogActions, Button, Paper, Chip, Avatar, InputAdornment, Select, Grid, InputLabel } from '@material-ui/core';
import { KeyboardDatePicker ,MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import FoodIcon from '@material-ui/icons/Fastfood'
import ShoppingIcon from '@material-ui/icons/ShoppingCart'
import TravelIcon from '@material-ui/icons/CardTravel'
import EntertainmentIcon from '@material-ui/icons/Theaters'
import HospitalIcon from '@material-ui/icons/LocalHospital'
import CompareIcon from '@material-ui/icons/CompareArrows'
import { withStyles } from '@material-ui/styles'

const chips = [
    {
        label:'Food',
        icon: <FoodIcon/>
    },
    {
        label:'Shopping',
        icon: <ShoppingIcon/>
    },
    {
        label:'Travel',
        icon: <TravelIcon/>
    },
    {
        label:'Entertainment',
        icon: <EntertainmentIcon/>
    },
    {
        label:'Medical',
        icon: <HospitalIcon/>
    },
    {
        label:'Other',
        icon: <EntertainmentIcon/>
    },
];

const styles = theme =>({
    paper:{
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap',
        padding: theme.spacing(0.5),
        marginBottom:theme.spacing(1)
    },
    chip:{
        margin:theme.spacing(0.5)
    },
    notes:{
        margin:theme.spacing(2)
    }
})
class ExpenseDialog extends React.Component{
    state ={
        transactionType :'',
        date: new Date(),
        amount:'',
        notes:'',
        cdDiv:'',
        isSubmitted:false
    }
    handleChange = name => event =>{
        this.setState({name:event.target.value})

    }
    render(){
        const {dialogOpen ,dialogClose,classes,...rest} = this.props;
        return(
            <Dialog onClose ={dialogClose} open ={dialogOpen || this.state.dialogOpen} >
                <DialogTitle>Add an Expense</DialogTitle>
                <DialogContent>
                    <DialogContentText>Choose category and add expense</DialogContentText>
                        <Paper className ={classes.paper}>
                           {chips.map(chip =>(
                                <Chip avatar ={<Avatar>{chip.icon}</Avatar>}
                                label = {chip.label} 
                                clickable ={true}
                                variant='outlined' className={classes.chip}
                                color="secondary" ></Chip>
                           ))}
                        </Paper>
                        <Grid container spacing={2}>
                            <Grid xs ={12} sm={6} item>
                                <RadioGroup row ={true}>
                                    <FormControlLabel value="credit"
                                    label="Credit"
                                    labelPlacement="end" 
                                    control = {<Radio color="primary"></Radio>}>Credit</FormControlLabel>
                                    <FormControlLabel value="debit"
                                    label="Debit"
                                    labelPlacement="end" 
                                    control = {<Radio color="primary"></Radio>}>Debit</FormControlLabel>
                                </RadioGroup>
                            </Grid>
                            <Grid xs ={12} sm={6}item>
                                <InputLabel htmlFor="transaction-type">Transaction Type</InputLabel>
                                <Select autoWidth={true} native
                                    inputProps={{
                                        name: 'age',
                                        id: 'transaction-type',
                                    }} value={this.state.transactionType}
                                    onChange = {this.handleChange('transactionType')}>
                                        <option value="imps">IMPS</option>
                                        <option value="netbanking">NETBANKING</option>
                                        <option value="up">UPI</option>
                                        <option value="other">OTHER</option>
                                </Select>
                            </Grid>
                            <Grid xs ={12} sm={6} item>
                                    <TextField
                                    fullWidth
                                    margin="dense"
                                    id="amount"
                                    label="Amount"
                                    variant="outlined"
                                    InputProps ={{
                                        startAdornment:(
                                            <InputAdornment>
                                                    ₹
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid xs ={12} sm={6} item>
                                <TextField fullWidth
                                margin="dense"
                                label="Sent/Received Details"
                                id="narration_details"
                                variant="outlined"
                                InputProps ={{
                                    startAdornment:(
                                        <InputAdornment>
                                               <CompareIcon/> 
                                        </InputAdornment>
                                    )
                                }}
                                />
                            </Grid>
                            <Grid xs ={12} sm={6} item>
                                    <MuiPickersUtilsProvider utils ={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date"
                                            label="Date of Expense Done"
                                            value={this.state.date}
                                            onChange={ date => this.setState({date})}
                                        />
                                    </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid xs ={12} sm={6} item>
                                <TextField className={classes.notes}
                                    label="Notes"
                                />
                            </Grid>
                        </Grid>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained">Ok</Button>
                    <Button variant="outlined" onClick={dialogClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ExpenseDialog)