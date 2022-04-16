import React, { useState, useEffect } from "react"
import { Grid } from "@mui/material/";
import styledCom from 'styled-components';

import Deck from "./cards/Deck.js";
import Card from "./cards/RenderCard.js";
import DealCards from "./cards/DealCards.js";
import ActionBtns from "./player/Actions.js";
import Scores from "./UI/Scores.js";
import Visuals from "./UI/Visuals.js";
    import Win from '../imgs/gifs/_blowing_kiss[window]4x.gif';
    import Lose from '../imgs/gifs/_laughing_devil[window]4x.gif';

// Core Game Component
const Game = () => {

//   // Initializes and holds game state
  const GameState = {
    bet: 'bet',
    init: 'init',
    playerTurn: 'playerTurn',
    dealerTurn: 'dealerTurn',
  };
  const Deal = {
    player: 'player',
    dealer: 'dealer',
    hidden: 'hidden',
  };
  const Results = {
    blackjack: 'blackjack',
    playerWins: 'playerWins',
    dealerWins: 'dealerWins',
    playerBusts: 'playerBusts',
    dealerBusts: 'dealerBusts',
    push: 'push',
  };

  const [gameState, setGameState] = useState(GameState.bet);
  const [game, setGame] = useState("placeBets");  
  const [balance, setBalance] = useState(5000);
  const [betSize, setBetSize] = useState(0);
  const [deck, setDeck] = useState(Deck);
  const [hiddenCard, setHiddenCard] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [message, setMessage] = useState("");
  const [animation, setAnimation] = useState("");

  // Initialize Game
  useEffect(() => {
    if (gameState === GameState.init) {
      dealHands();
      setGameState(GameState.playerTurn); 
    }
  }, [gameState]);

  // Update scores
  useEffect(() => {
    calculate(dealerHand, setDealerScore);
    setDealerCount(dealerCount + 1)
  }, [dealerHand, hiddenCard]);

  useEffect(() => {
    calculate(playerHand, setPlayerScore);
    setPlayerCount(playerCount + 1)
  }, [playerHand]);

  // Player turn
  useEffect(() => {
      if (playerCount === 2 &&  playerScore === 21 && dealerScore !==21){
        setMessage("Blackjack!")
        setAnimation(Win);
        setTimeout(() => reset(), [4000])

      };
      if (playerScore > 21) {
        setGame(Results.playerBusts)
        setTimeout(() => reset(), [4000])

      };
  }, [playerCount]);

  // Dealer turn
  useEffect(() => {
    if(gameState === GameState.dealerTurn) {
      if(dealerScore > 21) {
        setGame(Results.dealerBusts)
      } else
        if (dealerScore >= 17 && dealerScore <= 21) {
          checkWin();
        }
        else {
          setTimeout(()=>
          drawCard(Deal.dealer), [500])
        }
      }
    }, [dealerCount]);

    // handle results
  useEffect(() => {
    if (game === Results.blackjack) {
    setTimeout(()=>setBalance(Math.round((balance + (betSize * 2.5)) * 100) / 100), [3500])
    setTimeout(()=>setMessage("Blackjack!"), [1000])
    setTimeout(()=>setAnimation(Win), [1000])
      setTimeout(()=> reset(), [4000]);
  } else if (game === Results.playerBusts) {
    setTimeout(()=>setMessage("Player Busted!"), [1000])
    setTimeout(()=>setAnimation(Lose), [1000])
      setTimeout(()=> reset(), [4000]);
  } else if (game === Results.dealerBusts) {
    setTimeout(()=>setBalance(Math.round((balance + (betSize * 2)) * 100) / 100), [4000])
    setTimeout(()=>setMessage("Dealer Busted!"), [1000])
    setTimeout(()=>setAnimation(Win), [1000])
      setTimeout(()=> reset(), [4000]);
  } else if (game === Results.playerWins) {
    setTimeout(()=>setBalance(Math.round((balance + (betSize * 2)) * 100) / 100), [4000])
    setTimeout(()=>setMessage("Player Wins!"), [1000])
    setTimeout(()=>setAnimation(Win), [1000])
      setTimeout(()=> reset(), [4000]);
  } else if (game === Results.dealerWins) {
    setTimeout(()=>setMessage("Dealer Wins!"), [1000])
    setTimeout(()=>setAnimation(Lose), [1000])
      setTimeout(()=> reset(), [4000]);
  } else if (game === Results.push) {
    setTimeout(()=>setBalance(Math.round((balance + (betSize * 1)) * 100) / 100), [4000])
    setTimeout(()=>setMessage("Push!"), [1000])
      setTimeout(()=> reset(), [4000]);
    }
}, [game]);
  
 // Game functions
const shuffle = () => {
  let newDeck = JSON.parse(JSON.stringify(Deck))
    return (
      setDeck(newDeck)
    )
  };
  const handleClear = () => {
    setBetSize(0)
  };
  const handleMax = () => {
    setBetSize(balance)
  };
  const handleClick = (e) => {
    let value = (e.target.value);
    if (parseInt(betSize)+parseInt(value) > parseInt(balance)){
      alert("Not Enough Minerals");
    } else {
    setBetSize(parseInt(betSize)+parseInt(value))};
  };
  const dealHands = () => {
    setTimeout(() => drawCard(Deal.player), [800])
    setTimeout(() => drawCard(Deal.hidden), [1300])
    setTimeout(() => drawCard(Deal.player), [1800])
    setTimeout(() => drawCard(Deal.dealer), [2300])
    setTimeout(() => setGame("inProgress"), [2800])
  };
  const drawCard = (dealType) => {
    if (deck.length > 5) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      var card = deck[randomIndex];
      deck.splice(randomIndex, 1);
      setDeck([...deck]);
      console.log(card, 'Remaining Cards:', deck.length);
      dealCard(dealType, card)
    }; 
    if (deck.length <= 5){
    shuffle();
    dealCard(dealType, card);
    }
  };
  const dealCard = (dealType, card) => {
    switch (dealType) {
      case Deal.player:
        playerHand.push(card);
        setPlayerHand([...playerHand]);
        break;
      case Deal.dealer:
        dealerHand.push(card);
        setDealerHand([...dealerHand]);
        break;
      case Deal.hidden:
        hiddenCard.push(card);
        setHiddenCard([...hiddenCard]);
        break;
      default:
        break;
    }
  };
  const revealCard = () => {
    let hidden = hiddenCard.pop() 
    dealerHand.push(hidden)
    setDealerHand([...dealerHand])
  };
  const calculate = (cards, setScore) => {
    let total = 0;
    cards.forEach((card) => {
      if (!card.includes('A')) {
        if (card.includes('K')) {
          total+=10
        } else 
        if (card.includes('Q')) {
          total+=10
        } else
        if (card.includes('J')) {
          total+=10
        } else
        if (card.includes('T')) {
          total+=10
        } else {
          total += parseInt(card);
        };
      };
    });
      const aces = cards.filter((card) => {
        return card.includes('A');
      });
      aces.forEach(() => {
        if ((total + 11) > 21) {
          total+=1
        } else 
        if ((total + 11) === 21) {
          if (aces.length > 1) {
            total+=1
          } else {
          total+=11
        }
      } else {
          total+=11
        }
    })
    setScore(total);
  };
  // Player actions
  const handleHit = () => {
    drawCard(Deal.player)
  };
  const handleStand = () => {
    revealCard();
    setGameState(GameState.dealerTurn);
  };
  const handleDeal = () => {
    setGameState(GameState.init)
    setBalance(balance - betSize)
  };
  const checkWin = () => {
  if(dealerScore > playerScore) {
    setGame(Results.dealerWins);
  } else
  if(dealerScore < playerScore) {
    setGame(Results.playerWins);
  } else
  if(dealerScore === playerScore) {
    setGame(Results.push);
  };
}
  // Resets game state
  const reset = () => {
    setHiddenCard([]);
    setPlayerHand([]);
    setPlayerScore(0);
    setPlayerCount(0);
    setDealerHand([]);
    setDealerScore(0);
    setDealerCount(0);
    setBetSize(0);
    setMessage("");
    setAnimation("");
    setGame("placeBets");
    setGameState(GameState.bet)
    };
  
    // console.table('Dealer: ', dealerHand)
    // console.table('Player: ', playerHand)
    // console.log('dealerScore: ', dealerScore)
    // console.log('playerScore: ', playerScore)
    // console.log('dealerCount: ', dealerCount)
    // console.log('playerCount: ', playerCount)
    // console.log('Game results: ', game)
    // console.log('Game State: ', gameState)

    console.log(gameState)
  return (
    <Container>
      <DealerTitle>DEALER</DealerTitle>
      <DealerHand>
        <DealerUl>
          {hiddenCard.map(card =>
            <DealerLi key={card}>
              <Card card={card} back={true} height="150px"/>
            </DealerLi>)}
          {dealerHand.map(card =>
            <DealerLi key={card}>
              <Card card={card} height="150px"/>
            </DealerLi>)}
        </DealerUl>
      </DealerHand>
      <DealCards 
        balance={balance}
        betSize={betSize}
        gameState={gameState}
        GameState={GameState} 
          handleDeal={handleDeal}
          />
      <PlayerUI>
        <ActionBtns
          game={game}
          GameState={GameState}
          Results={Results}
          dealerHand={dealerHand}
          playerScore={playerScore}
            handleStand={handleStand} 
            handleHit={handleHit}
            />
      </PlayerUI>
      <PlayerHand>
        <PlayerUl>
          {playerHand.map(card => 
            <PlayerLi key={card}>
              <Card card={card} height="150px"/>
            </PlayerLi>)}
        </PlayerUl>
      </PlayerHand>
      <Scores 
        gameState={gameState}
        GameState={GameState}
        playerScore={playerScore}
        dealerScore={dealerScore}/>
     
      <Visuals 
        game={game}
        gameState={gameState}
        GameState={GameState}
        betSize={betSize}
        balance={balance}
        playerHand={playerHand}
        dealerHand={dealerHand}
          handleClear={handleClear}
          handleMax={handleMax}
          handleClick={handleClick}
          /> 
      <Message><h1>{message}</h1></Message>
      <Animation><img src={animation} alt=""/></Animation>
    </Container>
  )
};

