import { useState } from 'react';
import './css/App.css';
import Board from './Board';
import Info from './Info';

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');
  const resetBoard = () =>{
    setReset(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Tic Tac Toe</h1>
        </p>
        </header>
        <div>
            <div className={`winner ${winner !== '' ? '': 'shrink'}`}>
                  <div className='winner-text'>
                    {winner}
                  </div>
                  <button onClick={() => resetBoard()}>
                      Reset Game
                  </button>
            </div>
            <Info/>
            <br/>
            <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner}/>
           
        </div>
      
    </div>
  );
  }

export default App;
