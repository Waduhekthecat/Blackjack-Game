import styledCom from 'styled-components';
import Displays from "./Displays.js";
import LeaveTable from "./Leave.js";
import Bet from "./Bet.js";
import Table from "../../imgs/tableBackground.png";

const Visuals = (
  {balance, betSize, gameState, GameState, handleClear, handleMax, handleClick}
  ) => {
    return (
      <>
        <BlackjackTable/>
          <Displays 
            gameState={gameState}
            GameState={GameState}
            balance={balance} 
            betSize={betSize}
            />
          <Bet
            gameState={gameState}
            GameState={GameState}
            handleClick={handleClick}
            handleClear={handleClear}
            handleMax={handleMax}
            />
        <LeaveTable/>
      </>
    );
}

export default Visuals;

// const Deck = styledCom.img`
// position:absolute;
// z-index:10;
// width:120px;
// margin-top: 1%;
// margin-left:150px;
// margin-right:-120px;
// @media (max-width: 1200px) {
//   transform:scale(.75)
// }
// @media (max-width: 800px) {
//   transform:scale(.55)
// }
// @media (max-width: 600px) {
//   transform:scale(.45)
//   margin-left:100px;
// }
// `;

const BlackjackTable = styledCom.img.attrs({
  src: Table, alt:""
})`
position: fixed;
width: 100%;
height: 95%;
top: -20px;
pointer-events: none;
z-index: -200;
padding-left: 10%;
padding-right: 10%;
padding-bottom: 2%;
  @media (max-width: 1450px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5.5%;
  }
`; 