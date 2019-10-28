import React from 'react'
import { Snackbar } from '@material-ui/core';
import CustomSnackBarWrapper from '../../../components/SnackBar/CustomSnackBarWrapper';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import { closeSnackBar } from '../../../actions/snackBarActions';

class CustomSnackBar extends React.Component {
    render() {
        const { snackOpen } = this.props;
        return (
            <div>
                <Snackbar anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',}}
                    open={snackOpen}
                    autoHideDuration={2000}
                    onClose = {this.handleOnClose}>
                    <CustomSnackBarWrapper></CustomSnackBarWrapper>
                </Snackbar>
            </div>
        );
    }
    handleOnClose = () =>{
        this.props.closeSnackBar();
    }
}

function mapStateToProps(state){
    const  { snackOpen } = state.snackbar;
    return { snackOpen }
}
export default connect(mapStateToProps, { closeSnackBar })(CustomSnackBar)