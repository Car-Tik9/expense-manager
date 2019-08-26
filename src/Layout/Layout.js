import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const layout = ( props ) => (
    <div>
        <Header />
            {props.children}
        <Footer />
    </div>
);

export default layout;