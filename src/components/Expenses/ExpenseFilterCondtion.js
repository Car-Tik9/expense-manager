import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  ExpansionPanelDetails,
  Select,
  InputLabel,
  ExpansionPanelActions,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  Switch
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/SearchRounded";
import DateFnsUtils from "@date-io/date-fns";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { filterClick } from "../../actions/expenseActions";

const styles = theme => ({
  transactionType: {
    marginTop: theme.spacing(2)
  }
});

const transactionDataList = [{key : 0 , value : 'IMPS'}, {key : 1, value: 'NETBANKING'} , 
{key :2 , value :'UPI'} , {key :3 , value :'NEFT'} , {key:4, value:'CASH'}, {key :5 , value:'OTHER'}]

const categoryList = [
  {
      label: 'Food',
      id:1
  },
  {
      label: 'Shopping',
      id:2
  },
  {
      label: 'Travel',
      id:3
  },
  {
      label: 'Entertainment',
      id:4
  },
  {
      label: 'Medical',
      id:5
  },
  {
      label: 'Other',
      id:6
  },
];
class ExpenseFilterCondtion extends React.Component {
  state = {
    filterData: {
      dateOfTransaction: null,
      transactionTypeList: [],
      categoryTypeList: [],
      cdList:[],
      amount:""
    }
  };

  handleDateClick = dateOfTransaction => {
    this.setState(previousState => ({
      filterData: {
        ...previousState.filerData,
        dateOfTransaction
      }
    }));
  };

  handleAmountClick = event => {
    const { value } =  event.target;
    this.setState ( previousState => ({
      filterData : {
         ...previousState.filterData,
         amount : value
      }
    }))
  }

  handleCategoryCheck = (event,value, listType) => {
    if(event.target.checked){
      this.setState ( previousState => ({
        filterData:{
           ...previousState.filterData,
           [listType]: [...previousState.filterData[listType] , value]
        }
      }))
    }else{
      this.setState ( previousState => ({
        filterData:{
           ...previousState.filterData,
           [listType]: previousState.filterData[listType].filter( val => val !== value)
        }
      }))
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Filter to get what you needed</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Credit Or Debit</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox  onChange = {e => this.handleCategoryCheck(e,'CREDITED','cdList') }/>}
                          label="Credited"
                        />
                        <FormControlLabel
                          control={<Checkbox onChange = {e => this.handleCategoryCheck(e,'DEBITED','cdList') }/>}
                          label="Debited"
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date"
                        format="MM/dd/yyyy"
                        label="Date of Expense Done"
                        value={this.state.filterData.dateOfTransaction}
                        onChange={this.handleDateClick}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      margin="dense"
                      id="amount"
                      label="Amount"
                      variant="outlined"
                      type="number"
                      InputProps={{
                        startAdornment: <InputAdornment>₹</InputAdornment>
                      }}
                      onChange = {this.handleAmountClick}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="lengend"> TransactionType </FormLabel>
                  <FormGroup >
                        {
                          transactionDataList.map(transactionType => (
                            <FormControlLabel
                            label= {transactionType.value}
                            control={<Checkbox onChange = {e => this.handleCategoryCheck(e,transactionType.value,'transactionTypeList') }/>}
                              ></FormControlLabel>
                          ))
                        }
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item>
              <FormControl component="fieldset">
                      <FormLabel component="legend">CategoryType</FormLabel>
                      <FormGroup>
                        {
                          categoryList.map(category => (
                            <FormControlLabel
                            label= {category.label}
                            control={<Checkbox onChange={ e => this.handleCategoryCheck(e,category.label,'categoryTypeList')} value={category.label}/>}
                              ></FormControlLabel>
                          ))
                        }
                      </FormGroup>
              </FormControl>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button size="small">Clear</Button>
            <Button
              size="small"
              color="primary"
              onClick={this.handleFilterClick}
            >
              Filter
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }

  handleFilterClick = event => {
    console.log(this.state.filterData)
    if(this.state.filterClick.dateOfTransaction){
      
    }
    this.props.filterClick(this.state.filterData);
  };
}

function mapStateToProps(state) {
  return state;
}

export default withStyles(styles)(
  connect(mapStateToProps, { filterClick })(ExpenseFilterCondtion)
);
