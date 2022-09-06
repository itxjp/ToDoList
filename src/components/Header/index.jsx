import React,{Component} from "react";

import { nanoid } from "nanoid";
import './index.css'
export default class Header extends Component {
  //要给input 绑定键盘事件，事件源也是 input  绑定的和操作的是同一个元素。
  //键盘时间回调
    handleKeyUp = (event)=>{
    //解构
    const {keyCode,target} = event
    //console.log(event.keyCode);
    //判断是否是回车按键
    if(keyCode !==13) return
    //添加的todo名字不能为空
    if(target.value.trim()===''){
      alert('输入不能为空！')
      return
    }
    //准备好一个todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    //把todoObj传递给App
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }
  render(){
    return(
    
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
     
    )
  }
}