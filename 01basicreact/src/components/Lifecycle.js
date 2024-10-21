import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Gourav'
      }
      console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
        
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponent');
        return true;
    }
    getSnapshotBeforeUpdate(preProps, preState){
        console.log('LifecycleA getsnaoshotbeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
        
    }
    changeState= ()=>{
        this.setState({
            name:'Gourav'
        })
    }
  render() {
    console.log('LifecycleA render');
    return(<div>
         <div>Lifecycle A </div>
         <button onClick={this.changeState}>Change state</button>
         <LifecycleB />
    </div>
       
        
    ) 
  }
}

export default Lifecycle