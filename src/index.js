import React from 'react'
import ReactDOM from 'react-dom'

const Login = () => (<div>
  <p>Login</p>
  <p>Signup</p>
</div>);

const Greeter = (props) => {
  return <div className="firstClass">
    <h1> Hello, I {props.emotion} {props.libraryName} </h1>
    <p>I really really {props.emotion} {props.libraryName}</p>
    <button onClick={props.doSomething}>hello</button>
  </div >;
};

class ShoppingList extends React.Component {
  doSomething(event) {
    console.log('doing something');
  }

  render() {
    let n = this.props.name;
    const lib = 444444;
    return (<div>
      <Greeter libraryName={lib} emotion="Love" doSomething={this.doSomething} />
      <h1> Shopping List for {n} </h1>
      <ul>
        <li > Instagram </li>
        <li> WhatsApp </li>
        <li> Oculus </li>
      </ul>
    </div>);
  }
}

ReactDOM.render(
  <ShoppingList name="Deepak" />,
  document.getElementById('app')
);
