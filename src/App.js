import { useState } from 'react';
import styled from 'styled-components'

const StyledApp = styled.div`
  height: 100vh;
`

const Header = styled.header`
  background-color: #2C4C66;
`

const Fieldset = styled.fieldset`
  border-style: none;
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
        <Fieldset className="is-flex">
          <label htmlFor="cups">cups</label>
          <input
            id="cups" type='range'
            className='is-flex-grow-1'
            min='1' max='12'
            value={cups} onChange={e => setCups(e.target.value)}/>
            {cups}
        </Fieldset>
        <Fieldset className="is-flex">
          <label htmlFor="ratio">ratio</label>
          <input
            id="ratio" type='range'
            className='is-flex-grow-1'
            min='10' max='18'
            value={ratio} onChange={e => setRatio(e.target.value)}/>
            1/{ratio}
        </Fieldset>
        <h2>Use <Result className="is-size-2 has-text-weight-bold">{calcCoffeeGrams()}</Result> grams of coffee</h2>
      </main>
    </StyledApp>
  );
}

export default App;
