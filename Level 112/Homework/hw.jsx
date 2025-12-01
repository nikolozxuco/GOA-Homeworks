import React from 'react';

const mapExample1 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled);
  return doubled;
};

const mapExample2 = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  const names = users.map(user => user.name);
  console.log(names);
  return names;
};

const MapExample3 = () => {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

const mapExample4 = () => {
  const jsMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ]);
  
  jsMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  return jsMap;
};

const mapExample5 = () => {
  const words = ['hello', 'world', 'react'];
  const uppercase = words.map(word => word.toUpperCase());
  console.log(uppercase);
  return uppercase;
};

const KeyExample1 = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const KeyExample2 = () => {
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
  ];
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

const KeyExample3 = () => {
  const users = [
    { email: 'alice@mail.com', name: 'Alice' },
    { email: 'bob@mail.com', name: 'Bob' },
    { email: 'charlie@mail.com', name: 'Charlie' }
  ];
  return (
    <div>
      {users.map(user => (
        <div key={user.email}>{user.name}</div>
      ))}
    </div>
  );
};

const KeyExample4 = () => {
  const tasks = [
    { uuid: 'abc-123', title: 'Task 1' },
    { uuid: 'def-456', title: 'Task 2' },
    { uuid: 'ghi-789', title: 'Task 3' }
  ];
  return (
    <ol>
      {tasks.map(task => (
        <li key={task.uuid}>{task.title}</li>
      ))}
    </ol>
  );
};

const KeyExample5 = () => {
  const data = [
    { category: 'food', item: 'apple' },
    { category: 'food', item: 'banana' },
    { category: 'drink', item: 'water' }
  ];
  return (
    <div>
      {data.map((entry, index) => (
        <div key={`${entry.category}-${entry.item}`}>
          {entry.category}: {entry.item}
        </div>
      ))}
    </div>
  );
};

const createElementExample1 = () => {
  return React.createElement('h1', null, 'Hello React');
};

const createElementExample2 = () => {
  return React.createElement(
    'button',
    { className: 'btn', onClick: () => alert('Clicked!') },
    'Click Me'
  );
};

const createElementExample3 = () => {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h2', null, 'Title'),
    React.createElement('p', null, 'This is a paragraph')
  );
};

const createElementExample4 = () => {
  const items = ['Apple', 'Banana', 'Orange'];
  return React.createElement(
    'ul',
    null,
    items.map((item, index) =>
      React.createElement('li', { key: index }, item)
    )
  );
};

const createElementExample5 = () => {
  return React.createElement(
    'div',
    { id: 'app', style: { backgroundColor: '#f0f0f0', padding: '20px' } },
    React.createElement('h1', { className: 'title' }, 'Welcome'),
    React.createElement(
      'input',
      { type: 'text', placeholder: 'Enter your name', required: true }
    ),
    React.createElement('button', { type: 'submit' }, 'Submit')
  );
};


export default function App() {
  return (
    <div>
      <h1>Examples</h1>
      <MapExample3 />
      <KeyExample2 />
      {createElementExample1()}
    </div>
  );
}
