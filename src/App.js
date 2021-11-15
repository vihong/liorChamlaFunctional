import { useRef, useState } from "react";
import Client from "./Client";

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

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const styleButton = {
    background: isModeAdmin && "green",
    color: isModeAdmin ? "white" : "black"
  };

  // comportements (events handler)
  const handleDelete = (id) => {
    const clientsCopy = clients.slice();
    const clientsCopyFiltered = clientsCopy.filter((client) => client.id !== id);
    setClients(clientsCopyFiltered);
  };

  const handleAdd = (clientToAdd) => {
    console.log(clientToAdd);
    const clientsCopy = [...clients];
    clientsCopy.splice(0, 0, clientToAdd);

    setClients((clients) => {
      return clientsCopy;
    });
  };

  const handleClientSelected = async (idSelected) => {
    if (!isModeAdmin) return;
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

  const handleAddButton = async () => {
    // création du nouveau client
    const id = new Date().getTime();
    const nom = "";
    const newClient = { id, nom };

    // envoie à handleAdd pour gestion du state
    handleAdd(newClient);
    console.log("pokemon 2");
    await setIsEditing(true);
    await setClientbeingEdited(newClient);
    editBoxRef.current.focus();
  };

  const toggleAdminButton = () => {
    setIsModeAdmin(!isModeAdmin);
  };

  // affichage (render)
  return (
    <div>
      <button style={styleButton} onClick={toggleAdminButton}>
        {isModeAdmin ? "Quitter le mode Admin" : "Passer en mode Admin"}
      </button>
      <h1>{title}</h1>
      {isModeAdmin && <button onClick={handleAddButton}>Add a client</button>}
      <ul>
        {clients.map((client) => (
          <Client key={client.id} infoClient={client} onSelected={handleClientSelected} onDelete={() => handleDelete(client.id)} isModeAdmin={isModeAdmin} />
        ))}
      </ul>
      {isModeAdmin && <input ref={editBoxRef} value={clientBeingEdited.nom} placeholder={"Click on a client to edit"} onChange={handleInputChange} />}
      {/* <Form handleAdd={handleAdd} addBoxRef={addBoxRef} /> */}
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
 * 14) Ajouter la box editing que si le client est sélectionné
 * 15) Ajouter un client vierge afin d'ajouter client
 * 16) Refacto + embellishment UX
 */
