const cards = document.querySelectorAll('.memory-card');

var cardFliped = false;
var firstCard;
var secondCard;

shuffle();

function shuffle() {
  cards.forEach((card) => {
    let randomNumber = Math.floor(Math.random() * 12);
    card.style.order = randomNumber;
  });
}

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});

function flipCard() {
  if (!cardFliped) {
    this.classList.add('flip');
    firstCard = this;
    cardFliped = true;
  } else if (cardFliped) {
    this.classList.add('flip');
    secondCard = this;
    checkMatch();
    cardFliped = false;
  }
}

function checkMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    success();
  } else {
    flipBack();
  }
}

function flipBack() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}

function success() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}
