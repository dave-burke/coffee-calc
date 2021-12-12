import { useState, useMemo } from 'react'
import Slider from './Slider'
import Header from './Header'

function App() {
  const [cups, setCups] = useState(10)
  const [ratio, setRatio] = useState(17)

  const coffeeGrams = useMemo(() => {
    const gramsWater = cups * 5 /* oz per cup */ * 30 /* grams per ounce */
    return Math.round(gramsWater / ratio)
  }, [cups, ratio]);

  return (
    <div className="has-full-height has-background-black-ter has-text-white">
      <Header></Header>
      <main className="container">
        <Slider id="cups" label="Cups" min="1" max="12" value={cups} onChange={setCups}></Slider>
        <Slider id="ratio" label="Ratio" min="8" max="18" value={ratio} onChange={setRatio}></Slider>
        <div className="buttons is-centered are-large">
          <button className="button is-dark" onClick={() => setRatio(8)}>Cold Brew</button>
          <button className="button is-dark" onClick={() => setRatio(12)}>French Press</button>
          <button className="button is-dark" onClick={() => setRatio(15)}>Strong Drip</button>
          <button className="button is-dark" onClick={() => setRatio(17)}>"Golden" Ratio</button>
          <button className="button is-dark" onClick={() => setRatio(18)}>Light Drip</button>
        </div>
        <p className="has-text-centered">Use <span className="ml-1 mr-1 is-size-1 has-text-primary has-text-weight-bold">{coffeeGrams}</span> grams of coffee</p>
      </main>
    </div>
  );
}

export default App;
