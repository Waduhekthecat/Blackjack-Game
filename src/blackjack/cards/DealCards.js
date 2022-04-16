import styledCom from 'styled-components';
import deal from "../../imgs/deal.png";

const DealCards = (
  {betSize, balance, gameState, GameState, handleDeal}
  ) => {
  if (gameState === GameState.bet && betSize !== 0 && balance !== 0) {
    return (
      <StartRound>
        <Deal 
        onClick={handleDeal} 
        />
      </StartRound>
    );
  }
}

export default DealCards;

// STYLED COMPONENTS //

const StartRound = styledCom.div`
display:flex;
justify-content:center;
position:absolute;
height:100px;
width:100%;
bottom:35%;
@media (max-height: 600px) {
  bottom:40%;
}
`;

const Deal = styledCom.input.attrs({
  type:"image", src:deal, alt:"deal"
})`
background: none;
position: absolute;
cursor: pointer;
width: 175px;
height: 130px;
outline: none;
border: none;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
&:hover {
  transform: scale(1.15);
}       
&:active {
  transform: scale(1.05);
}
`; 