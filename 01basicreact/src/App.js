import React, {Component} from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render(){
    return (
      <div>
        {/* <Hello /> */}
        <Greet name='Bruce' heroname="Batman" />
        <Greet name="Clark" heroname="Superman"/>
        <Greet name="Diana" heroname="Wonder womanin
        "/>
        {/* <Welcome /> */}
      </div>
    );
  }
}

export default App;

