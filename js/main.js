document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".sidebar-item");
  const main = document.getElementById("page-content");

  const pages = {
    home: "<h1>Welcome to Solace</h1><p>Select a section from the left sidebar.</p>",
    calendar: "<h1>Calendar</h1><p>Plan your schedule here.</p>",
    tasks: "<h1>Tasks</h1><p>Your prioritized tasks will appear here.</p>",
    journal: "<h1>Journal</h1><p>Write reflections and mood logs.</p>",
    stats: "<h1>Stats</h1><p>Track your workload and mood trends.</p>",
  };

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const page = item.getAttribute("data-page");
      main.innerHTML = pages[page] || "<h1>Page Not Found</h1>";
    });
  });
});
