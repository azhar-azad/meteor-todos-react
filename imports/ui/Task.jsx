/**
 * This file will export a React component called Task
 * that will represent one task in our To-Do list. 
 */

import React from "react";

export const Task = ({ task }) => {
  // As this component will be inside a list
  // we are returning a li element. 
  return <li>{task.text}</li>
};