import React, { useState } from "react";

export default function Form({ handleAdd }) {
  const [nouveauClient, setNouveauClient] = useState("");

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
      <input value={nouveauClient} type="text" placeholder="Ajouter un client" onChange={handleChange} />
      <button>+</button>
    </form>
  );
}
