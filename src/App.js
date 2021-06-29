import React, {Fragment, useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    setCount(count + 1);
  }

  const handleDecreaseClick = () => {
    setCount(count - 1);
  }

  return (
    <Fragment>
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