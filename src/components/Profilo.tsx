// TODO: Crea un componente "Profilo" che mostra:
// - Nome: Paolo Visone
// - Ruolo: Frontend Developer
// - Anni di esperienza: 1
// - Skills: TypeScript, React, Tailwind (in una lista)

// Usa variabili JavaScript, non testo hardcoded!

export default function Profilo() {
    const utente = {
        nome: "Paolo Visone",
        ruolo: "Frontend Developer",
        anni_di_esperienza: 1,
        skills: ["TypeScript", "React", "Tailwind"]
    };

    return (
        <div>
            <h1>{utente.nome}</h1>
            <h2>{utente.ruolo}</h2>
            <p>Anni di esperienza: {utente.anni_di_esperienza}</p>
            <ul>
                {utente.skills.map(skill =>
                    <li key={skill}>{skill}</li>
                )}
            </ul>
        </div>
    )
}