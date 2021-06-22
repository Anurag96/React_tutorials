import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import React,{useState} from 'react'
import {AddTodo} from "./MyComponents/AddTodo"

function App() {

  const onDelete = (todo)=>{
    console.log('You have reached onDelete function',todo)
 
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
 
  const addTodo = (title,desc)=>{
    console.log('I\'m adding this todo',title,desc)
    let sno = todos[todos.length-1].sno+1
            const myTodo = {
                sno   : sno,
                title : title,
                desc  : desc
            }
            setTodos([...todos,myTodo])
            console.log(myTodo)
  }

  const [todos,setTodos] = useState([
    {sno:1,title:"go to the market",desc:"You need to go to market for shopping"},
    {sno:2,title:"go to the mall",desc:"You need to go to mall for window shopping"},
    {sno:3,title:"go to the restaurant",desc:"You need to go to restaurant for eating"}
  ]);

  return (
    <div>
    <Header title="Todos-List" searchBar={true}/>
    <AddTodo addTodo={addTodo}></AddTodo>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </div>
   );
}

export default App;
