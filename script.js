const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

const cards = document.querySelectorAll(".card");

let current = 0;

function showNextCard() {
  if (current < cards.length) {
    cards[current].style.display = "none";
    current++;
  }
}

like.addEventListener("click", showNextCard);
dislike.addEventListener("click", showNextCard);
