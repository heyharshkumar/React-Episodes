import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 15,
      count2: 20,
    };
  }
  render() {
    //const {count, count2} = this.state;
    return (
      <div className="card-class">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
        <h1>{this.state.count2}</h1>
        <h1>Name : {this.props.name}</h1>
        <h1>Location : Punjabi</h1>
      </div>
    );
  }
}

export default UserClass;
