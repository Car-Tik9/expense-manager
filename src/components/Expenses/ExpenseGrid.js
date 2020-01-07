import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableCell,
  IconButton,
  TableRow,
  TablePagination
} from "@material-ui/core";
import FoodIcon from "@material-ui/icons/Fastfood";
import ShoppingIcon from '@material-ui/icons/ShoppingCart'
import TravelIcon from '@material-ui/icons/CardTravel'
import EntertainmentIcon from '@material-ui/icons/Theaters'
import HospitalIcon from '@material-ui/icons/LocalHospital'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getExpenses } from "../../actions/expenseActions";
import { authentication } from "../../reducers/authenticationReducer";
const styles = theme => ({
  root: {
    marginTop: theme.spacing(1),
    width:"800px"
  },
  card: {
    padding: theme.spacing(1)
  },
  content: {
    padding: 0
  },
  tableContainer: {
    maxHeight: "400px",
    overflow: "auto"
  }
});

const categoryIcon = {
  FOOD:<FoodIcon></FoodIcon>,
  SHOPPING :<ShoppingIcon></ShoppingIcon>,
  TRAVEL : <TravelIcon></TravelIcon>,
  ENTERTAINMENT : <EntertainmentIcon></EntertainmentIcon>,
  MEDICAL : <HospitalIcon></HospitalIcon>,
  OTHER : <AddCircleIcon></AddCircleIcon>
};
class ExpenseGrid extends React.Component {
  state = { page:0,rowsPerPage : 10}
  componentDidMount() {
    this.props.getExpenses(0,this.state.rowsPerPage,{});
  }
  render() {
    const { classes, expenseData } = this.props;
    console.log(this.props);
    return (
      <Card className={classes.root}>
        <CardHeader
          className={classes.card}
          title="Expenses"
          titleTypographyProps={{ variant: "h6", component: "h6" }}
        ></CardHeader>
        <Divider />
        <CardContent className={classes.content}>
          <div className={classes.tableContainer}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Mode</TableCell>
                  <TableCell>Remarks</TableCell>
                  <TableCell>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenseData.content.map(expense => (
                  <TableRow hover key={expense.transactionId}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                    <TableCell>{expense.mode}</TableCell>
                    <TableCell>{expense.notes}</TableCell>
                    <TableCell>{categoryIcon[expense.category]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 25,50,100]}
            count={expenseData.totalElements}
            rowsPerPage={this.state.rowsPerPage}
            page={expenseData.page}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
    );
  }

  handleChangePage = (event,page) => {
    this.props.getExpenses(page,this.state.rowsPerPage,{});
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    const rowsPerPage =  parseInt(event.target.value) || 10;
    this.setState({rowsPerPage});
    this.props.getExpenses(0,rowsPerPage,{});
  };
}

function mapStateToProps(state) {
  const { expenses } = state.expense;
  return { expenseData: expenses };
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getExpenses }
  )(ExpenseGrid)
);
