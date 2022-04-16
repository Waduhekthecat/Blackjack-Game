import './index.css';
import Game from './blackjack/Game.js';

function App() {
  return (
      <>
        <Game/>     
      </>
  );
}

export default App;

  // const Wager = {
  //   chip: 'chip',
  //   clear: 'clear',
  //   max: 'max'
  // };

  // const bet = (wagerType, value) => {
  //   switch (wagerType) {
  //     case Wager.chip:
  //       // tableChips.push(chip);
  //       // setTableChips([...tableChips])
  //       setBetAmt(betAmt+value);
  //       break;
  //     case Wager.clear:
  //       // setTableChips([])
  //       setBetAmt(0);
  //       break;
  //     case Wager.max:
  //       // setTableChips([5,5,5,5,5,5])
  //       setBetAmt(balance);
  //       break;
  //     default:
  //       break;
  //   };
  // }
