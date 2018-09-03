import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Clock />
				<Button />
			</div>
		)
	}
}

// function Greet (props) {

// 	return (
// 		<h1> Hello {props.phrase} My name is {props.name} </h1>
// 		)
// }

// function GreetAll () {
// 	return (
// 		<div>
// 			<Greet phrase="World)" name="Kostya"/>
// 			<Greet phrase="Hawaii" name="Leo"/>
// 			<Greet phrase="World)" name="Kostya"/>
// 			<Greet phrase="World)" name="Kostya"/>
// 		</div>
// 	)
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
