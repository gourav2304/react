import React from 'react'
//react component with and without using jsx
const Hello = ()=> {
    // return (
    // <div classname= 'dummyClass' >
    //     <h1>Hello Gourav</h1>
    // </div>
    // )

    return React.createElement(
        'div', 
        {id:'hello' , className:'dummyClass'},
        React.createElement('h1',null,'Hello Gourav'))// parameter(type in string live div,span,etc 
        //  , props that is attributes is id,className 
        //    , children)
}

export default Hello