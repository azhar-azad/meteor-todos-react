/**
 * A publication to our server should publish all the tasks
 * from the authenticated user.
 * We can use this.userId in publication functions to get 
 * the authenticated userId. 
 */

import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../db/TasksCollection';

Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId });
});