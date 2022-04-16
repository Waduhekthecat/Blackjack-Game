import styledCom from 'styled-components';

const Scores = ({gameState, GameState, dealerScore, playerScore}) => {
    if (gameState === GameState.playerTurn || gameState === GameState.dealerTurn) {
        return (
        <><DDisplay>
                <Score>Score: {dealerScore}</Score>
            </DDisplay>

            <PDisplay>
                <Score>Score: {playerScore}</Score>
            </PDisplay></>
        )
    };
}
export default Scores;

const Score = styledCom.h2`
  color: white; 
  background-color: #111111; 
  border: double; 
  border-color: white;
  border-radius: 15%;
`;

const DDisplay = styledCom.div` 
display:flex;
  position: absolute;
  margin-left:-10px;
  top: 30%;
  justify-content: center;
  align-items: center;
`;

const PDisplay = styledCom.div` 
display:flex;
  position: absolute;
  margin-left:-10px;
  bottom:25%;
  justify-content: center;
  align-items: center;
`;