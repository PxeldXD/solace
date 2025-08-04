// main.js

// Log load to verify JS is running
console.log("main.js loaded successfully");

// Sidebar tab buttons & content sections
const sidebarItems = document.querySelectorAll('.sidebar-item');
const sections = document.querySelectorAll('.content-section');

// Modals
const modals = document.querySelectorAll('.modal');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    if(item.classList.contains('disabled')) return; // ignore disabled

    // Remove active class from all buttons
    sidebarItems.forEach(i => i.classList.remove('active'));
    // Add active to clicked button
    item.classList.add('active');

    // Get section to show
    const sectionToShow = item.dataset.section;

    // Hide all sections
    sections.forEach(sec => {
      if(sec.id === sectionToShow){
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  });
});

// Open modal by id
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if(modal){
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    // Focus first input or textarea inside modal
    const focusElem = modal.querySelector('input, textarea, select, button');
    if(focusElem) focusElem.focus();
  }
};

// Close modal by id
window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if(modal){
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
};

// Close modal when clicking outside modal content
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      closeModal(modal.id);
    }
  });
});
