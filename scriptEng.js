// Скрипт для кнопки "Заниматься сейчас"
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
  
    if (startBtn) {
      startBtn.addEventListener("click", function (event) {
        alert("Добро пожаловать на курс английского языка! Начнём обучение 📚");
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

