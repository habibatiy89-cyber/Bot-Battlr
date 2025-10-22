import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemove }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>(Select bots to add here later)</p>
      ) : (
        <div className="bot-grid">
          {army.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={() => onRemove(bot)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
