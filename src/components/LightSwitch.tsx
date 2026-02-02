import { useState } from "react";

export default function LightSwitch() {
    const [isOn, setIsOn] = useState(false)

    return (
        <div>
            <h2>{isOn ? "La luce è ACCESA ✅" : "La luce è SPENTA ❌"}</h2>
            <button onClick={() => setIsOn(!isOn)}>{isOn ? "Spegni 💡" : "Accendi 🔦"}</button>
        </div>
    )
}