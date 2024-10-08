import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }
    increment(){
      //   this.setState(
      //   {
      //     count: this.state.count + 1
      //   },
      //   ()=>{
      //     console.log("callback value",this.state.count)
      //   }
      // ) 
      // Parentheses () are used after the => in arrow functions when we're returning an object to ensure that the curly braces {} are treated as an object literal, not as a function body.
      this.setState(prevState=>({
        count:prevState.count + 1
      }))
      console.log(this.state.count);

        
    }
    incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    }
  render() {
    return (
        <div>
          <div>Count - {this.state.count} </div>
          <button onClick={()=>this.incrementFive()}>Increment</button>
        </div>
      )

    }
}

export default Counter