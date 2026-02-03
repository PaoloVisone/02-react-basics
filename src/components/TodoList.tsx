import { useState, type FormEvent } from "react";

export default function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleAdd = (e: FormEvent) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        setTodos([...todos, inputValue]);
        setInputValue("");
    };

    const handleDelete = (todoToDelete: string) => {
        setTodos(todos.filter(todo => todo !== todoToDelete));
    };

    return (
        <>
            <form onSubmit={handleAdd}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nuovo todo"
                />
                <button type="submit">Aggiungi</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo}>
                        {todo}
                        <button onClick={() => handleDelete(todo)}>Elimina</button>
                    </li>
                ))}
            </ul>
        </>
    )
}