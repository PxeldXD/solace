// main.js

// Sidebar tab buttons
const sidebarItems = document.querySelectorAll('.sidebar-item');
// Content sections
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
    // Optional: focus first input inside modal
    const input = modal.querySelector('input, textarea, select, button');
    if(input) input.focus();
  }
};

// Close modal by id
window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if(modal){
    modal.style.display = 'none';
  }
};

// Close modal when clicking outside modal-content
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
