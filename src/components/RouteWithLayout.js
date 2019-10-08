import React from 'react';
import { Route ,Redirect} from 'react-router-dom';

class RouteWithLayout extends React.Component{

    
    render(){
        const { layout:Layout ,component:Component,...rest} = this.props;
        return(
            <Route {...rest}  render ={ matchProps => (
                localStorage.getItem('user')
                 ? <Layout><Component {...matchProps}/></Layout>
                 : <Redirect to="/signin"></Redirect>
            )}/>
        );
    }
}

export default RouteWithLayout