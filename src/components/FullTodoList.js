import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ListFooter from "./ListFooter";

const FullTodoList = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <ListFooter />
  </div>
)

export default FullTodoList