// 1. If Statement - ელემენტის რენდერირება, თუ მომხმარებელი ავტორიზებული არის
function UserProfile({ isLoggedIn, userName }) {
  if (isLoggedIn) {
    return <h1>Welcome, {userName}!</h1>;
  }
  return <h1>Please log in</h1>;
}

// 2. Ternary Operator - ღილაკის ფერი იცვლება სტატუსის მიხედვით
function StatusButton({ isActive }) {
  return (
    <button style={{ backgroundColor: isActive ? 'green' : 'red' }}>
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
}

// 3. && Operator - პროდუქტი ნაჩვენები თუ ის არის ხელმისაწვდომი
function Product({ name, isAvailable, price }) {
  return (
    <div>
      <h2>{name}</h2>
      {isAvailable && <p>${price}</p>}
      {isAvailable && <button>Add to Cart</button>}
      {!isAvailable && <p>Out of Stock</p>}
    </div>
  );
}