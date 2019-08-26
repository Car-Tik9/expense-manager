import React, { Component } from 'react';
import Layout from './Layout/Layout';
import './assets/styles/Common.css';

class App extends Component {

	render() {
		return(
			<div>
				<Layout>
					<div className='dk-container'>
						<h1>Heading</h1>
					</div>
				</Layout>
			</div>
		);
	}

}

export default App;
