// Скрипт для кнопки "Заниматься сейчас"
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
  
    if (startBtn) {
      startBtn.addEventListener("click", function (event) {
        alert("Добро пожаловать на курс французского языка! Начнём обучение 📚");
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

    if (task1 === 'le chat noir') score++;
    if (task2 === 'une pomme rouge') score++;
    if (task3 === 'des élèves intelligents') score++;
    if (task4 === 'du pain frais') score++;
    if (task5 === 'les enfants jouent') score++;

    const result = document.getElementById('result2');
    result.textContent = `Ваш результат: ${score} / 5`;
}









const questions5 = [
  { word: "Bonjour", options: ["Спасибо", "До свидания", "Здравствуйте", "Спокойной ночи"], correct: "Здравствуйте" },
  { word: "Merci", options: ["Пожалуйста", "Спасибо", "Как дела?", "Доброе утро"], correct: "Спасибо" },
  { word: "Bonne nuit", options: ["Добрый вечер", "Добрый день", "Спокойной ночи", "До завтра"], correct: "Спокойной ночи" },
  { word: "S'il vous plaît", options: ["Прошу прощения", "Пожалуйста", "Спасибо", "Привет"], correct: "Пожалуйста" },
  { word: "Au revoir", options: ["Привет", "Как дела?", "До свидания", "Пока"], correct: "До свидания" }
];

let current5 = 0;
let score5 = 0;

function loadQuestion5() {
  const q = questions5[current5];
  document.getElementById("questionText5").textContent = `Что означает слово "${q.word}"?`;

  const container = document.getElementById("optionsContainer5");
  container.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option5");
    btn.textContent = option;
    btn.onclick = () => checkAnswer5(btn, q.correct);
    container.appendChild(btn);
  });

  document.getElementById("resultText5").textContent = "";
  document.getElementById("nextBtn5").style.display = "none";
}

function checkAnswer5(button, correctAnswer) {
  const allButtons = document.querySelectorAll(".option5");
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct5");
    } else if (btn === button) {
      btn.classList.add("incorrect5");
    }
  });

  if (button.textContent === correctAnswer) {
    score5++;
  }

  document.getElementById("resultText5").textContent = `Правильных ответов: ${score5} / ${questions5.length}`;
  document.getElementById("nextBtn5").style.display = "block";
}

function nextQuestion5() {
  current5++;
  if (current5 < questions5.length) {
    loadQuestion5();
  } else {
    document.getElementById("questionText5").textContent = "🎉 Игра завершена!";
    document.getElementById("optionsContainer5").innerHTML = "";
    document.getElementById("nextBtn5").style.display = "none";
    document.getElementById("resultText5").textContent = "";

    const finalBlock = document.getElementById("finalResult5");
    finalBlock.style.display = "block";
    finalBlock.innerHTML = `
      <p><strong>Ваш итог:</strong></p>
      <p class="score-line5">✅ ${score5} из ${questions5.length} правильных ответов</p>
      <p class="motivation5">${score5 >= 4 ? "Отлично! Продолжайте в том же духе!" : "Неплохо! Попробуйте ещё раз для лучшего результата."}</p>
    `;
  }
}

loadQuestion5();


const pairs = [
  ["Bonjour", "Здравствуйте"],
  ["Je voudrais un café", "Я бы хотел кофе"],
  ["Merci", "Спасибо"],
  ["Au revoir", "До свидания"],
  ["Où est le métro ?", "Где метро?"],
  ["Il est trois heures", "Сейчас три часа"]
];

let cards = [];
let flippedCards = [];
let matchedCount = 0;

const gameBoard = document.getElementById("gameBoard");
const message = document.getElementById("message");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCards() {
  const flatPairs = pairs.flatMap(([fr, ru]) => [
    { text: fr, pairId: fr },
    { text: ru, pairId: fr }
  ]);
  cards = shuffle(flatPairs);
  gameBoard.innerHTML = "";

  cards.forEach((cardObj, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.pairId = cardObj.pairId;
    card.dataset.index = index;
    card.textContent = ""; // Скрыто
    card.addEventListener("click", () => flipCard(card, cardObj.text));
    gameBoard.appendChild(card);
  });
}

function flipCard(card, text) {
  if (card.classList.contains("flipped") || card.classList.contains("matched") || flippedCards.length === 2) {
    return;
  }

  card.textContent = text;
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    if (card1.dataset.pairId === card2.dataset.pairId && card1 !== card2) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCount += 1;
      flippedCards = [];

      if (matchedCount === pairs.length) {
        message.textContent = "🎉 Bravo ! Toutes les paires sont trouvées !";
      }
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.textContent = "";
        card2.textContent = "";
        flippedCards = [];
      }, 1000);
    }
  }
}

createCards();
