// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const sectionButtons = document.querySelectorAll(".sidebar-item");
  const sections = document.querySelectorAll(".content-section");

  sectionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-section");

      // Deactivate all sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Activate selected section
      const activeSection = document.getElementById(targetId);
      if (activeSection) {
        activeSection.classList.add("active");
      }

      // Highlight active button
      sectionButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
