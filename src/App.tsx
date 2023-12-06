import { useState, useEffect } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
    text: string;
    completed: boolean;
}

const initialTodos: Todo[] = JSON.parse(localStorage.getItem("todo")) || []; 

const App = () => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    };
    const toggleTodo = (index: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-4">
            <FormAddTodo addTodo={addTodo} />
            <Todos
            todos={todos}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
            />
        </div>
    );
};

export default App;
