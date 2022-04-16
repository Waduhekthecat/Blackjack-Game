import React from "react"
import Card from "./Card.js";

import c2c from "../../imgs/cards/2_of_clubs.png";
import c3c from "../../imgs/cards/3_of_clubs.png";
import c4c from "../../imgs/cards/4_of_clubs.png";
import c5c from "../../imgs/cards/5_of_clubs.png";
import c6c from "../../imgs/cards/6_of_clubs.png";
import c7c from "../../imgs/cards/7_of_clubs.png";
import c8c from "../../imgs/cards/8_of_clubs.png";
import c9c from "../../imgs/cards/9_of_clubs.png";
import cTc from "../../imgs/cards/10_of_clubs.png";
import cJc from "../../imgs/cards/J_of_clubs.png";
import cQc from "../../imgs/cards/Q_of_clubs.png";
import cKc from "../../imgs/cards/K_of_clubs.png";
import cAc from "../../imgs/cards/A_of_clubs.png";

import c2d from "../../imgs/cards/2_of_diamonds.png";
import c3d from "../../imgs/cards/3_of_diamonds.png";
import c4d from "../../imgs/cards/4_of_diamonds.png";
import c5d from "../../imgs/cards/5_of_diamonds.png";
import c6d from "../../imgs/cards/6_of_diamonds.png";
import c7d from "../../imgs/cards/7_of_diamonds.png";
import c8d from "../../imgs/cards/8_of_diamonds.png";
import c9d from "../../imgs/cards/9_of_diamonds.png";
import cTd from "../../imgs/cards/10_of_diamonds.png";
import cJd from "../../imgs/cards/J_of_diamonds.png";
import cQd from "../../imgs/cards/Q_of_diamonds.png";
import cKd from "../../imgs/cards/K_of_diamonds.png";
import cAd from "../../imgs/cards/A_of_diamonds.png";

import c2h from "../../imgs/cards/2_of_hearts.png";
import c3h from "../../imgs/cards/3_of_hearts.png";
import c4h from "../../imgs/cards/4_of_hearts.png";
import c5h from "../../imgs/cards/5_of_hearts.png";
import c6h from "../../imgs/cards/6_of_hearts.png";
import c7h from "../../imgs/cards/7_of_hearts.png";
import c8h from "../../imgs/cards/8_of_hearts.png";
import c9h from "../../imgs/cards/9_of_hearts.png";
import cTh from "../../imgs/cards/10_of_hearts.png";
import cJh from "../../imgs/cards/J_of_hearts.png";
import cQh from "../../imgs/cards/Q_of_hearts.png";
import cKh from "../../imgs/cards/K_of_hearts.png";
import cAh from "../../imgs/cards/A_of_hearts.png";

import c2s from "../../imgs/cards/2_of_spades.png";
import c3s from "../../imgs/cards/3_of_spades.png";
import c4s from "../../imgs/cards/4_of_spades.png";
import c5s from "../../imgs/cards/5_of_spades.png";
import c6s from "../../imgs/cards/6_of_spades.png";
import c7s from "../../imgs/cards/7_of_spades.png";
import c8s from "../../imgs/cards/8_of_spades.png";
import c9s from "../../imgs/cards/9_of_spades.png";
import cTs from "../../imgs/cards/10_of_spades.png";
import cJs from "../../imgs/cards/J_of_spades.png";
import cQs from "../../imgs/cards/Q_of_spades.png";
import cKs from "../../imgs/cards/K_of_spades.png";
import cAs from "../../imgs/cards/A_of_spades.png";

const cards = {
  '2c': c2c,
  '3c': c3c,
  '4c': c4c,
  '5c': c5c,
  '6c': c6c,
  '7c': c7c,
  '8c': c8c,
  '9c': c9c,
  'Tc': cTc,
  'Jc': cJc,
  'Qc': cQc,
  'Kc': cKc,
  'Ac': cAc,

  '2d': c2d,
  '3d': c3d,
  '4d': c4d,
  '5d': c5d,
  '6d': c6d,
  '7d': c7d,
  '8d': c8d,
  '9d': c9d,
  'Td': cTd,
  'Jd': cJd,
  'Qd': cQd,
  'Kd': cKd,
  'Ad': cAd,

  '2h': c2h,
  '3h': c3h,
  '4h': c4h,
  '5h': c5h,
  '6h': c6h,
  '7h': c7h,
  '8h': c8h,
  '9h': c9h,
  'Th': cTh,
  'Jh': cJh,
  'Qh': cQh,
  'Kh': cKh,
  'Ah': cAh,

  '2s': c2s,
  '3s': c3s,
  '4s': c4s,
  '5s': c5s,
  '6s': c6s,
  '7s': c7s,
  '8s': c8s,
  '9s': c9s,
  'Ts': cTs,
  'Js': cJs,
  'Qs': cQs,
  'Ks': cKs,
  'As': cAs,
};

function RenderCard(props) {
  return (
    <Card {...props} card={cards[props.card]} />
  )
};

export default RenderCard; 