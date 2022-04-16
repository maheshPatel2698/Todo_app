import React from 'react'
import TodoItem from './TodoItem'
import "../Css/Todos.css"

const Todos = () => {   
    return(
        <div className="todos">
            <TodoItem />
        </div>
    )
}

export default Todos