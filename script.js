// Show selected window
function showWindow(id) {
  // Hide all windows
  document.querySelectorAll('.window').forEach(win => {
    win.classList.remove('active');
    win.style.display = 'none';
  });

  // Show selected window
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }

  // Update navbar active state
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-target="${id}"]`);
  if (navItem) navItem.classList.add('active');
}

// Attach click handlers to nav items
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const targetId = item.getAttribute('data-target');
    showWindow(targetId);
  });
});

// Default: show Profile window on load
document.addEventListener('DOMContentLoaded', () => {
  showWindow('profile');
});

/* -----------------------------
   PROJECTS WINDOW INTERACTIONS
------------------------------*/

// Filter projects
document.querySelectorAll('.filter').forEach(filterBtn => {
  filterBtn.addEventListener('click', () => {
    // Reset active filter
    document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
    filterBtn.classList.add('active');

    const filterText = filterBtn.textContent.trim().toLowerCase();
    document.querySelectorAll('.project-card').forEach(card => {
      if (filterText.includes('all') || card.textContent.toLowerCase().includes(filterText)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Search projects
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
  searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
  });
}

/* -----------------------------
   CONTACT WINDOW INTERACTIONS
------------------------------*/

// Inquiry form submission
const inquiryForm = document.querySelector('.inquiry-form');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ Thank you! Your inquiry has been submitted.');
    inquiryForm.reset();
  });
}
