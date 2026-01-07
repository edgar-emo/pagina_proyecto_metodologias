document.addEventListener('DOMContentLoaded', function () {
  const links = Array.from(document.querySelectorAll('nav.index a'));
  const sections = links.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);

  // Click handlers: smooth scroll already handled by CSS, but ensure focus
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Highlight current section on scroll using IntersectionObserver
  if ('IntersectionObserver' in window && sections.length) {
    const obsOptions = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = document.querySelector(`nav.index a[href="#${id}"]`);
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      });
    }, obsOptions);
    sections.forEach(s => observer.observe(s));
  }

  // Set active link from location.hash on load
  if (location.hash) {
    const targetLink = document.querySelector(`nav.index a[href="${location.hash}"]`);
    if (targetLink) {
      links.forEach(l => l.classList.remove('active'));
      targetLink.classList.add('active');
    }
  }
});
