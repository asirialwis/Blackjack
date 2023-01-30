// create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// create variable, sum, and set it to the sum of the two cards
let player = {
  name: "per",
  chips: 145,
};

let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-l");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; //1-13
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber == 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = secondCard + firstCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;
  // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "Wohoo! You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    /*(sum > 21)*/
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}

// math.rendom() =========== 0.000 -- 0.999
// Math.random()*6 ============= 0.000 -- 5.999
// Math.floor(Math.random()*6)
