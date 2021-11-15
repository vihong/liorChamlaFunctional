import React, { useState } from "react";

export default function ClientEdit({ client, placeholder, onChange }) {
  const handleChange = (event) => {
    const id = client.id;
    const clientNew = client.nom;
  };
  return <input value={client.nom} type="text" placeholder={placeholder} onChange={onChange} />;
}
