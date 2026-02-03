export default function ItemList() {

    const items = ["React", "TypeScript", "Tailwind"];

    const handleDelete = (item: string) => {
        console.log(`Eliminato: ${item}`);
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item}>
                    {item}
                    <button onClick={() => handleDelete(item)}>Elimina</button>
                </li>
            ))}
        </ul>
    );

}