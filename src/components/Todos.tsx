import {Todo} from "../App"
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[];
    toggleTodo: (index: number) => void;
    handleDelete: (index: number) => void;

}

const Todos = ({todos, toggleTodo, handleDelete}: Props) => {
    return <div className="mt-3 list-group">
        {
            todos.map((todo, index) => (
                <TodoItem
                key={index}
                todo={todo}
                index={index}
                toggleTodo={toggleTodo}
                handleDelete={handleDelete}
                />
            ))
        }
    </div>;
};

export default Todos;
