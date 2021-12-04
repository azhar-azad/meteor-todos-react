/**
 * A new collection to store our tasks.
 */

import { Mongo } from 'meteor/mongo';

export const TasksCollection = new Mongo.Collection('tasks');