import React from 'react'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import ListFooter from "./ListFooter";

const FullTodoList = () => (
  <div>
    <section className="col-md-6"><AddTodo /></section>
    <VisibleTodoList />
    <ListFooter />
  </div>
)

export default FullTodoList