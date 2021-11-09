import { useState } from "react";
import "./styles.css";

function App() {
  // état (state)
  const [title] = useState("Liste de clients");

  const [clients] = useState([
    { id: 1, nom: "Lior Chamla" },
    { id: 2, nom: "Magalie Pernin" },
    { id: 3, nom: "Joseph Durant" },
    { id: 4, nom: "Amélie Pokemon" }
  ]);

  // comportements (behaviour)
  const handleClick = () => {
    alert("Bonjour");
  };

  // affichage (render)
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>X</button>
      <ul>
        {clients.map((client) => (
          <li>
            {client.nom} <button>X</button>{" "}
          </li>
        ))}
      </ul>
      <form action="submit">
        <input type="text" placeholder="Ajouter un client" />
        <button>+</button>
      </form>
    </div>
  );
}

export default App;

/**
 * Chapitres
 * 1) mon premier composant
 * 2) ajouter affichage (JSX)
 * 3) refacto affichage
 *  • refacto "title" (interpolation JSX)
 *  • refacto "liste de client" (const + map)
 * 4) ajouter le state
 * 5) ajouter des comportements (events handler)
 */
