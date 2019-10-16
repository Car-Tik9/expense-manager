import React from 'react'
import { Snackbar } from '@material-ui/core';
import CustomSnackBarWrapper from '../../../components/SnackBar/CustomSnackBarWrapper';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import { displaySnackBar } from '../../../actions/snackBarActions';

class CustomSnackBar extends React.Component {
    render() {
        const { snackOpen } = this.props;
        return (
            <div>
                <Snackbar anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',}}
                    open={snackOpen}
                    autoHideDuration={10}>
                    <CustomSnackBarWrapper></CustomSnackBarWrapper>
                </Snackbar>
            </div>
        );
    }
}

function mapStateToProps(state){
    const  { snackOpen } = state.snackbar;
    return { snackOpen }
}
export default connect(mapStateToProps, displaySnackBar )(CustomSnackBar)