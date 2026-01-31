// TODO: Crea un componente "ProdottoCard" che mostra:
// - Nome prodotto: "Laptop Pro"
// - Prezzo: 1299€
// - Disponibile: true
// - Caratteristiche: ["16GB RAM", "512GB SSD", "M3 Pro"]

// Se disponibile = true → mostra "✅ Disponibile"
// Se disponibile = false → mostra "❌ Non disponibile"

// Usa un oggetto per i dati
// Usa .map() per le caratteristiche
// Usa ternary operator per il messaggio disponibilità

// export default function ProdottoCard() {
//     const prodotto = {
//         nomeProdotto: "Laptop Pro",
//         prezzo: 1299,
//         disponibile: true,
//         caratteristiche: ["16GB RAM", "512GB SSD", "M3 Pro"]
//     }

//     return (
//         <div>
//             <h1>{prodotto.nomeProdotto}</h1>
//             <span>{prodotto.prezzo}€</span>
//             <p>{prodotto.disponibile ? "✅ Disponibile" : "❌ Non disponibile"}</p>
//             <ul>
//                 {prodotto.caratteristiche.map(caratteristica =>
//                     <li key={caratteristica}>{caratteristica}</li>
//                 )}
//             </ul>
//         </div>
//     )
// }

// TODO: 
// 1. Crea interface ProdottoCardProps con: nome, prezzo, disponibile, caratteristiche
// 2. Usa destructuring per le props
// 3. Rimuovi i dati hardcoded

interface ProdottoCardProps {
    // Scrivi qui le props
    nome: string;
    prezzo: number;
    disponibile: boolean;
    caratteristiche: string[]
}

export default function ProdottoCard({ nome, prezzo, disponibile, caratteristiche }: ProdottoCardProps) {
    // Rimuovi const prodotto = {...}

    return (
        // Usa le props invece di prodotto.campo
        <div>
            <h1>{nome}</h1>
            <span>{prezzo}€</span>
            <p>{disponibile ? "✅ Disponibile" : "❌ Non disponibile"}</p>
            <ul>
                {caratteristiche.map(caratteristica =>
                    <li key={caratteristica}>{caratteristica}</li>
                )}
            </ul>
        </div>
    );
}