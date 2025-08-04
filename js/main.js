document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar.left .sidebar-item");
  const mainContent = document.getElementById("page-content");

  const pages = {
    home: "<h1>Welcome to Solace</h1><p>Select a page from the sidebar to get started.</p>",
    calendar: "<h1>Calendar</h1><p>This will show your upcoming schedule and events.</p>",
    tasks: "<h1>Tasks</h1><p>Your to-do list and priorities.</p>",
    journal: "<h1>Journal</h1><p>Daily logs and notes go here.</p>",
    stats: "<h1>Stats</h1><p>Productivity and burnout analytics.</p>",
  };

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      sidebarItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const page = item.getAttribute("data-page");
      mainContent.innerHTML = pages[page] || "<h1>Not found</h1>";
    });
  });
});
