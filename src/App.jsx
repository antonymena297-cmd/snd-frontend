import { useEffect, useState } from "react";
import { api } from "./lib/api";

function App() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");

  // cargar eventos
  useEffect(() => {
    api.get("/api/events").then(res => {
      setEvents(res.data);
    });
  }, []);

  // websocket
  useEffect(() => {
    const ws = new WebSocket("wss://snd-backend-a0zc.onrender.com");

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      if (data.type === "NEW_EVENT") {
        setEvents(prev => [data.data, ...prev]);
      }
    };

    return () => ws.close();
  }, []);

  // crear evento
  const createEvent = async () => {
    if (!name) return;

    await api.post("/api/events", { name });
    setName("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🚀 SND Dashboard</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del evento"
        />
        <button onClick={createEvent}>
          Crear
        </button>
      </div>

      <h2>Eventos</h2>

      <ul>
        {events.map(e => (
          <li key={e.id}>
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

