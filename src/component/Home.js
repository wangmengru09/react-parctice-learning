import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    }
  }
  older() {
    this.setState({
      age: this.state.age += 1
    })
  }

  handleGreet() {
    this.props.greet(this.state.age);
  }
  
  changeHeaderName() {
    this.props.changeName('name')
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <p>your name is {this.props.name}, your age is {this.state.age}</p>
            <button onClick={this.older.bind(this)} className="btn btn-primary">make me older</button>
            <hr />
            <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
            <hr />
            <button onClick={this.changeHeaderName.bind(this)} className="btn btn-primary">changeName</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
