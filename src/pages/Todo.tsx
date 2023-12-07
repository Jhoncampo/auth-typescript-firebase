import { useState, useEffect } from "react";
import FormAddTodo from "../components/FormAddTodo";
import Todos from "../components/Todos";
import { logout } from "../config/firebase";

export interface Todo {
    text: string;
    completed: boolean;
}
const storedTodos = localStorage.getItem("todo");
const initialTodos: Todo[] = storedTodos ? JSON.parse(storedTodos) : [];

const Todo = () => {
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

    const handleLogOut = async () =>{
        try {
            await logout()
            console.log("logout")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-4">
            <h1>Dashboard (ruta protegida)</h1>
            <FormAddTodo addTodo={addTodo} />
            <Todos
            todos={todos}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
            />
            <button onClick={handleLogOut}>Log out</button>

           
        </div>
    );
};

export default Todo;