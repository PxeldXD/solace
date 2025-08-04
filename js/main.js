document.addEventListener('DOMContentLoaded', () => {
  // Sidebar tab buttons
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const contentSections = document.querySelectorAll('.content-section');

  sidebarItems.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('disabled')) return;

      // Remove active from all buttons and sections
      sidebarItems.forEach(btn => btn.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));

      // Add active to clicked button
      button.classList.add('active');

      // Show corresponding section
      const targetId = button.getAttribute('data-section');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  // Modal functions
  window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
      // Optional: focus first input
      const firstInput = modal.querySelector('input, textarea, button');
      if (firstInput) firstInput.focus();
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  };

  // Close modals if clicking outside modal content
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
