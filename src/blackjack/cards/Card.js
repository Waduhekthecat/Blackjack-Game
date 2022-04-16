import styledCom from 'styled-components';
import b from "../../imgs/Card_back.png";

function Card(props) {
  const {card, back, height, style = {}} = props;
  style.height = height;
  if (back) {
    return (
      <CardBack src={b} style={style}/>
    )
  } else {
    return (
      <CardFront src={card} style={style} />
    )
  }
};
export default Card;

// STYLED COMPONENTS //

const CardBack = styledCom.img.attrs({
  alt:"card back"
})`
height:200px
@media (max-width: 1450px) {
  transform:scale(.85)
}
@media (max-height: 1000px) {
  transform:scale(.85)
}
@media (max-height: 800px) {
  transform:scale(.65)
}
`;

const CardFront = styledCom.img.attrs({
  alt:"card front"
})`
height:200px
@media (max-width: 1450px) {
  transform:scale(.85)
}
@media (max-height: 1000px) {
  transform:scale(.85)
}
@media (max-height: 800px) {
  transform:scale(.65)
}
`;