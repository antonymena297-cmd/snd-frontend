import { useEffect, useRef, useState } from 'react';

export function useWebSocket(url) {
  const ws = useRef(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    function connect() {
      ws.current = new WebSocket(url);
      ws.current.onopen  = () => setConnected(true);
      ws.current.onclose = () => { setConnected(false); setTimeout(connect, 3000); };
      ws.current.onmessage = (e) => setLastMessage(JSON.parse(e.data));
    }
    connect();
    return () => ws.current?.close();
  }, [url]);

  return { lastMessage, connected };
}
