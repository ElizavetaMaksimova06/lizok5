// Скрипт для кнопки "Заниматься сейчас"
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
  
    if (startBtn) {
      startBtn.addEventListener("click", function (event) {
        alert("Добро пожаловать на курс казахского языка! Начнём обучение 📚");
      });
    }
  });

  function checkAnswers() {
    let score = 0;

    const task1 = document.getElementById('task1').value.trim().toLowerCase();
    const task2 = document.getElementById('task2').value.trim().toLowerCase();
    const task3 = document.getElementById('task3').value.trim().toLowerCase();
    const task4 = document.getElementById('task4').value.trim().toLowerCase();
    const task5 = document.getElementById('task5').value.trim().toLowerCase();

    if (task1 === 'ә дауысты бір әріп') score++;
    if (task2 === 'сәлеметсіз бе үшін амандасу') score++;
    if (task3 === 'бұл менің кітабым') score++;
    if (task4 === 'сіз қайдансыз') score++;
    if (task5 === 'мен мектепке барамын') score++;

    const result = document.getElementById('result2');
    result.textContent = `Нәтижеңіз / Ваш результат: ${score} / 5`;
  }


  const words = [
    { kz: "Су", ru: "Вода" },
    { kz: "Тамақ", ru: "Еда" },
    { kz: "Үй", ru: "Дом" },
    { kz: "Сабақ", ru: "Урок" },
    { kz: "Кітап", ru: "Книга" },
    { kz: "Жұмыс", ru: "Работа" }
  ];
  
  let cards = [];
  let flippedCards = [];
  let matchedCount = 0;
  
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function createCards() {
    const gameBoard = document.getElementById("gameBoard");
    cards = [];
  
    words.forEach(pair => {
      cards.push({ text: pair.kz, pairId: pair.kz });
      cards.push({ text: pair.ru, pairId: pair.kz });
    });
  
    shuffle(cards);
  
    cards.forEach((card, index) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.dataset.id = card.pairId;
      div.dataset.index = index;
      div.innerText = "";
      div.addEventListener("click", () => flipCard(div, card.text));
      gameBoard.appendChild(div);
    });
  }
  
  function flipCard(cardEl, text) {
    if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;
    cardEl.innerText = text;
    cardEl.classList.add("flipped");
  
    flippedCards.push({ el: cardEl, text: text, id: cardEl.dataset.id });
  
    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
  
  function checkMatch() {
    const [first, second] = flippedCards;
    if (first.id === second.id && first.el !== second.el) {
      first.el.classList.add("matched");
      second.el.classList.add("matched");
      matchedCount++;
      if (matchedCount === words.length) {
        document.getElementById("message").innerText = "🎉 Поздравляем! Все пары найдены!";
      }
    } else {
      setTimeout(() => {
        first.el.classList.remove("flipped");
        second.el.classList.remove("flipped");
        first.el.innerText = "";
        second.el.innerText = "";
      }, 1000);
    }
    flippedCards = [];
  }
  
  createCards();
  