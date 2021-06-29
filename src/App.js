import React, {Fragment, useState, useEffect} from "react";

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
    <Fragment>
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
    </Fragment>
  );
}

export default App;