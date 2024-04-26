import List from "./list.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "coconut", calories: 159 },
    { id: 4, name: "pineapple", calories: 37 },
    { id: 5, name: "orange", calories: 45 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 15 },
    { id: 3, name: "carrots", calories: 25 },
    { id: 4, name: "corn", calories: 63 },
    { id: 5, name: "broccoly", calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
