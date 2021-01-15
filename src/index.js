import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from '../src/components/planilla/Test'


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: ´+
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
ReactDOM.render(
    <div className="App">
       <Test />
    </div>
,
  document.getElementById('root')
);


