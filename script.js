// Fake student database
// Each object stores roll number, password, name, and marks for 3 subjects
const students = [
  { rollNumber: "101", password: "1212", name: "Aarav Sharma", math: 85, science: 78, english: 82 },
  { rollNumber: "102", password: "1212", name: "Priya Singh", math: 67, science: 72, english: 61 },
  { rollNumber: "103", password: "1212", name: "Rohan Verma", math: 45, science: 39, english: 41 },
  { rollNumber: "104", password: "1212", name: "Sneha Patel", math: 28, science: 35, english: 30 },
  { rollNumber: "105", password: "1212", name: "Kabir Mehta", math: 91, science: 88, english: 84 },
  { rollNumber: "106", password: "1212", name: "Ananya Gupta", math: 76, science: 81, english: 74 },
  { rollNumber: "107", password: "1212", name: "Vihaan Kapoor", math: 59, science: 64, english: 57 },
  { rollNumber: "108", password: "1212", name: "Ishita Rao", math: 88, science: 92, english: 86 },
  { rollNumber: "109", password: "1212", name: "Aditya Joshi", math: 34, science: 38, english: 36 },
  { rollNumber: "110", password: "1212", name: "Meera Nair", math: 95, science: 89, english: 93 },
  { rollNumber: "111", password: "1212", name: "Arjun Malhotra", math: 62, science: 58, english: 65 },
  { rollNumber: "112", password: "1212", name: "Kavya Iyer", math: 41, science: 47, english: 44 },
  { rollNumber: "113", password: "1212", name: "Dev Khanna", math: 25, science: 31, english: 40 },
  { rollNumber: "114", password: "1212", name: "Sara Ali", math: 79, science: 83, english: 77 },
  { rollNumber: "115", password: "1212", name: "Yash Bansal", math: 68, science: 71, english: 69 },
  { rollNumber: "116", password: "1212", name: "Naina Desai", math: 52, science: 49, english: 55 },
  { rollNumber: "117", password: "1212", name: "Reyansh Sethi", math: 90, science: 94, english: 88 },
  { rollNumber: "118", password: "1212", name: "Diya Arora", math: 37, science: 42, english: 39 },
  { rollNumber: "119", password: "1212", name: "Harsh Vardhan", math: 82, science: 75, english: 80 },
  { rollNumber: "120", password: "1212", name: "Pooja Reddy", math: 30, science: 29, english: 34 },
  { rollNumber: "121", password: "1212", name: "Rahul Tiwari", math: 56, science: 62, english: 59 },
  { rollNumber: "122", password: "1212", name: "Tanvi Chawla", math: 87, science: 90, english: 85 },
  { rollNumber: "123", password: "1212", name: "Karan Oberoi", math: 43, science: 35, english: 46 },
  { rollNumber: "124", password: "1212", name: "Ritika Jain", math: 73, science: 78, english: 70 },
  { rollNumber: "125", password: "1212", name: "Mohit Saxena", math: 64, science: 67, english: 60 }
];

// Selecting elements from the page
const rollNumberInput = document.getElementById("rollNumber");
const passwordInput = document.getElementById("password");
const checkResultBtn = document.getElementById("checkResultBtn");
const resultBox = document.getElementById("resultBox");

// This function returns the grade based on percentage
function getGrade(percentage) {
  if (percentage > 80) {
    return "A";
  } else if (percentage > 60) {
    return "B";
  } else if (percentage > 40) {
    return "C";
  } else {
    return "D";
  }
}

function renderMessage(message, detailText = "Please go back and try again.") {
  if (!resultBox) {
    return;
  }

  resultBox.innerHTML = `
    <div class="glass-card result-card">
      <div class="card-glow"></div>
      <div class="message-card">
        <p class="message-title error">${message}</p>
        <p class="message-detail">${detailText}</p>
        <a class="btn-back inline-back-link" href="index.html">Back to Search</a>
      </div>
    </div>
  `;

  setupCardGlow();
  showAnimation();
}

