import React from 'react';
import First from './components/First';
import Second from './components/Second';
import Destruct, {Category} from './components/Destruct';
import State from './components/State';

type textOrNull = string | null;
type fixed = "isso" | "ou" | "aquilo";

function App() {
  const name: string = "demo";
  const age: number = 30;
  const isWorking: boolean = true;

  const func = (name: string): string => {
    return `ola ${name}`;
  };

  const mytext:textOrNull = "tem texto aqui";

  const textandofixed: fixed = "isso";

  return (
    <div className="App">
      <header className="App-header">
        <p>
         {name}
        </p>
        {isWorking && <p>trabalhando...</p>}
        {func(name)}

        <First/>
        <Second name="manoel"/>
        <Destruct title='titulo' content="content" comentsQty={10} tags={['19', '20']} categoria={Category.TS}/>
        <State/>
        {mytext}
        {textandofixed}
      </header>
    </div>
  );
}

export default App;
