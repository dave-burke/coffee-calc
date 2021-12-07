import { useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import Header from './Header'

const StyledApp = styled.div`
  height: 100vh;
`

const Result = styled.span`
  color: #66462C;
`

function App() {
  const [cups, setCups] = useState(10)
  const [ratio, setRatio] = useState(17)

  const calcCoffeeGrams = () => {
    const gramsWater = cups * 5 /* oz per cup */ * 30 /* grams per ounce */
    return Math.round(gramsWater / ratio)
  }
  return (
    <StyledApp className="has-text-centered">
      <Header></Header>
      <main>
        <Slider id="cups" label="Cups" min="1" max="12" value={cups} onChange={setCups}></Slider>
        <Slider id="ratio" label="Ratio" min="10" max="18" value={ratio} onChange={setRatio}></Slider>
        <p>Use <Result className="is-size-2 has-text-weight-bold ml-1 mr-1">{calcCoffeeGrams()}</Result> grams of coffee</p>
      </main>
    </StyledApp>
  );
}

export default App;
