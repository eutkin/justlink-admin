import React, {Component} from 'react';
import './App.css';
import RedirectScreen from "./containers/RedirectScreen";

class App extends Component {
  render() {
    return (
        <div className="App">
          <RedirectScreen />
        </div>
    );
  }
}

export default App;