export default Game;

const Message = styledCom.div`
position:absolute;
bottom:15%;
color:white;
`;

const Animation = styledCom.div`
position:absolute;
bottom:35%;
`;

const PlayerUI = styledCom(Grid).attrs({
  container: true,
})`
  position: absolute;
  height: 200px;
  bottom:-3%;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0 10px black;
  z-index: 29;
  color: white;
  font-family: "Play", sans-serif;
  -webkit--select: none;
  
`;


// Styled Bet Components

// const Spacing = styledCom(Grid).attrs({
//   item: true,
// })`
//   z-index:-10;
// `;

// const SetBetSize = styledCom(Grid).attrs({
//   container: true,
// })`
//   position: absolute;
//   width: 80%;
//   height: 110px;
//   margin: 0 auto;
//   bottom: 1.5%;
//   display: flex;
//   color: black;
//   justify-content: space-evenly;
//   align-items: center;
//   z-index: 400;
// `;

// const ClearBet = styledCom(Grid).attrs({
//   item: true,
// })`
//    `;

// const MaxBet = styledCom(Grid).attrs({
//   item: true,
// })`
//    `;

// const Grid10 = styledCom(Grid).attrs({
//   item: true,
// })` 
//   display:absolute;
//   justifyContent:center;
//   alignItems:center;
//   width: 120px;
//   height: 150px;
// `;

