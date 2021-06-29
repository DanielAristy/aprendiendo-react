import React, {Fragment, useState} from "react";

function App() {
  //Declarando multiples estados
  const [ count, setCount ] = useState(0);
  const [ age, setAge ] = useState(27);
  const [ name, setName ] = useState('Daniel');
  const [lastName, setLastName] = useState('Aristizabal Castaño')

  const handleIncreaseClick = () => {
    setCount(count + 1);
  }

  const handleDecreaseClick = () => {
    setCount(count - 1);
  }

  return (
    <Fragment>
      <p>Mi nombre es {name} {lastName} y tengo {age} años.</p>
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