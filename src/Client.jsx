import React from "react";

export default function Client({ infoClient, onSelected, onDelete, isModeAdmin }) {
  const itemStyle =
    infoClient.id === 0
      ? {
          color: "green",
          fontWeight: "bold",
          listStyleType: "none",
          border: "1px solid red",
          display: "inline",
          borderRadius: 5,
          padding: "5px 10px",
          marginBottom: "20px"
        }
      : null;

  return (
    <li key={infoClient.id} onClick={() => onSelected(infoClient.id)} style={itemStyle}>
      {infoClient.nom} {isModeAdmin && <button onClick={onDelete}>X</button>}
    </li>
  );
}
