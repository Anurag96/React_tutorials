import React,{useState} from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or description is not defined')
            
        }
        addTodo(title,desc)
    }
    return (
        <div className="container my-3">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
             </div>
                <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button className="btn btn-sm btn-success"  type="submit">Add Todo</button>
      </form>
        </div>
    )
}
