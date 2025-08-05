document.addEventListener('DOMContentLoaded', () => {
  // Sidebar navigation logic
  const sidebarButtons = document.querySelectorAll('.sidebar-item');
  const sections = document.querySelectorAll('.content-section');

  function activateSection(btn) {
    if (btn.disabled || btn.classList.contains('disabled')) return;

    // Deactivate all buttons and hide all sections
    sidebarButtons.forEach(b => b.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Activate clicked button and show corresponding section
    btn.classList.add('active');
    const sectionId = btn.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');
  }

  sidebarButtons.forEach(btn => {
    btn.addEventListener('click', () => activateSection(btn));
  });

  // Enable drag-and-drop reordering for sidebar
  const sortable = Sortable.create(document.getElementById('sidebar-sortable'), {
    animation: 150,
    handle: '.sidebar-item',
    ghostClass: 'drag-ghost',
    onEnd: () => {
      // Optional: Save the new order in localStorage
      const order = [...document.querySelectorAll('.sidebar-item')].map(btn =>
        btn.getAttribute('data-section')
      );
      localStorage.setItem('sidebarOrder', JSON.stringify(order));
    }
  });

  // Load sidebar order from localStorage if available
  const savedOrder = localStorage.getItem('sidebarOrder');
  if (savedOrder) {
    const order = JSON.parse(savedOrder);
    const container = document.getElementById('sidebar-sortable');
    order.forEach(section => {
      const btn = [...sidebarButtons].find(b => b.getAttribute('data-section') === section);
      if (btn) container.appendChild(btn);
    });
  }

  // Dropdown toggle
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent outside click from firing immediately
      dropdownMenu.style.display =
        dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
      dropdownMenu.style.flexDirection = 'column';
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  // Modal open/close logic
  window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
  };

  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
  };

  // Close modal if clicking outside content
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
});
