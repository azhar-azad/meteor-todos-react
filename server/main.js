import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/api/TasksCollection';

const SEED_USERNAME = 'meteor';
const SEED_PASSWORD = 'meteor';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
    ].forEach(insertTask);
  }
});
