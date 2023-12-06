import { Todo } from "../App";

interface Props {
    todo: Todo;
    index: number;
    toggleTodo: (index: number) => void;
    handleDelete: (index: number) => void;
}

const TodoItem = ({todo, index, toggleTodo, handleDelete}:Props) => {
    return (
        <article
            className="d-flex justify-content-between list-group-item "
        >
            <fieldset>
                <label
                    htmlFor={`todo-${index}`}
                    className={`${todo.completed && "text-success"} mx-2`}
                >
                    {todo.text}
                </label>
                <input
                    type="checkbox"
                    id={`todo-${index}`}
                    checked={todo.completed}
                    onChange={() => toggleTodo(index)}
                />
            </fieldset>
            <button
                onClick={() => handleDelete(index)}
                className="btn btn-danger"
            >
                Delete
            </button>
        </article>
    );
};

export default TodoItem;
