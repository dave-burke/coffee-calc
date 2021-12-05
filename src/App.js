import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee Calc</h1>
      </header>
      <main className="App-main">
        <fieldset>
          <label for="cups">cups</label>
          <input id="cups" type='range' min='0' max='12' value='10'/>
        </fieldset>
        <fieldset>
          <label for="ratio">ratio</label>
          <input id="ratio" type='range' min='10' max='18' value='17'/>
        </fieldset>
      </main>
    </div>
  );
}

export default App;
