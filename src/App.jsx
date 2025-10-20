import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);

  // Fetch bots from db.json
  useEffect(() => {
    fetch("http://localhost:8001/bots") // ✅ your JSON server URL
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  );
}

export default App;
