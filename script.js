



function calculateResult1() {
  let score = 0;
  const totalQuestions = 5;

  // Объект с правильными ответами для каждого вопроса
  const answers = {
      q1: 'a', 
      q2: 'b', 
      q3: 'b',
      q4: 'b', 
      q5: 'c'  // Исправлено на 'c' для правильного ответа
  };

  // Используем цикл для обработки всех вопросов
  for (let i = 1; i <= totalQuestions; i++) {
      const userAnswer = document.querySelector(`#quizForm1 input[name="q${i}"]:checked`);
      
      // Если выбран правильный ответ, увеличиваем счет
      if (userAnswer && userAnswer.value === answers[`q${i}`]) {
          score++;
      }
  }

  // Рассчитываем процент
  const percentage = (score / totalQuestions) * 100;

  // Показываем результат
  const result = document.getElementById("result1"); // Используем уникальный идентификатор
  result.textContent = `Вы набрали ${percentage.toFixed(2)}% (${score} из ${totalQuestions}).`;
}

function checkAnswers() {
  let score = 0;

  // Получаем ответы
  const task1 = document.getElementById('task1').value.trim().toLowerCase();
  const task2 = document.getElementById('task2').value.trim().toLowerCase();
  const task3 = document.getElementById('task3').value.trim().toLowerCase();
  const task4 = document.getElementById('task4').value.trim().toLowerCase();
  const task5 = document.getElementById('task5').value.trim().toLowerCase();

  // Проверяем правильность ответов
  if (task1 === 'i always play football') score++;
  if (task2 === 'we are going to the park now') score++;
  if (task3 === 'she has never been to paris') score++;
  if (task4 === 'i usually eat lunch at 12') score++;
  if (task5 === 'he has been studying english for two years') score++;

  // Выводим результат
  const result = document.getElementById('result2'); // Используем уникальный идентификатор
  result.textContent = `Ваш результат: ${score} из 5`;
}