// const Grid20 = styledCom(Grid).attrs({
//   item: true,
// })` 
//   display:absolute;
//   justifyContent:center;
//   alignItems:center;
//   width: 120px;
//   height: 150px;
// `;
// const Grid50 = styledCom(Grid).attrs({
//   item: true,
// })`
//   display:absolute;
//   justifyContent:center;
//   alignItems:center;
//   width: 120px;
//   height: 150px;
// `;

// const Grid100 = styledCom(Grid).attrs({
//   item: true,
// })` 
//   display:absolute;
//   justifyContent:center;
//   alignItems:center;
//   width: 120px;
//   height: 150px;
// `;

// const Bet10 = styledCom(Bet_10)`
//   transform: scale(1.1);
//     @media (max-width: 1450px) {
//       transform: scale(1.0);
//     }
//     @media (max-width: 1200px) {
//       transform: scale(0.9);
//     }
// `;

// const Bet20 = styledCom(Bet_20)`
//   transform: scale(1.1);  
//     @media (max-width: 1450px) {
//       transform: scale(1.0);
//     }
//     @media (max-width: 1200px) {
//       transform: scale(0.9);
//     }
// `;

// const Bet50 = styledCom(Bet_50)`
//   transform: scale(1.1);  
//     @media (max-width: 1450px) {
//       transform: scale(1.0);
//     }
//     @media (max-width: 1200px) {
//       transform: scale(0.9);
//     }
// `;

// const Bet100 = styledCom(Bet_100)`
//   transform: scale(1.1);
//     @media (max-width: 1450px) {
//       transform: scale(1.0);
//     }
//     @media (max-width: 1200px) {
//       transform: scale(0.9);
//     }
// `;

// const PlaceBetBtn = styledCom.button`
//   transform: scale(1);
//   background: transparent;
//   width: 100px;
//   height: 100px;
//   outline: none;
//   color: white;
//   border: none;
//   cursor: pointer;
//   user-select: none;
//   font-family: "Play", sans-serif;
//   -webkit-user-select: none;
//     &:hover {
//         transform: scale(1.1);
//     }
//     &:active {
//         transform: scale(1);
//     }
//       @media (max-width: 1450px) {
//         transform: scale(1.0);
//       }
//       @media (max-width: 1200px) {
//         transform: scale(0.9);
//       }
// `;

