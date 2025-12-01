export default function CounterButton(props) {

  function handleClick() {
    
    props.onIncrement();
  }

  return (
    <button onClick={handleClick}>
      click me
    </button>
  );
}
