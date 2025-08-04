// Wait for DOM to load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  initializeLocalStorage();
  loadMoodRange();
  loadJournalEntries();
  loadTaskList();
  setupEventListeners();
});

// Setup event listeners for buttons
function setupEventListeners() {
  document.querySelector("#quiz button").addEventListener("click", startQuiz);
  document.querySelector("#emotion-log button").addEventListener("click", logMood);
  document.querySelector("#journal button").addEventListener("click", saveJournal);
  document.querySelector("#calendar button").addEventListener("click", addTask);
  document.querySelector("#insights button").addEventListener("click", predictBurnout);
}

// Dummy startQuiz function (to expand later)
function startQuiz() {
  alert("Quiz feature coming soon!");
}

// Load mood range slider default to middle
function loadMoodRange() {
  const moodRange = document.getElementById("moodRange");
  moodRange.value = 3; // neutral mood by default
}

// Log mood to localStorage
function logMood() {
  const moodRange = document.getElementById("moodRange");
  const moodValue = moodRange.value;
  const today = new Date().toISOString().split("T")[0];

  saveMoodLog(today, moodValue);
  alert(`Mood logged: ${moodValue} on ${today}`);
}

// Load and display journal entries (basic console log for now)
function loadJournalEntries() {
  const { journalEntries } = loadAllUserData();
  console.log("Journal Entries:", journalEntries);
}

// Save journal entry
function saveJournal() {
  const textArea = document.getElementById("journalEntry");
  const text = textArea.value.trim();
  if (text === "") {
    alert("Please write something before saving.");
    return;
  }
  const today = new Date().toISOString().split("T")[0];
  saveJournalEntry(today, text);
  alert("Journal entry saved!");
  textArea.value = "";
}

// Load task list (currently just logs it)
function loadTaskList() {
  const { taskList } = loadAllUserData();
  console.log("Tasks:", taskList);
}

// Add a dummy task for now (expand UI later)
function addTask() {
  const title = prompt("Enter task title:");
  if (!title) return alert("Task title is required.");
  const dueDate = prompt("Enter due date (YYYY-MM-DD):");
  if (!dueDate) return alert("Due date is required.");
  const intensity = prompt("Enter intensity (1-5):");
  const importance = prompt("Enter importance (1-5):");

  const task = {
    title,
    dueDate,
    intensity: Number(intensity) || 3,
    importance: Number(importance) || 3,
  };

  saveTask(task);
  alert("Task saved!");
}

// Dummy burnout prediction (to expand later)
function predictBurnout() {
  alert("Burnout prediction feature coming soon!");
}
