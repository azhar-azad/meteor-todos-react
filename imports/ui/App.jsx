import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

// As we are not connecting to our server and our
// database yet let's define some sample data which will
// be used to render a list of tasks. 
const task = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'}
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
