

function Child(props) {
  return (
    <div>
      <h2>შვილობილი კომპონენტი</h2>
      <p>სახელი: {props.name}</p>
      <p>ასაკი: {props.age}</p>
      <p>ქვეყანა: {props.country}</p>
      <p>პროფესია: {props.job}</p>
      <p>სტატუსი: {props.status}</p>
    </div>
  );
}

export default Child;
