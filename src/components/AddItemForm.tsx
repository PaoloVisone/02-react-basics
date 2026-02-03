import { useState, type FormEvent } from "react"

// Specifiche:

// Input per inserire testo
// Bottone "Aggiungi"
// Al submit del form:

// Previeni reload pagina
// Mostra in console il testo inserito
// Svuota l'input

export default function AddItemForm() {
    const [testo, setTesto] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!testo.trim()) {
            console.log("Input vuoto, non faccio niente");
            return;
        }

        console.log(`Il testo è: ${testo}`);
        setTesto("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={testo}
                placeholder="Inserisci testo"
                onChange={(e) => setTesto(e.target.value)}
            />
            <button type="submit">Aggiungi</button>
        </form>
    )
}