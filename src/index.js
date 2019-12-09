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
    <Login />
  </div >;
};

class ShoppingList extends React.Component {
  render() {
    return (<div>
      <Greeter emotion="Love" libraryName="ReactJS" />
      <h1> Shopping List for {this.props.name} </h1>
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
