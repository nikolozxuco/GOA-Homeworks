const myMap = new Map([
  ["name", "Giorgi"],
  [1, 100],
  ["isActive", true],
  [2, 3.14],
  ["city", "Tbilisi"]
]);

console.log("დავალება 2: Map-ის ელემენტების რაოდენობა:");
console.log(myMap.size);

console.log("\nდავალება 3: Map-ის ყველა ელემენტი:");
for (const [key, value] of myMap.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}

console.log("\nდავალება 4: .has() მეთოდის გამოყენება:");
console.log(`"name" გასაღი არის Map-ში: ${myMap.has("name")}`);
console.log(`"age" გასაღი არის Map-ში: ${myMap.has("age")}`);
console.log(`1 გასაღი არის Map-ში: ${myMap.has(1)}`);
