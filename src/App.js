import React, { useState, useEffect} from "react";
import { Header } from "./components/Header";
import { Characters } from "./components/Characters";

function App() {
  //Declarando multiples estados
  const [ count, setCount ] = useState(0);
  const [ users, setUsers ] = useState([
    {id: 1, name: 'Daniel', lastName: 'Aristizabal Castaño', age: 27},
    {id: 1, name: 'Jose', lastName: 'Ramirez', age: 56},
  ]);

  const handleIncreaseClick = () => {
    setCount(count + 1);
  }

  const handleDecreaseClick = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    document.title = `Contador ${count}`;
  })

  return (
    <div className="App">
      <Header />
      <h2>Usuarios</h2>
      {users.map(user => (
        <p>Mi nombre es {user.name} {user.lastName} y tengo {user.age} años.</p>
      ))}
      <p>Contador {count}</p>
      <button onClick={handleIncreaseClick}>
        Aumentar
      </button>
      <button onClick={handleDecreaseClick}>
        Disminuir
      </button>
      <Characters />
    </div>
  );
}

export default App;