function renderResult(student) {
  if (!resultBox) {
    return;
  }

  // Calculate total marks
  const total = student.math + student.science + student.english;

  // Calculate percentage
  const percentage = (total / 3).toFixed(2);

  // Check pass or fail condition
  const isPassed =
    student.math >= 33 &&
    student.science >= 33 &&
    student.english >= 33;

  const statusText = isPassed ? "PASS" : "FAIL";

  // Get grade from percentage
  const grade = getGrade(Number(percentage));

  const subjects = [
    { name: "Mathematics", marks: student.math },
    { name: "Science", marks: student.science },
    { name: "English", marks: student.english }
  ];

  const subjectRows = subjects.map((subject) => `
    <tr>
      <td>${subject.name}</td>
      <td>100</td>
      <td>${subject.marks}</td>
      <td><span class="badge-small ${subject.marks >= 33 ? "pass" : "fail"}">${subject.marks >= 33 ? "Pass" : "Fail"}</span></td>
    </tr>
  `).join("");

  resultBox.innerHTML = `
    <div class="glass-card result-card">
      <div class="card-glow"></div>
      <div class="result-header">
        <div class="student-info">
          <span class="meta-label">Student Record</span>
          <h2>${student.name}</h2>
          <p class="roll-display">Roll: <span>${student.rollNumber}</span></p>
        </div>

        <div class="status-container">
          <div class="status-badge ${isPassed ? "pass" : "fail"}">${statusText}</div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-item highlight">
          <span class="stat-label">Overall Performance</span>
          <span class="stat-value">${percentage}%</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${percentage}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <span class="stat-label">Academic Grade</span>
          <span class="stat-value">${grade}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Cumulative Score</span>
          <span class="stat-value">${total} <small>/ 300</small></span>
        </div>
      </div>

      <div class="table-container">
        <table class="marks-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Max Marks</th>
              <th>Obtained</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${subjectRows}</tbody>
        </table>
      </div>

      <div class="result-footer">
        <button class="btn-secondary" type="button" onclick="window.print()">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print Marksheet
        </button>
      </div>
    </div>
  `;

  setupCardGlow();
  showAnimation();
}

function findStudent(rollNumber) {
  return students.find((item) => item.rollNumber === rollNumber);
}

function isValidPassword(student, password) {
  return student.password === password;
}

// Redirect from the search page to the dedicated result page
function checkResult() {
  const enteredRollNumber = rollNumberInput.value.trim();
  const enteredPassword = passwordInput.value.trim();
  const buttonLabel = checkResultBtn.querySelector("span");

  if (enteredRollNumber === "") {
    alert("Please enter a roll number.");
    rollNumberInput.focus();
    return;
  }

  if (enteredPassword === "") {
    alert("Please enter your password.");
    passwordInput.focus();
    return;
  }

  const student = findStudent(enteredRollNumber);

  if (!student) {
    alert("Student not found. Please check the roll number.");
    rollNumberInput.focus();
    return;
  }

  if (!isValidPassword(student, enteredPassword)) {
    alert("Incorrect password. Default password is 1212.");
    passwordInput.focus();
    return;
  }

  if (buttonLabel) {
    buttonLabel.textContent = "Authenticating...";
  }

  checkResultBtn.disabled = true;

  setTimeout(() => {
    window.location.href = `result.html?rollNumber=${encodeURIComponent(enteredRollNumber)}&password=${encodeURIComponent(enteredPassword)}`;
  }, 800);
}

// Adds the result animation every time result changes
function showAnimation() {
  if (!resultBox) {
    return;
  }

  resultBox.classList.remove("show-result");

  // Small reflow so animation can replay
  void resultBox.offsetWidth;

  resultBox.classList.add("show-result");
}

function setupCardGlow() {
  const cards = document.querySelectorAll(".glass-card");

  cards.forEach((card) => {
    if (card.dataset.glowReady === "true") {
      return;
    }

    card.dataset.glowReady = "true";
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    });
  });
}

function loadResultPage() {
  const params = new URLSearchParams(window.location.search);
  const enteredRollNumber = params.get("rollNumber")?.trim() || "";
  const enteredPassword = params.get("password")?.trim() || "";

  if (enteredRollNumber === "") {
    renderMessage("No roll number provided.", "Open the search page and enter a valid roll number.");
    return;
  }

  const student = findStudent(enteredRollNumber);

  if (!student) {
    renderMessage("Student Not Found", `No academic record exists for roll number ${enteredRollNumber}.`);
    return;
  }

  if (enteredPassword === "") {
    renderMessage("Password Required", "Open the search page and enter the default password 1212.");
    return;
  }

  if (!isValidPassword(student, enteredPassword)) {
    renderMessage("Incorrect Password", "The default password for all students is 1212.");
    return;
  }

  renderResult(student);
}

if (checkResultBtn && rollNumberInput && passwordInput) {
  checkResultBtn.addEventListener("click", checkResult);

  // Pressing Enter key also checks result
  [rollNumberInput, passwordInput].forEach((input) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkResult();
      }
    });
  });
}

setupCardGlow();

if (resultBox) {
  loadResultPage();
}
