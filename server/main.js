import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../imports/db/TasksCollection';
import '../imports/api/tasksMethods'; // registering the methods
import '../imports/api/tasksPublications'; // registering the publications

const SEED_USERNAME = 'meteor';
const SEED_PASSWORD = 'meteor';

const insertTask = (taskText, user) => {
  TasksCollection.insert({ 
    text: taskText,
    userId: user._id,
    createdAt: new Date()
  })
};

const user = Accounts.findUserByUsername(SEED_USERNAME);

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD
    });
  }

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(taskText => insertTask(taskText, user));
  }
});
