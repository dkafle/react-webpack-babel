import React from 'react'
import ReactDOM from 'react-dom'

// Function Components
/*
function Welcome(props) {
	return <h1>You are welcome, {props.name}</h1>;
}
const Welcome = (props) => {
	const userName = props.name;
	return(<>
		<h1>You are welcome, {userName}</h1>
		<p>hello this is my p gat</p>
	</>);
};
*/

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

// Class Component
class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      isClicked: false,
      hasMounted: false
		};
  }

  componentDidMount() {
    this.setState({hasMounted: true});
  }

  componentWillUnmount() {
    console.log('im getting unloaded');
  }

  showConsole() {
    console.log(this.state);
    // call all your methds from here
  }

	updateCount() {
		const newState = {
			isClicked: true,
		}
    this.setState(newState, this.showConsole);
    // this.setState(newState);
    // console.log(this.state);
	}

	render() {
		const userName = this.props.name;
    return (<div>
      <h1 onClick={() => this.updateCount()}>
        Welcome, {userName}</h1>
      <ActionLink>Hello</ActionLink>
    </div>);
	}
}

ReactDOM.render(
  <Welcome name="Rajiv" />,
  document.getElementById('app')
);