// const ClearBtn = styledCom.button`
//   background: transparent;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   user-select: none;
//   font-family: "Play", sans-serif;
//   -webkit-user-select: none;
//     &:hover {
//       transform: scale(1.1);
//     }
//     &:active {
//         transform: scale(0.9);
//     }

//       @media (max-width: 1450px) {
//         transform: scale(1.0);
//       }
//       @media (max-width: 1200px) {
//         transform: scale(0.9);
//       }
// `;
// const MaxBetBtn = styledCom.button`
//   background: transparent;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   user-select: none;
//   -webkit-user-select: none;
//     &:hover {
//       transform: scale(1.1);
//     }
//     &:active {
//         transform: scale(0.9);
//     }
//       @media (max-width: 1450px) {
//         transform: scale(1.0);
//       }
//       @media (max-width: 1200px) {
//         transform: scale(0.9);
//       }
// `;

// Styled Chips Components

// const Chip10 = styledCom.img.attrs({
//   visibility: "visible",
//   src: Svg10,
// })`
//   transform: scale(0.7);
//   position: absolute;
//   transform: ${(props) =>
//     props.one === "0" ? "translateY(-0px)" : 
//     props.one === "1" ? "translateY(-12px)" : 
//     props.one === "2" ? "translateY(-24px)" : 
//     "translateY(-36px)"};
//   bottom:-250px;
//   margin-left:-20px;
//   z-index: 8;
// `;

// const Chip20 = styledCom.img.attrs({
//   visibility: "visible",
//   src: Svg20,
// })`transform: scale(0.7);
//   position: absolute;
//   transform: ${(props) =>
//     props.one === "0" ? "translateY(-0px)" : 
//     props.one === "1" ? "translateY(-12px)" : 
//     props.one === "2" ? "translateY(-24px)" : 
//     "translateY(-36px)"};
//   margin-left: -80px;
//   bottom: -200px;
//   z-index: 6;
// `;

// const Chip50 = styledCom.img.attrs({
//   visibility: "visible",
//   src: Svg50,
// })`
//   transform: scale(0.7);
//   position: absolute;
//   transform: 
//     ${(props) =>
//     props.one === "0" ? "translateY(-0px)" : 
//     props.one === "1" ? "translateY(-12px)" : 
//     props.one === "2" ? "translateY(-24px)" : 
//     "translateY(-36px)"};
//   margin-left: -155px;
//   bottom: -135px;
//   z-index: 4;
// `;

// const Chip100 = styledCom.img.attrs({
//   visibility: "visible",
//   src: Svg100,
// })`
//   transform: scale(0.7);
//   position: absolute;
//   transform: 
//     ${(props) =>
//     props.one === "0" ? "translateY(-0px)" : 
//     props.one === "1" ? "translateY(-12px)" : 
//     props.one === "2" ? "translateY(-24px)" : 
//   "translateY(-36px)"};
//   margin-left: -240px;
//   bottom: -45px;
//   z-index: 2;
// `;

// const ChipsArea = styledCom(Grid).attrs({
//   container: true, spacing: 8,
// })`
//   position: absolute;
//   height:100px;
//   bottom: 20%;
//   display: inline-block;
//   justify-content: center;
//   align-items: center;
//   pointer-events: none;
// `;

// const PlaceChip10 = styledCom(Grid).attrs({
//   item: true,
// })`
//   width: 100px;
//   height: 200px;
// `;

// const PlaceChip20 = styledCom(Grid).attrs({
//   item: true,
// })`
//   width: 100px;
//   height: 200px;
// `;

// const PlaceChip50 = styledCom(Grid).attrs({
//   item: true,
// })`
//   width: 100px;
//   height: 200px;
// `;

// const PlaceChip100 = styledCom(Grid).attrs({
//   item: true,
// })`
//   width: 100px;
//   height: 200px;
// `;




// Styled Dealer Components
const DealerTitle = styledCom.h1`
font: 18px;
color: white;
`;

const DealerHand = styledCom.div`
display: flex;
justify-content: center;
position: absolute;
height: 140px;
width: 100%;
top: 10%;
`;

const DealerUl = styledCom.ul`
list-style: none;
`;

const DealerLi = styledCom.li`
display: inline-block;
margin: 0 0 0 -20px;
`;

// Styled Player Components

const PlayerHand = styledCom.div`
display: flex;
justify-content: center;
position: absolute;
height: 140px;
width: 100%;
bottom: 30%;
`;

const PlayerUl = styledCom.ul`
list-style: none;
`;

const PlayerLi = styledCom.li`
display: inline-block;
margin: 0 0 0 -20px;
`;

const Container = styledCom.div`
display:flex;
justify-content:center;
position:absolute;
height:100px;
width:100%;
height:100%;
}
`;
