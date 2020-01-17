import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

const HobbyInput = (props) => (
  <input type="text" name="hobby" value={props.hobby} onChange={props.change} onKeyPress={props.onEnterPressed} />
)

//Function component
//Dont maintain state
const ListItems = (props) => (
  <ul>
    {props.hobbies.map(h => <li>{h}</li>)}
  </ul>
);

//Class Component
//Stateful Component
class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: '',
      hobbies: ['hike', 'bike', 'music']
    }
  }

  handleInput(evt) {
    const ENTER_KEY = 13;
    let newState = Object.assign({}, this.state);   // newState = {...this.state};
    const currentKey = evt.target.value;
    newState.hobby = evt.target.value;
    this.setState(newState);
  }

  addHobby(evt) {
    const hasHobby = this.state.hobby.length > 0;
    const typeEnterKey = evt.key === 'Enter';
    if( !typeEnterKey || !hasHobby) {
      return;
    }
    const newState = Object.assign({}, this.state);
    newState.hobbies.push(this.state.hobby);
    newState.hobby = '';
    this.setState(newState);
  }

  render() {
    let personAge = this.props.age;
    personAge = 25;
    return (
      <Fragment>
        <h1>Hello {this.props.personName}</h1>
        <p>This is hello paragraph</p>
        <p>Ramesh is {personAge} years old</p>
        <HobbyInput
          hobby={this.state.hobby}
          change={(evt) => this.handleInput(evt)}
          onEnterPressed={this.addHobby.bind(this)}
        />
        <h3>There are {this.state.hobbies.length}</h3>
        <ListItems hobbies={this.state.hobbies} />
      </Fragment>
    );
  }
}

ReactDOM.render(
  <Greet personName={'Ramesh'} age={55} />,
  document.getElementById('app')
);
