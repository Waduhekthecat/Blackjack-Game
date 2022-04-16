import styledCom from 'styled-components';
import b from "../../imgs/Card_back.png";

function Card(props) {
  const {card, back, height, style = {}} = props;
  style.height = height;
  if (back) {
    return (
      <CardBack style={style}/>
    )
  } else {
    return (
      <CardFront src={card} style={style} />
    )
  }
};
export default Card;


const CardBack = styledCom.img.attrs({
  src:b, alt:"card back"
})``;

const CardFront = styledCom.img.attrs({
  alt:"card front"
})``;