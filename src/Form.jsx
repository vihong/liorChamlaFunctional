import React, { useState } from "react";

export default function Form({ handleAdd, valueInputBox, addBoxRef }) {
  const [nouveauClient, setNouveauClient] = useState(valueInputBox ? valueInputBox : "");

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = nouveauClient;
    const clientToAdd = { id, nom };

    handleAdd(clientToAdd);
    setNouveauClient("");
  };

  const handleChange = (event) => {
    setNouveauClient(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input ref={addBoxRef} value={nouveauClient} type="text" placeholder="Ajouter un client" onChange={handleChange} />
      <button>+</button>
    </form>
  );
}
