

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur serveur");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de contacter le backend Node.js");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Mon premier projet DevOps</h1>

      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div className="card">
          <h2>{data.message}</h2>
          <p>Application : {data.application}</p>
          <p>Statut : {data.status}</p>
        </div>
      )}
    </div>
  );
}

export default App;
