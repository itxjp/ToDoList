import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './App.css'

export default class App extends Component {

  //对传递的props标签属性进行限制
  
  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'打游戏',done:true}
  ]}

  //addTodo 用于添加一个todo ,接受的参数是todo对象
  addTodo = (todoObj)=>{
    // 获取原todos
    const {todos}=this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
    
  }
  //updateTodo 用于更新一个todo对象
  updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id){
        return {...todoObj,done:done}}
        else{return todoObj}
      })
    //更新状态
    this.setState({todos:newTodos})

  }

  //deleteTodo 用于删除一个todo对象
  deleteTodo = (id) => {
    //获取元来todos
    const {todos} = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=>{           //filter返回的是符合条件的元素组成的新数组
      return todoObj.id !== id
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //checkAllTodo 用于全选
  checkAllTodo = (done)=> {
    //获取原来的todos
    const {todos} = this.state
    //加工数据
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:done}
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //clearAllDone 用于清楚所有已完成
  clearAllDone = ()=>{
    //获取原来的todos
    const{todos} = this.state
    //过滤数据
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    //更新状态
    this.setState({todos:newTodos})
  }
 
   
  
  render() {
    const{todos} = this.state    //结构一下
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>      
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

