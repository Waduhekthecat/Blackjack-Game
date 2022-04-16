import styledCom from 'styled-components';
import { Grid } from "@mui/material/";
import stand from "../../imgs/stand.png";
import hit from "../../imgs/hit.png";
import double from "../../imgs/double.png";

const ActionBtns = ({game, handleStand, handleHit}) => {
    if (game === "inProgress") {
      return (
        <>
          <Action>
            <Stand 
            onClick={handleStand}
            />
          </Action>
          <Action>
            <Hit 
            onClick={handleHit}
            />
          </Action>
        </>
      );
    }
};

  export default ActionBtns;

  // STYLED COMPONENTS //

const Action = styledCom(Grid).attrs({
    item: true,
  })`
    width: 150px;
    text-align: center;
  `;

  const Hit = styledCom.input.attrs({
    type:"image", src: hit
  })`
    position: relative;
    font-size: 58px;
    background-color: rgba(0, 0, 0, 0);
    width: 150px;
    height: 120px;
    outline: none;
    border: none;
    cursor: pointer;
      &:hover {
        transform: scale(.9);
      }
      &:active {
        transform: scale(.85);
      }
      @media (max-width: 1450px) {
        transform:scale(.85)
    }
      `;

  const Stand = styledCom.input.attrs({
    type:"image", src: stand
  })`
    position: relative;
    font-size: 58px;
    background-color: rgba(0, 0, 0, 0);
    width: 150px;
    height: 120px;
    outline: none;
    border: none;
    cursor: pointer;
      &:hover {
        transform: scale(.9);
      }
      &:active {
        transform: scale(.85);
      }
      @media (max-width: 1450px) {
        transform:scale(.85)
    }`;

  // const Double = styledCom.input.attrs({
  //   type:"image", src: double
  // })`
  //   position: relative;
  //   font-size: 58px;
  //   background-color: rgba(0, 0, 0, 0);
  //   width: 150px;
  //   height: 120px;
  //   outline: none;
  //   border: none;
  //   cursor: pointer;
  //     &:hover {
  //       transform: scale(1.028);
  //     }
  //     &:active {
  //       transform: scale(1);
  //     }`; 