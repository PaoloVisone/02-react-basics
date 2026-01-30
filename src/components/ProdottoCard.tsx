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

export default function ProdottoCard() {
    const prodotto = {
        nomeProdotto: "Laptop Pro",
        prezzo: 1299,
        disponibile: true,
        caratteristiche: ["16GB RAM", "512GB SSD", "M3 Pro"]
    }

    return (
        <div>
            <h1>{prodotto.nomeProdotto}</h1>
            <span>{prodotto.prezzo}€</span>
            <p>{prodotto.disponibile ? "✅ Disponibile" : "❌ Non disponibile"}</p>
            <ul>
                {prodotto.caratteristiche.map(caratteristica =>
                    <li key={caratteristica}>{caratteristica}</li>
                )}
            </ul>
        </div>
    )
}