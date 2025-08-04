// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Sidebar buttons for navigation
  const sidebarButtons = document.querySelectorAll(".sidebar-item:not(.disabled)");
  const sections = document.querySelectorAll(".content-section");

  sidebarButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and sections
      sidebarButtons.forEach((b) => b.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      // Add active class to clicked button and corresponding section
      btn.classList.add("active");
      const target = btn.getAttribute("data-section");
      const targetSection = document.getElementById(target);
      if (targetSection) targetSection.classList.add("active");
    });
  });

  // Modal handling
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      // Focus first input or textarea for accessibility
      const focusable = modal.querySelector("input, textarea, button");
      if (focusable) focusable.focus();
    }
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  }

  // Expose openModal and closeModal globally for inline onclick attributes
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Close modals when clicking outside modal content
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modals.forEach((modal) => {
        if (modal.style.display === "flex") {
          modal.style.display = "none";
          modal.setAttribute("aria-hidden", "true");
        }
      });
    }
  });
});
