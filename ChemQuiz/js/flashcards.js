let currentTopic = "drugDesign";
let currentIndex = 0;

const front = document.getElementById("card-front");
const back = document.getElementById("card-back");
const flashcard = document.querySelector(".flashcard");
const counter = document.getElementById("card-counter");
const topicSelect = document.getElementById("topicSelect");

function getCards() {
  return allFlashcards[currentTopic];
}

function loadCard() {
  const cards = getCards();

  // Safety check (professional habit 😉)
  if (!cards || cards.length === 0) {
    front.innerText = "No flashcards available.";
    back.innerText = "";
    counter.innerText = "";
    return;
  }

  front.innerText = cards[currentIndex].question;
  back.innerText = cards[currentIndex].answer;
  counter.innerText = `Card ${currentIndex + 1} of ${cards.length}`;
}

function flipCard() {
  flashcard.classList.toggle("flipped"); // ✅ matches CSS now
}

function nextCard() {
  const cards = getCards();
  currentIndex = (currentIndex + 1) % cards.length;

  flashcard.classList.remove("flipped"); // reset flip
  loadCard();
}

function prevCard() {
  const cards = getCards();
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;

  flashcard.classList.remove("flipped"); // reset flip
  loadCard();
}

topicSelect.addEventListener("change", function () {
  currentTopic = this.value;
  currentIndex = 0;

  flashcard.classList.remove("flipped"); // reset when topic changes
  loadCard();
});

// Initial Load
loadCard();
