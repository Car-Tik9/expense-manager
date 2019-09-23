import React from 'react'
import { Dialog, DialogTitle, DialogContentText, DialogContent, TextField, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

class ExpenseDialog extends React.Component{
    render(){
        const {dialogOpen ,dialogClose,...rest} = this.props;
        return(
            <Dialog onClose ={dialogClose} open ={dialogOpen} >
                <DialogTitle>Add an Expense</DialogTitle>
                <DialogContent>
                    <DialogContentText>Choose category and add expense</DialogContentText>
                        <RadioGroup row ={true}>
                            <FormControlLabel value="credit"
                            label="Credit"
                            labelPlacement="end" 
                            control = {<Radio></Radio>}>Credit</FormControlLabel>
                            <FormControlLabel value="debit"
                            label="Debit"
                            labelPlacement="end" 
                            control = {<Radio></Radio>}>Debit</FormControlLabel>
                        </RadioGroup>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="amount"
                            label="Amount"
                            type="email"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="date"
                            label="Date of Expense Done"
                            fullWidth
                            variant="outlined"
                        />
                </DialogContent>
            </Dialog>
        );
    }
}

export default ExpenseDialog