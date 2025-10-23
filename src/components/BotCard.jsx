import React from "react";

function BotCard({ bot, handleClick, buttonLabel }) {
  return (
    <div className="bot-card" style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", margin: "5px" }}>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: "100px" }} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button
        onClick={handleClick}
        style={{
          padding: "5px 10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: buttonLabel === "Add" ? "#4CAF50" : "#f44336",
          color: "white",
          cursor: "pointer",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default BotCard;
