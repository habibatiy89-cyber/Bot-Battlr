import React from "react";

function BotCollection({ bots }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {bots.length > 0 ? (
          bots.map((bot) => (
            <div
              key={bot.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "150px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <img
                src={bot.avatar_url}
                alt={bot.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{bot.name}</h3>
              <p>{bot.bot_class}</p>
            </div>
          ))
        ) : (
          <p>No bots found.</p>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
