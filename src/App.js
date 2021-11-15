import { useRef, useState } from "react";
import Client from "./Client";
import Form from "./Form";
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

  const [clientBeingEdited, setClientbeingEdited] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const editBoxRef = useRef();

  // comportements (events handler)
  const handleDelete = (id) => {
    const clientsCopy = clients.slice();
    const clientsCopyFiltered = clientsCopy.filter((client) => client.id !== id);
    setClients(clientsCopyFiltered);
  };

  const handleAdd = (clientToAdd) => {
    const clientsCopy = [...clients];
    clientsCopy.push(clientToAdd);
    setClients(clientsCopy);
  };

  const handleClientSelected = async (idSelected) => {
    setIsEditing(true);
    const clientToEdit = clients.find((client) => client.id === idSelected);
    await setClientbeingEdited(clientToEdit);
    editBoxRef.current.focus();
  };

  const handleUpdate = (clientUpdated) => {
    const clientsCopy = [...clients];
    const indexOfClientToUpdate = clientsCopy.findIndex((client) => client.id === clientUpdated.id);
    clientsCopy[indexOfClientToUpdate] = clientUpdated;
    setClients(clientsCopy);
  };

  const handleInputChange = (event) => {
    const clientUpdated = { id: clientBeingEdited.id, nom: event.target.value };
    setClientbeingEdited(clientUpdated);
    handleUpdate(clientUpdated);
  };

  // affichage (render)
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {clients.map((client) => (
          <Client key={client.id} infoClient={client} onSelected={handleClientSelected} onDelete={() => handleDelete(client.id)} />
        ))}
      </ul>
      <Form handleAdd={handleAdd} />
      {isEditing && <input ref={editBoxRef} value={clientBeingEdited.nom} placeholder={"Click on a client to edit"} onChange={handleInputChange} />}
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
 * 5) ajouter des comportements (ids handler)
 * 6) faire intéragir les trois ensemble
 * 7) supprimer un client de la liste
 * 8) ajouter un client à la liste (gestion des formulaires react)
 * 9) refactor syntaxique de App
 * 10) refactor structurel de App (props)
 * 11) notion de black box (raise the id)
 * 12) refactor Form
 * 13) Ajouter un input (séparé) modifiable en live
 * 14) Ajouter un input add client à sélectionner
 */
