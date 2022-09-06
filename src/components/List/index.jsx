import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <ul className="todo-main">
        
        {
          todos.map((todo) => {               //遍历数组
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>   //{...todo}批量传递对象
          })
        }
    
      </ul>
    )
  }
}
