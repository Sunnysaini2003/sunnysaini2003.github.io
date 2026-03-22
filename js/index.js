// Toggle icon (☰ → X)
const toggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

toggler.addEventListener('click', function () {
  this.classList.toggle('open');
});

// Close navbar when link clicked (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// Reset icon when menu closes
navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  toggler.classList.remove('open');
});

// skills slider 
function scrollSkills(direction) {
  const track = document.querySelector(".skills-track");
  const scrollAmount = 200;

  track.parentElement.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}
