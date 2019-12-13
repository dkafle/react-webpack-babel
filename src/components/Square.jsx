import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounts: 0,
    };
  }

  showMessage() {
    console.log(`You have counted ${this.props.value} button ${this.state.clickCounts} times`)
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          let count = this.state.clickCounts;
          count += 1;
          this.setState({
            clickCounts: count,
          }, this.showMessage)    //Passing showMessage as callback
          //this.showMessage();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
