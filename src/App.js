import './App.css';
import React, { Component } from 'react';
import Timer from './timer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      FullName: "Yassine ghoul",
      Bio: "23 yo",
      imgSrc:"/profile.jpg",
      Profession: "yayaya",
    };
  }
  state = {
    on: false,
  }

  render() {
    let showProfile = () => {
      this.setState({
        on: !this.state.on

      })
    };
    return (
      <div className="App">
        {!this.state.on &&
          <button onClick={showProfile}>Show</button>
        }
        {this.state.on &&
          <button onClick={showProfile}>hide</button>
        }
        {this.state.on && <h2>
          <Timer></Timer>
<div className="cordon">
            <img src={this.state.imgSrc} alt=""/>
          
            Fullname : {this.state.FullName} <br/>
            Profession : {this.state.Bio}<br/>
            Bio : {this.state.Profession}  <br/><br/>
          
            </div>
            </h2>}


      </div>
    );
  }
}

export default App;
