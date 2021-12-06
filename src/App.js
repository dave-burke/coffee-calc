import { useState } from 'react';
import styled from 'styled-components'

const StyledApp = styled.div`
  text-align: center;
  height: 100vh;
`

const Header = styled.header`
  background-color: #2C4C66;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Fieldset = styled.fieldset`
  border-style: none;
  display: flex;
`

const FieldsetInput = styled.input`
  flex: 1 0 auto;
`

const Result = styled.span`
  color: #66462C;
  font-weight: bolder;
  font-size: xx-large;
`

function App() {
  const [cups, setCups] = useState(10)
  const [ratio, setRatio] = useState(17)

  const calcCoffeeGrams = () => {
    const gramsWater = cups * 5 /* oz per cup */ * 30 /* grams per ounce */
    return Math.round(gramsWater / ratio)
  }
  return (
    <StyledApp>
      <Header>
        <h1>Coffee Calc</h1>
      </Header>
      <main>
        <Fieldset>
          <label htmlFor="cups">cups</label>
          <FieldsetInput
            id="cups" type='range'
            min='1' max='12'
            value={cups} onChange={e => setCups(e.target.value)}/>
            {cups}
        </Fieldset>
        <Fieldset>
          <label htmlFor="ratio">ratio</label>
          <FieldsetInput
            id="ratio" type='range'
            min='10' max='18'
            value={ratio} onChange={e => setRatio(e.target.value)}/>
            1/{ratio}
        </Fieldset>
        <h2>Use <Result>{calcCoffeeGrams()}</Result> grams of coffee</h2>
      </main>
    </StyledApp>
  );
}

export default App;
