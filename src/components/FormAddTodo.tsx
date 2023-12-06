import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    addTodo: (text: string) => void;
}

const FormAddTodo = ({ addTodo }: Props) => {
    const [todo, setTodo] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedTodo = todo.trim()
        if(!trimmedTodo) return
        addTodo(trimmedTodo)
        setTodo("")
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="todo">Todo</label>
                <input
                    className="form-control"
                    type="text"
                    id="todo"
                    value={todo}
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-primary mt-3" type="submit"> Add Todo</button>
        </form>
    );
};

export default FormAddTodo;
