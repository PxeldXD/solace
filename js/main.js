// Sidebar navigation: switch active section
const sidebarItems = document.querySelectorAll('.sidebar-item');
const contentSections = document.querySelectorAll('.content-section');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) return;

    // Remove active from all buttons & sections
    sidebarItems.forEach(i => i.classList.remove('active'));
    contentSections.forEach(s => s.classList.remove('active'));

    // Activate clicked button & matching section
    item.classList.add('active');
    const sectionId = item.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add('active');
      section.focus();
    }
  });
});

// Modal open/close
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    modal.querySelector('input, textarea, button')?.focus();
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  }
}

// Close modal on outside click
window.addEventListener('click', e => {
  const modals = document.querySelectorAll('.modal[aria-hidden="false"]');
  modals.forEach(modal => {
    if (e.target === modal) closeModal(modal.id);
  });
});
