const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const suits = ["c", "d", "h", "s"];
const clubs = ranks.map(r => r + suits[0])
const diamonds = ranks.map(r => r + suits[1])
const hearts = ranks.map(r => r + suits[2])
const spades = ranks.map(r => r + suits[3])
const Deck = [...hearts, ...spades, ...diamonds, ...clubs];


export default Deck; 