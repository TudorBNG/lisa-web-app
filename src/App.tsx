import React from 'react';
import './App.css';
import AppRouter from './components/router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/molecules/navigation-bar/navigation-bar';

function App() {
	return (
		<React.Fragment>
			<div className='App'>
				<AppRouter />
			</div>
		</React.Fragment>
	);
}

export default App;
