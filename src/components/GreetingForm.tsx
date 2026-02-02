import { useState } from "react";

export default function GreetingForm() {
    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Inserisci il tuo nome" />
            <p>
                {name ? `Ciao ${name}! 👋` : "Inserisci il tuo nome per ricevere un saluto"}
            </p>
        </div>
    )
}