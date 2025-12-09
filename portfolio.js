document.addEventListener('DOMContentLoaded', function () {

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('visible');
        obs.unobserve(ent.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  const toggle = document.getElementById('navToggle');
  toggle && toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('nav-open');
  });
});

document.querySelectorAll('.js-readmore').forEach((readmore) => {
  readmore.addEventListener('click', () => {
    alert("Still writing this one hihihi, will upload sooonnn")
  })
})