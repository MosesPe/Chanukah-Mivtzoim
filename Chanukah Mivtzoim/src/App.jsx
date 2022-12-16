

import './App.css'
import Flame from './components/img'
function App() {
 

  return (
    <div className="App">
  <h1 className="header">Happy Chanukah</h1>
  <div className="Menorah">
    <div className="Flame"><Flame/></div>
    <div className="candles Container">
      <span className="candle"></span>
      <span className="candle"></span>
      <span className="candle"></span>
      <span className="candle"></span>
      <span className="candle shamash"></span>
      <span className="candle"></span>
      <span className="candle"></span>
      <span className="candle"></span>
      <span className="candle"></span>
    </div>
    <div className="Container"><div className="base"></div></div>

  </div>
    </div>
  )
}

export default App
