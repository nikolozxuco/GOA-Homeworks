// GameItem.js
function GameItem({ name }) {
  const handleClick = () => {
    alert(`You selected ${name}!`);
  };

  return (
    <button onClick={handleClick} style={{ margin: "5px" }}>
      {name}
    </button>
  );
}

export default GameItem;
