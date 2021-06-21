import React from 'react'
import {Todoitems} from './Todoitems'
 
const Todos = (props) => {
    return (
        <div className="container">
            <h3 class="text-center my-3">Todo Lists</h3>
            {props.todos.length?"No todos to display":
            props.todos.map((todo)=>{
                return <Todoitems 
                todo={todo}
                key={todo.sno} 
                onDelete={props.onDelete}/>
            })
         }
        </div>
    )
}

export default Todos