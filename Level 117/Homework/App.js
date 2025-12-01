// App.js
import GameItem from "./GameItem";

function App() {
  return (
    <div>
      <h1>Game Selector</h1>

      <GameItem name="Minecraft" />
      <GameItem name="Fortnite" />
      <GameItem name="CS:GO" />
      <GameItem name="Valorant" />
    </div>
  );
}

export default App;
