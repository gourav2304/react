import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const reactElement = React.createElement(
  'a',
  {herf: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
 
    <App />
  
);


