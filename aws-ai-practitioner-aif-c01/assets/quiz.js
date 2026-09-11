// Shared quiz widget for the AWS AIF-C01 teaching workspace.
// Usage: wrap a question in <div class="quiz">, add <label><input type="radio"
// name="qN" data-correct="true|false"> texto</label> options, a
// <button class="quiz-submit">Comprobar</button> and a <div class="feedback"></div>.
(function () {
  function initQuiz(quiz) {
    var button = quiz.querySelector(".quiz-submit");
    var feedback = quiz.querySelector(".feedback");
    if (!button || !feedback) return;

    button.addEventListener("click", function () {
      var checked = quiz.querySelector("input[type=radio]:checked");
      feedback.style.display = "block";
      if (!checked) {
        feedback.className = "feedback incorrect";
        feedback.textContent = "Elegí una opción antes de comprobar.";
        return;
      }
      var isCorrect = checked.dataset.correct === "true";
      feedback.className = "feedback " + (isCorrect ? "correct" : "incorrect");
      feedback.textContent = isCorrect
        ? (quiz.dataset.correctMsg || "Correcto.")
        : (quiz.dataset.incorrectMsg || "No es esa. Volvé a leer la sección de arriba e intentá de nuevo.");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  });
})();
