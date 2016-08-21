import React from 'react'
import ReactDOM from 'react-dom'

require('../../css/style.css')

class App extends React.Component {
	render() {
		return (
			<div id='app'>
				Hello, World!
			</div>
		)
	}
}

function render() {
	ReactDOM.render(<App />, document.getElementById('root'));
}

module.exports = render;
