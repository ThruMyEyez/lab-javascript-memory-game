const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards),
  //*Variables and Methods for togglingState of selected cards.
  cache = [],
  clear = () => {
    // no need for a forEach loop here.
    cache[0].classList.remove("turned");
    cache[1].classList.remove("turned");
    cache.splice(0, 2);
  };
window.addEventListener("load", (event) => {
  //* Shuffle the cards when the Webpage loads:
  memoryGame.shuffleCards();
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"><span>?<span></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      //*Turn the clicked card=>
      card.classList.toggle("turned");
      cache.push(card);
      //*Push clicked card into memoryGame.pickedCards Arraay.
      //console.log(card.getAttribute("data-card-name"));
      memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
      //* Check if .pickedCards Arr is length 2, if so start .checkIfPair()  method with the cards from arr as arguments.
      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(...memoryGame.pickedCards)) {
          console.log("pair!");
          cache.splice(0, 2);
        } else {
          setTimeout(clear, 750);
        }
        document.querySelector("#pairs-clicked").innerText =
          memoryGame.pairsClicked;
        document.querySelector("#pairs-guessed").innerText =
          memoryGame.pairsGuessed;
        if (memoryGame.checkIfFinished()) {
          alert("You win!");
        }
      }
    });
  });
});
