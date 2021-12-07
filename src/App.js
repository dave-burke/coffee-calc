import { useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'

const StyledApp = styled.div`
  height: 100vh;
`

const Header = styled.header`
  background-color: #2C4C66;
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
      <Header>
        <h1 class="title is-1 has-text-white">Coffee Calc</h1>
      </Header>
      <main>
        <Slider id="cups" label="Cups" min="1" max="12" value={cups} onChange={setCups}></Slider>
        <Slider id="ratio" label="Ratio" min="10" max="18" value={ratio} onChange={setRatio}></Slider>
        <p>Use <Result className="is-size-2 has-text-weight-bold">{calcCoffeeGrams()}</Result> grams of coffee</p>
      </main>
    </StyledApp>
  );
}

export default App;
