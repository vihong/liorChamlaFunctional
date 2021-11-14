import { useState } from "react";
import Client from "./Client";
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

  const [nouveauClient, seNouveauClient] = useState("");

  // comportements (events handler)
  const handleDelete = (id) => {
    const clientsCopy = clients.slice();
    const clientsCopyFiltered = clientsCopy.filter((client) => client.id !== id);
    setClients(clientsCopyFiltered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const clientsCopy = [...clients];

    const id = new Date().getTime();
    const nom = nouveauClient;
    const client = { id, nom };
    clientsCopy.push(client);

    setClients(clientsCopy);
    seNouveauClient("");
  };

  const handleChange = (event) => {
    seNouveauClient(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {clients.map((client) => (
          <Client infoClient={client} onDelete={() => handleDelete(client.id)} />
        ))}
      </ul>

      <form action="submit" onSubmit={handleSubmit}>
        <input value={nouveauClient} type="text" placeholder="Ajouter un client" onChange={handleChange} />
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
 * 8) ajouter un client à la liste (gestion des formulaires react)
 * 9) refactor syntaxique de App
 * 10) refactor structurel de App (props)
 * 11 ) notion de black box (props)
 */
