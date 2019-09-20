import React from 'react';
import { Route } from 'react-router-dom';

class RouteWithLayout extends React.Component{

    
    render(){
        const { layout:Layout ,component:Component,...rest} = this.props;
        console.log(this.props);
        return(
            <Route {...rest}  render ={ matchProps => (
                <Layout>
                    <Component {...matchProps}/>
                </Layout>
            )}/>
        );
    }
}

export default RouteWithLayout