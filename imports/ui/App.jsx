import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/TasksCollection';
import { Task } from './Task.jsx';
import { TaskForm } from './TaskForm.jsx';

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  });
};

const deleteTask = ({ _id }) => {
  TasksCollection.remove(_id);
}

export const App = () => {
  // The useTracker function exported by 
  // react-meteor-data is a React Hook that allows us
  // to have reactivity in our React components. Every
  // time the data changes through reactivity our
  // component will re-render. 
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>📝️ To Do List</h1>
          </div>
        </div>
      </header>

      <div className="main">
        <TaskForm/>

        <ul className="tasks">
          { tasks.map( task => (
            <Task 
              key={task._id} 
              task={task} 
              onCheckboxClick={toggleChecked}
              onDeleteClick={deleteTask}
            />
          ) ) }
        </ul>
      </div>
    </div>
  );
};
