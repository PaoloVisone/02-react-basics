// TODO: Crea un componente "Dashboard" che mostra 3 prodotti:

// Prodotto 1:
// - Nome: "Laptop Pro"
// - Prezzo: 1299
// - Disponibile: true
// - Tags: ["Premium", "Performance"]

// Prodotto 2:
// - Nome: "Mouse Wireless"
// - Prezzo: 29
// - Disponibile: false
// - Tags: ["Accessori"]

// Prodotto 3:
// - Nome: "Tastiera Meccanica"
// - Prezzo: 149
// - Disponibile: true
// - Tags: ["Accessori", "RGB"]

// SFIDA:
// - Crea un ARRAY di prodotti (non 3 oggetti separati)
// - Usa .map() per renderizzare tutti i prodotti
// - Ogni prodotto ha la stessa struttura HTML
// - Usa index come key (per ora va bene)

// export default function Dashboard() {


//     const prodotti = [
//         { nome: "Laptop Pro", prezzo: 1299, disponibile: true, tags: ["Premium", "Performance"] },
//         { nome: "Mouse Wireless", prezzo: 29, disponibile: false, tags: ["Accessori"] },
//         { nome: "Tastiera Meccanica", prezzo: 149, disponibile: true, tags: ["Accessori", "RGB"] }
//     ];

//     return (
//         <div>
//             {prodotti.map((prodotto, index) => (
//                 <div key={index}>
//                     {/* Struttura del singolo prodotto */}
//                     <h2>{prodotto.nome}</h2>
//                     <span>{prodotto.prezzo}€</span>
//                     <p>{prodotto.disponibile ? "✅ Disponibile" : "❌ Non disponibile"}</p>
//                     {prodotto.tags.map(tag =>
//                         <span key={tag}>{tag}</span>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// TODO: Refactora Dashboard per accettare prodotti come props

interface Prodotto {
    nome: string;
    prezzo: number;
    disponibile: boolean;
    tags: string[];
}

interface DashboardProps {
    prodotti: Prodotto[];  // ← Array di prodotti come prop!
    titolo?: string;       // ← Titolo opzionale per la dashboard
}

export default function Dashboard({ prodotti, titolo = "Prodotti" }: DashboardProps) {
    return (
        <div>
            <h1>{titolo}</h1>
            {/* Usa prodotti dalla prop, non hardcoded */}
            {prodotti.map((prodotto, index) => (
                <div key={index}>
                    {/* Struttura del singolo prodotto */}
                    <h2>{prodotto.nome}</h2>
                    <span>{prodotto.prezzo}€</span>
                    <p>{prodotto.disponibile ? "✅ Disponibile" : "❌ Non disponibile"}</p>
                    {prodotto.tags.map(tag =>
                        <span key={tag}>{tag}</span>
                    )}
                </div>
            ))}
        </div>
    );
}