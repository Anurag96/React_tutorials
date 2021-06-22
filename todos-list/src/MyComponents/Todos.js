import React from 'react'
import {Todoitems} from './Todoitems'
 
const Todos = (props) => {

    let footerStyle={
        minHeight:"40vh",
        margin: "10px auto",
    }
    return (
        <div className="container" style={footerStyle}>
            <h3 className="my-3">Todo Lists</h3>
            {
                props.todos.length===0?"No todos to display":
            props.todos.map((todo)=>{
                return (<><hr/><Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/></>)
            }
            )
         }
        </div>
    )
}

export default Todos