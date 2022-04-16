import { Add_Todo, Remove_Todo } from "./action.type";

const TodoReducer = (state, action) =>{
    switch (action.type) {
        case Add_Todo:
            return [...state, action.payload]
        case Remove_Todo:
            return state.filter((todo)=> todo.id !== action.payload)
        default:
            return state
    }
}

export default TodoReducer;
