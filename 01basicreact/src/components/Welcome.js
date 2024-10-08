import React , { Component } from 'react'
// method 1
// class Welcome extends Component {
//     render() {
//         return (<h1>
//             Welcome {this.props.name}a.k.a {this.props.heroname}
//              </h1>)
//     }
// }

// method -2
class Welcome extends Component {
    render() {
        const {name,heroName} = this.props
        return (<h1>
            Welcome {name} a.k.a {heroName}
             </h1>)
    }
}

export default Welcome