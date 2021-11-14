import React from "react";

export default function Client({ infoClient, onDelete }) {
  return (
    <li key={infoClient.id}>
      {infoClient.nom} <button onClick={onDelete}>X</button>
    </li>
  );
}
