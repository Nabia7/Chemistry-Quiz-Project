
questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.innerHTML = "";
  nextBtn.disabled = true;

  progressEl.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-dark", "d-block", "mb-2");
    btn.textContent = option;

    btn.addEventListener("click", () => selectAnswer(index));

    optionsEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].answer;
  const explanationText = questions[currentQuestion].explanation;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correct) {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-success");
    }

    if (i === index && i !== correct) {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-danger");
    }
  });

  if (index === correct) {
    score++;
  }

  feedbackEl.innerHTML = `<div class="mt-3 p-3 border rounded bg-light">${explanationText}</div>`;

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  let wrong = questions.length - score;
  let percentage = ((score / questions.length) * 100).toFixed(1);

  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  progressEl.textContent = "";

  feedbackEl.innerHTML = `
    <div class="card p-4 mt-3 shadow-sm">
      <h4 class="mb-3">Score Summary</h4>
      <p><strong>Percentage:</strong> ${percentage}%</p>
      <p><strong>Correct Answers:</strong> ${score}</p>
      <p><strong>Wrong Answers:</strong> ${wrong}</p>
      <div class="mt-3">
        <button class="btn btn-primary me-2" onclick="location.reload()">Retake Quiz</button>
        <button class="btn btn-secondary me-2" onclick="window.location.href='index.html'">Back</button>
        <button class="btn btn-success" onclick="window.location.href='flashcards.html'">Flashcards</button>
      </div>
    </div>
  `;

  nextBtn.style.display = "none";
}

loadQuestion();
