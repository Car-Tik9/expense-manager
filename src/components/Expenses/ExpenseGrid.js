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
import PerfecrSlider from "react-perfect-scrollbar";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getExpenses } from "../../actions/expenseActions";
import { authentication } from "../../reducers/authenticationReducer";
const styles = theme => ({
  root: {
    marginTop: theme.spacing(1)
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
class ExpenseGrid extends React.Component {
  componentDidMount() {
    this.props.getExpenses();
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
                {expenseData.content
                .slice(expenseData.page * 10,
                  expenseData.page  * 10 + 10).map(expense => (
                  <TableRow hover key={expense.transactionId}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                    <TableCell>{expense.mode}</TableCell>
                    <TableCell>{expense.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            rowsPerPageOptions={[10]}
            count={expenseData.totalElements}
            rowsPerPage={10}
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
    console.log(page);
  };

  handleChangeRowsPerPage = event => {
    const rowsPerPage =  parseInt(event.target.value) || 5;
    console.log(rowsPerPage)
    this.setState({rowsPerPage});
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
