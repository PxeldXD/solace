// Page Navigation
document.querySelectorAll('.nav-item').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('disabled')) return;

    // Remove active class from all
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));

    // Add active class to current
    button.classList.add('active');
    const section = button.getAttribute('data-section');
    document.getElementById(section).classList.add('active');
  });
});

// Sidebar Resizing
const resizer = document.getElementById('resizer-left');
const sidebar = document.querySelector('.sidebar-left');
let isResizing = false;

resizer.addEventListener('mousedown', function (e) {
  isResizing = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', function (e) {
  if (!isResizing) return;
  const newWidth = Math.min(Math.max(e.clientX, 180), 400); // constrain width
  sidebar.style.width = newWidth + 'px';
});

document.addEventListener('mouseup', function () {
  isResizing = false;
  document.body.style.cursor = 'default';
});
