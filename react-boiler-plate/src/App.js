import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor() {
    super();
    this.state = {
      stateProp1: "stateProp1",
      stateProp2: "stateProp2",
      stateProp3: "stateProp3"
    };
  }

  render() {
    return (
      <div className="App">Insert Componenets Here Using JSX</div>
    );
  }
}
export default App;