import { useEffect, useState } from "react";
import { api } from "./lib/api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/health")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend conectado 🚀</h1>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;
