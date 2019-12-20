import React from 'react';
import logo from './logo.svg';
import './App.css';
import configs from './configs/index';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					URL API: <a href="https://github.com/buithienai" className="App-link" target="_blank" rel="noopener noreferrer">{configs.urlApi}</a>
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
