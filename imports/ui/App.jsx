import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/TasksCollection';
import { Task } from './Task.jsx';
import { TaskForm } from './TaskForm.jsx';

export const App = () => {
  // The useTracker function exported by 
  // react-meteor-data is a React Hook that allows us
  // to have reactivity in our React components. Every
  // time the data changes through reactivity our
  // component will re-render. 
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <TaskForm/>

      <ul>
        { tasks.map(task => <Task key={task._id} task={task}/>) }
      </ul>
    </div>
  );
};
