import { useState } from "react";


export default function App(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1)
  }

  return(
    <div>
      <h1>Contadores que são atualizados juntos</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}

function MyButton({count, onClick}){
  return(
    <button onClick={onClick} >
      Clicado {count} vezes
    </button>
  );
}