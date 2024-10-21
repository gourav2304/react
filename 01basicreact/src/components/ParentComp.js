import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import Reactmemo from './Reactmemo';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Gourav'
      }
    }
    componentDidMount() {
    setInterval(()=>{
        this.setState({
            name:'Gourav'
        })
    }, 2000);
        
    }
  render() {
    console.log('***************parent comp********************')
    return (
      <div>
        ParentComp
        <Reactmemo name={this.state.name}/>
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
    </div>
    )
  }
}

export default ParentComp