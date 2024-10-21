import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Gourav'
      }
      console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponent');
        return true
    }
    getSnapshotBeforeUpdate(preProps, preState){
        console.log('LifecycleB getsnaoshotbeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
        
    }

  render() {
    console.log('LifecycleB render');
    return <div>Lifecycle A </div>
  }
}

export default LifecycleB