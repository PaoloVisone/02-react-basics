// TODO: Crea un componente Badge che mostra etichette colorate

// Interface con:
// - testo (string, obbligatorio)
// - tipo (solo "success" | "warning" | "error", obbligatorio)
// - icona (string, OPZIONALE)
interface BadgeProps {
    testo: string;
    tipo: "success" | "warning" | "error";
    icona?: string
}

// Il badge deve:
// - Mostrare il testo
// - Colorarsi in base al tipo:
//   success → background verde (#22c55e)
//   warning → background arancione (#f97316)
//   error → background rosso (#ef4444)
// - Se c'è icona, mostrarla prima del testo
export default function Badge({ testo, tipo, icona }: BadgeProps) {
    // Hint per i colori:
    const colori = {
        success: "#22c55e",
        warning: "#f97316",
        error: "#ef4444"
    };

    return (

        // Usa: style={{ backgroundColor: colori[tipo] }} 
        <span style={{ backgroundColor: colori[tipo], padding: "4px 8px", borderRadius: "4px", color: "white" }}>
            {icona && <span>{icona} </span>}
            {testo}
        </span >

    )

}