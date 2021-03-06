import React, { Component } from 'react';
import './App.css';

import Header from './component/Header'
import Home from './component/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      linkName: "Headers",
      initialName: 'homeName'
    }
  }
  onGreet(age) {
    alert(age);
  }

  changeLinkName(newName) {
    this.setState({
      linkName: newName
    })
  }
  
  handleChange(val) {
    this.setState({
      initialName: val
    })
  }

  render() {
    const user = {
      name: 'Anna',
      hobbies: ['Play', 'Sports', 'Singing']
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>{this.state.initialName}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-10">
            <Header headerName={this.state.linkName} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home 
              name={"Wan"} age={18} user={user} 
              greet={this.onGreet} 
              changeName={this.changeLinkName.bind(this)} 
              homeName={this.state.initialName}
              change={this.handleChange.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
