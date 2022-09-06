import React,{Component} from "react";
import './index.css'

export default class Item extends Component {

  state = {mouse:false}   // 标识鼠标移入移出

  
  //鼠标移入、移出的回调
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})   
    }
  }
  //勾选、取消勾选的  某一个todo 的回调！
  handleCheck = (id)=>{
    return (event)=>{
      console.log(id,event.target.checked);
      this.props.updateTodo(id,event.target.checked)
      
    }
  }
  //删除一个todo 的回调函数
  handleDelete = (id) =>{
   
      return ()=>{
        this.props.deleteTodo(id)

      } 
      //console.log(id)
    

   
  }
  

  render(){
    const {id,name,done} = this.props
    
    return(
      
        <li style={{backgroundColor:this.state.mouse?'#ddd':"white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
          <label>
            
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />   {/* defaultChaecked,默认是否勾选，且可以更改*/}
            <span>{name}</span>
          </label>
          <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>删除</button>
        </li>
      
    )
  }
}