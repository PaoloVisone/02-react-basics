import Profilo from "./components/Profilo";
import ProdottoCard from "./components/ProdottoCard";
import Dashboard from "./components/Dashboard";
import Badge from "./components/Badge";
import Counter from "./components/Counter";
import LightSwitch from "./components/LightSwitch";
import GreetingForm from "./components/GreetingForm";

function App() {
  // Dati nel componente genitore
  const prodottiElettronici = [
    { nome: "Laptop Pro", prezzo: 1299, disponibile: true, tags: ["Premium", "Performance"] },
    { nome: "Mouse Wireless", prezzo: 29, disponibile: false, tags: ["Accessori"] },
    { nome: "Tastiera Meccanica", prezzo: 149, disponibile: true, tags: ["Accessori", "RGB"] }
  ];

  const prodottiCasa = [
    { nome: "Lampada Smart", prezzo: 49, disponibile: true, tags: ["Smart Home"] },
    { nome: "Termostato", prezzo: 199, disponibile: true, tags: ["Smart Home", "Risparmio"] }
  ];
  return (
    <div>
      <h1>Frontend React Academy</h1>
      <p>Ciao Paolo! 👋</p>
      <Profilo />
      <ProdottoCard
        nome="Laptop Pro"
        prezzo={1299}
        disponibile={true}
        caratteristiche={["16GB RAM", "512GB SSD", "M3 Pro"]}
      />

      <ProdottoCard
        nome="Mouse Wireless"
        prezzo={29}
        disponibile={false}
        caratteristiche={["Bluetooth", "Batteria 6 mesi"]}
      />
      <Badge testo="Disponibile" tipo="success" />
      <Badge testo="Attenzione" tipo="warning" icona="⚠️" />
      <Badge testo="Errore" tipo="error" icona="❌" />
      <Dashboard prodotti={prodottiElettronici} titolo="Elettronica" />
      <hr />
      <Dashboard prodotti={prodottiCasa} titolo="Casa Smart" />
      <Counter />
      <LightSwitch />
      <GreetingForm />
    </div>
  );
}

export default App;