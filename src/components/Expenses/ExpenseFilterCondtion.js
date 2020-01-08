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
      label: 'FOOD',
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
const filterData = {
  dateOfTransaction: null,
  transactionTypeList: [],
  categoryTypeList: [],
  cdList:[],
  amount:""
}
class ExpenseFilterCondtion extends React.Component {
  
  state = {
    filterData
  };

  handleDateClick = dateOfTransaction => {
    this.setState(previousState => ({
      filterData: {
        ...previousState.filterData,
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
              <Grid item xs={3}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Credit Or Debit</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox  checked ={this.state.filterData.cdList.includes('1')}onChange = {e => this.handleCategoryCheck(e,'1','cdList') }/>}
                          label="Credited"
                        />
                        <FormControlLabel
                          control={<Checkbox checked ={this.state.filterData.cdList.includes('0')} onChange = {e => this.handleCategoryCheck(e,'0','cdList') }/>}
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
                        label="Expense Done Date"
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
                      value = {this.state.filterData.amount}
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
                            control={<Checkbox checked = {this.state.filterData.transactionTypeList.includes(transactionType.value)}onChange = {e => this.handleCategoryCheck(e,transactionType.value,'transactionTypeList') }/>}
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
                            control={<Checkbox checked = {this.state.filterData.categoryTypeList.includes(category.label)}onChange={ e => this.handleCategoryCheck(e,category.label,'categoryTypeList')} value={category.label}/>}
                              ></FormControlLabel>
                          ))
                        }
                      </FormGroup>
              </FormControl>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <Button size="small" onClick = {this.handleClearClick}>Clear</Button>
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
    this.props.filterClick(this.state.filterData);
  };
  handleClearClick = () =>{
    this.setState({filterData:filterData});
    this.props.filterClick(this.state.filterData);
  }
}

function mapStateToProps(state) {
  return state;
}

export default withStyles(styles)(
  connect(mapStateToProps, { filterClick })(ExpenseFilterCondtion)
);
