import React , { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state ={
            template:"Welcome visitor"
        }
        
    }
    changeMessage(){
        this.setState({
            template: 'Thank you for subscribing'
        })
    }
    

    render() {
      return(
            <div>
                <h1>
            {this.state.template}
            </h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message