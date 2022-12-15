import logo from './logo.svg';
import './App.css';
import Square from './square'
import { useState } from 'react';


function App() {

  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '',])
  const [player, setPlayer] = useState(true)

 const handleClick = () => {
  setSquares(['', '', '', '', '', '', '', '', '',])
  setPlayer(true)
 }

  return (
    <div className="App">
      <div className='container'>
        {squares.map((val, index) =>{
            return(
              <Square
                        setSquares={setSquares}
                        index={index}
                        squareValue={val}
                        squares={squares}
                        player={player}
                        setPlayer={setPlayer}
                    />
            )
        })}
      </div>
        <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
