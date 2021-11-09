import "./styles.css";

function App() {
  // état (state)

  // comportements (behaviour)

  // affichage (render)
  return (
    <div>
      <h1>Liste de clients</h1>
      <ul>
        <li>
          Lior Chamla <button>X</button>
        </li>
        <li>
          Magalie Pernin <button>X</button>
        </li>
        <li>
          Luc Dupont <button>X</button>
        </li>
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
 * 2) ajouter affichage
 * 3) ajouter state
 */
