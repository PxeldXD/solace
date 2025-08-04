// Check and initialize localStorage
function initializeLocalStorage() {
  if (!localStorage.getItem("moodLogs")) {
    localStorage.setItem("moodLogs", JSON.stringify([]));
  }

  if (!localStorage.getItem("taskList")) {
    localStorage.setItem("taskList", JSON.stringify([]));
  }

  if (!localStorage.getItem("journalEntries")) {
    localStorage.setItem("journalEntries", JSON.stringify([]));
  }
}

// Load all data into variables (optional helper)
function loadAllUserData() {
  const moodLogs = JSON.parse(localStorage.getItem("moodLogs"));
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  const journalEntries = JSON.parse(localStorage.getItem("journalEntries"));

  return { moodLogs, taskList, journalEntries };
}

// Save functions
function saveMoodLog(date, mood) {
  const moodLogs = JSON.parse(localStorage.getItem("moodLogs"));
  moodLogs.push({ date, mood });
  localStorage.setItem("moodLogs", JSON.stringify(moodLogs));
}

function saveTask(task) {
  const taskList = JSON.parse(localStorage.getItem("taskList"));
  taskList.push(task);
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function saveJournalEntry(date, text) {
  const journalEntries = JSON.parse(localStorage.getItem("journalEntries"));
  journalEntries.push({ date, text });
  localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
}
