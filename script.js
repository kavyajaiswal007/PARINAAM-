// Fake student database
// Each object stores roll number, name, and marks for 3 subjects
const students = [
  { rollNumber: "101", name: "Aarav Sharma", math: 85, science: 78, english: 82 },
  { rollNumber: "102", name: "Priya Singh", math: 67, science: 72, english: 61 },
  { rollNumber: "103", name: "Rohan Verma", math: 45, science: 39, english: 41 },
  { rollNumber: "104", name: "Sneha Patel", math: 28, science: 35, english: 30 },
  { rollNumber: "105", name: "Kabir Mehta", math: 91, science: 88, english: 84 },
  { rollNumber: "106", name: "Ananya Gupta", math: 76, science: 81, english: 74 },
  { rollNumber: "107", name: "Vihaan Kapoor", math: 59, science: 64, english: 57 },
  { rollNumber: "108", name: "Ishita Rao", math: 88, science: 92, english: 86 },
  { rollNumber: "109", name: "Aditya Joshi", math: 34, science: 38, english: 36 },
  { rollNumber: "110", name: "Meera Nair", math: 95, science: 89, english: 93 },
  { rollNumber: "111", name: "Arjun Malhotra", math: 62, science: 58, english: 65 },
  { rollNumber: "112", name: "Kavya Iyer", math: 41, science: 47, english: 44 },
  { rollNumber: "113", name: "Dev Khanna", math: 25, science: 31, english: 40 },
  { rollNumber: "114", name: "Sara Ali", math: 79, science: 83, english: 77 },
  { rollNumber: "115", name: "Yash Bansal", math: 68, science: 71, english: 69 },
  { rollNumber: "116", name: "Naina Desai", math: 52, science: 49, english: 55 },
  { rollNumber: "117", name: "Reyansh Sethi", math: 90, science: 94, english: 88 },
  { rollNumber: "118", name: "Diya Arora", math: 37, science: 42, english: 39 },
  { rollNumber: "119", name: "Harsh Vardhan", math: 82, science: 75, english: 80 },
  { rollNumber: "120", name: "Pooja Reddy", math: 30, science: 29, english: 34 },
  { rollNumber: "121", name: "Rahul Tiwari", math: 56, science: 62, english: 59 },
  { rollNumber: "122", name: "Tanvi Chawla", math: 87, science: 90, english: 85 },
  { rollNumber: "123", name: "Karan Oberoi", math: 43, science: 35, english: 46 },
  { rollNumber: "124", name: "Ritika Jain", math: 73, science: 78, english: 70 },
  { rollNumber: "125", name: "Mohit Saxena", math: 64, science: 67, english: 60 }
];

// Selecting elements from the page
const rollNumberInput = document.getElementById("rollNumber");
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
    <div class="message-card">
      <p class="not-found">${message}</p>
      <p class="message-detail">${detailText}</p>
      <a class="back-link inline-back-link" href="index.html">Back to Search</a>
    </div>
  `;

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
  const statusClass = isPassed ? "status-pass" : "status-fail";
  const statusTheme = isPassed ? "" : "fail-theme";

  // Get grade from percentage
  const grade = getGrade(Number(percentage));

  // Show result details in an editorial-style report layout
  resultBox.innerHTML = `
    <div class="report">
      <div class="report-hero">
        <div class="student-meta">
          <h2>${student.name}</h2>
          <div class="meta-line">
            <span>Roll No. ${student.rollNumber}</span>
            <span>Parinaam Academic Record</span>
          </div>
        </div>

        <div class="hero-score">
          <span class="hero-score-value">${percentage}%</span>
          <span class="hero-score-label">Overall Percentage</span>
        </div>
      </div>

      <div class="summary-grid">
        <div class="status-card ${statusTheme}">
          <p class="status-label">Final Standing</p>
          <h3 class="status-value ${statusClass}">${statusText}</h3>
          <p class="status-note">Academic evaluation complete</p>
          <div class="status-shape"></div>
        </div>

        <div class="score-ring-card">
          <div class="score-ring" style="--percentage: ${percentage};">
            <div class="score-content">
              <strong>${percentage}%</strong>
              <span>Aggregate</span>
            </div>
          </div>
        </div>

        <div class="stats-card">
          <div class="stat-box">
            <span class="stat-label">Total Marks</span>
            <span class="stat-value">${total} / 300</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Grade</span>
            <span class="stat-value">${grade}</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Math</span>
            <span class="stat-value">${student.math}</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Science</span>
            <span class="stat-value">${student.science}</span>
          </div>
        </div>
      </div>

      <div class="marks-table">
        <div class="table-header">
          <h3>Academic Breakdown</h3>
          <span class="table-label">Full Result Sheet</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="subject-name">Mathematics</td>
              <td class="subject-score">${student.math}</td>
              <td class="${student.math >= 33 ? "status-pass" : "status-fail"}">${student.math >= 33 ? "Pass" : "Fail"}</td>
            </tr>
            <tr>
              <td class="subject-name">Science</td>
              <td class="subject-score">${student.science}</td>
              <td class="${student.science >= 33 ? "status-pass" : "status-fail"}">${student.science >= 33 ? "Pass" : "Fail"}</td>
            </tr>
            <tr>
              <td class="subject-name">English</td>
              <td class="subject-score">${student.english}</td>
              <td class="${student.english >= 33 ? "status-pass" : "status-fail"}">${student.english >= 33 ? "Pass" : "Fail"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <a class="back-link inline-back-link" href="index.html">Back to Search</a>
  `;

  showAnimation();
}

function findStudent(rollNumber) {
  return students.find((item) => item.rollNumber === rollNumber);
}

// Redirect from the search page to the dedicated result page
function checkResult() {
  const enteredRollNumber = rollNumberInput.value.trim();

  if (enteredRollNumber === "") {
    alert("Please enter a roll number.");
    rollNumberInput.focus();
    return;
  }

  window.location.href = `result.html?rollNumber=${encodeURIComponent(enteredRollNumber)}`;
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

function loadResultPage() {
  const params = new URLSearchParams(window.location.search);
  const enteredRollNumber = params.get("rollNumber")?.trim() || "";

  if (enteredRollNumber === "") {
    renderMessage("No roll number provided.", "Open the search page and enter a valid roll number.");
    return;
  }

  const student = findStudent(enteredRollNumber);

  if (!student) {
    renderMessage("Student Not Found", `No academic record exists for roll number ${enteredRollNumber}.`);
    return;
  }

  renderResult(student);
}

if (checkResultBtn && rollNumberInput) {
  checkResultBtn.addEventListener("click", checkResult);

  // Pressing Enter key also checks result
  rollNumberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkResult();
    }
  });
}

if (resultBox) {
  loadResultPage();
}
