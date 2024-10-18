import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname: "parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`hello ${this.state.parentname} from ${childName}`)
    }

    render() {
    return (
      <div>
        <ChildrenComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent