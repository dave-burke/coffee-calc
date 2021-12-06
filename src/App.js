import { useState } from 'react';
import './App.css';

function App() {
  const [cups, setCups] = useState(10)
  const [ratio, setRatio] = useState(17)

  const calcCoffeeGrams = () => {
    const gramsWater = cups * 5 /* oz per cup */ * 30 /* grams per ounce */
    return Math.round(gramsWater / ratio)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee Calc</h1>
      </header>
      <main className="App-main">
        <fieldset>
          <label htmlFor="cups">cups</label>
          <input
            id="cups" type='range'
            min='0' max='12'
            value={cups} onChange={e => setCups(e.target.value)}/>
            {cups}
        </fieldset>
        <fieldset>
          <label htmlFor="ratio">ratio</label>
          <input
            id="ratio" type='range'
            min='10' max='18'
            value={ratio} onChange={e => setRatio(e.target.value)}/>
            1/{ratio}
        </fieldset>
        <h2>Use <span class="App-result">{calcCoffeeGrams()}</span> grams of coffee</h2>
      </main>
    </div>
  );
}

export default App;
