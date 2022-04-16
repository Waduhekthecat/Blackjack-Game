import styledCom from 'styled-components';
import bet10 from '../../imgs/bet10.png';
import bet20 from '../../imgs/bet20.png';
import bet50 from '../../imgs/bet50.png';
import bet100 from '../../imgs/bet100.png';
import bet500 from '../../imgs/bet500.png';
import bet1000 from '../../imgs/bet1000.png';
import clear from '../../imgs/clear.png';
import max from '../../imgs/max.png';

const Bet = ({gameState, GameState, handleClear, handleMax, handleClick}) => {
    if (gameState === GameState.bet)
        return(
        <><ClearBet onClick={handleClear}/>
            <Bet10 onClick={handleClick}/>
            <Bet20 onClick={handleClick}/>
            <Bet50 onClick={handleClick}/>
            <Bet100 onClick={handleClick}/>
            <Bet500 onClick={handleClick}/>
            <Bet1000 onClick={handleClick}/>
            <MaxBet onClick={handleMax}/></>
        )
};

export default Bet;

// STYLED COMPONENTS //

const Bet10 = styledCom.input.attrs({
  type:"image", src: bet10, alt:"10", value:10 
})`
    background: transparent;
    position: absolute;
    bottom: 5%;
    left: 20%;
    cursor: pointer;
    z-index: 200;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.128);
    }
    &:active {
        transform: scale(1);
    }
    @media (max-width: 1450px) {
        transform:scale(.75)
    }
    @media (max-width: 1200px) {
      left:18%;
      }
`;

const Bet20 = styledCom.input.attrs({
  type:"image", src: bet20, alt:"20", value:20
})`
    background: transparent;
    position: absolute;
    bottom: 5%;
    left: 30%;
    cursor: pointer;
    z-index: 200;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.128);
    }
    &:active {
        transform: scale(1);
    }
    @media (max-width: 1450px) {
        transform:scale(.75)
    }
    @media (max-width: 1200px) {
      left:28%;
      }
`;


const Bet50 = styledCom.input.attrs({
  type:"image", src: bet50, alt:"50", value:50
})`
    background: transparent;
    position: absolute;
    bottom: 5%;
    left: 40%;
    cursor: pointer;
    z-index: 200;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.128);
    }
    &:active {
        transform: scale(1);
    }
    @media (max-width: 1450px) {
        transform:scale(.75)
    }
    @media (max-width: 1200px) {
      left:38%;
      }
`;

const Bet100 = styledCom.input.attrs({
  type:"image", src: bet100, alt:"100", value:100
})`
    background: transparent;
    position: absolute;
    bottom: 5%;
    left: 50%;
    cursor: pointer;
    z-index: 200;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.128);
    }
    &:active {
        transform: scale(1);
    }
    @media (max-width: 1450px) {
        transform:scale(.75)
    }
    @media (max-width: 1200px) {
      left:48%;
      }
`;

const Bet500 = styledCom.input.attrs({
  type:"image", src: bet500, alt:"500", value:500
})`
    background: transparent;
    position: absolute;
    bottom: 5%;
    left: 60%;
    cursor: pointer;
    z-index: 200;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.128);
    }
    &:active {
        transform: scale(1);
    }
    @media (max-width: 1450px) {
        transform:scale(.75)
    }
    @media (max-width: 1200px) {
      left:58%;
      }
`;

const Bet1000 = styledCom.input.attrs({
  type:"image", src: bet1000, alt:"1000", value:1000
})`
    background: transparent;
    position: absolute;
    bottom: 5%;
    left: 70%;
    cursor: pointer;
    z-index: 200;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-family: "Play", sans-serif;
    -webkit-user-select: none;
    &:hover {
        transform: scale(1.128);
    }
    &:active {
        transform: scale(1);
    }
    @media (max-width: 1450px) {
        transform:scale(.75)
    }
    @media (max-width: 1200px) {
      left:68%;
      }
`;


const ClearBet = styledCom.input.attrs({
  type:"image", src: clear, alt:"0"
})`
background: transparent;
position: absolute;
bottom: 9%;
left: 5%;
cursor: pointer;
z-index: 200;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
font-family: "Play", sans-serif;
-webkit-user-select: none;
&:hover {
    transform: scale(1.128);
}
&:active {
    transform: scale(1);
}
@media (max-width: 1450px) {
    transform:scale(.75)
    &:hover {
      transform: scale(.9);
  }
  &:active {
      transform: scale(.8);
}
@media (max-width: 1200px) {
width:150px;
left:3%;
}
@media (max-height: 1000px) {
  bottom:10%;
 }
`;

const MaxBet = styledCom.input.attrs({
  type:"image", src: max, alt:"max" 
})`
background: transparent;
position: absolute;
bottom: 9%;
left: 82%;
cursor: pointer;
z-index: 200;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
font-family: "Play", sans-serif;
-webkit-user-select: none;
&:hover {
    transform: scale(1.128);
}
&:active {
    transform: scale(1);
}
@media (max-width: 1450px) {
  transform:scale(.75)
  &:hover {
    transform: scale(.9);
}
&:active {
    transform: scale(.8);
}
@media (max-width: 1200px) {
 width:150px;
 left:81%;
}
@media (max-height: 1200px) {
  bottom:10%;
 }
`;