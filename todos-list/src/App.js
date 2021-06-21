import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import React,{useState} from 'react'

function App() {

  const onDelete = (todo)=>{
    console.log('You have reached onDelete function',todo)
    // let index=todos.indexOf(todo);
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos,setTodos]=useState([
    {sno:1,title:"go to the market",desc:"You need to go to market for shopping"},
    {sno:2,title:"go to the mall",desc:"You need to go to mall for window shopping"},
    {sno:3,title:"go to the restaurant",desc:"You need to go to restaurant for eating"}
  ])

  return (
    <div>
    <Header title="Todos-List" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </div>
   );
}

export default App;
