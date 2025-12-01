import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>მთავარი სათაური</h1>
      <h2>მეორე დონის სათაური</h2>
      
      <p>ეს არის პარაგრაფი ტექსტით. JSX ელემენტები რენდერდება React-ის საშუალებით.</p>
      
      <img src="https://via.placeholder.com/300" alt="სურათი" />
      
      <div>
        <button>ღილაკი 1</button>
        <button>ღილაკი 2</button>
        <button>ღილაკი 3</button>
      </div>
      
      <a href="https://example.com">ბმული</a>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
