import { useState } from "react";
import "./styles.css";

function App() {
  // état (state)
  const [title] = useState("Liste de clients");

  const [clients, setClients] = useState([
    { id: 1, nom: "Lior Chamla" },
    { id: 2, nom: "Magalie Pernin" },
    { id: 3, nom: "Joseph Durant" },
    { id: 4, nom: "Amélie Pokemon" }
  ]);

  // comportements (events handler)
  const handleDelete = (id) => {
    console.log(id);
    //1. Créer une copie du state
    const clientsCopy = clients.slice();

    //2. Manipuler cette copie du state
    const clientsCopyFiltered = clientsCopy.filter((client) => client.id !== id);

    //3. Updater le state avec cette copie du state
    setClients(clientsCopyFiltered);
  };

  // affichage (render)
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.nom} <button onClick={() => handleDelete(client.id)}>X</button>{" "}
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
 * 6) faire intéragir les trois ensemble
 * 7) supprimer un client de la liste
 */
