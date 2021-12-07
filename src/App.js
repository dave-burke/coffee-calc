import { useState } from 'react'
import styled from 'styled-components'
import Slider from './Slider'
import Header from './Header'

const StyledApp = styled.div`
  height: 100vh;
`

const Main = styled.main`
  max-width: 50rem;
`

const Result = styled.span`
  color: #66462C;
  font-size: 3rem;
  font-weight: bold;
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
      <Main className="ml-auto mr-auto">
        <Slider id="cups" label="Cups" min="1" max="12" value={cups} onChange={setCups}></Slider>
        <Slider id="ratio" label="Ratio" min="10" max="18" value={ratio} onChange={setRatio}></Slider>
        <p>Use <Result className="ml-1 mr-1">{calcCoffeeGrams()}</Result> grams of coffee</p>
      </Main>
    </StyledApp>
  );
}

export default App;
