import React from "react";

export default function Client({ infoClient, onSelected, onDelete }) {
  return (
    <li key={infoClient.id} onClick={() => onSelected(infoClient.id)}>
      {infoClient.nom} <button onClick={onDelete}>X</button>
    </li>
  );
}
