// Theme Toggle
(function(){
  const body = document.body;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if(saved) body.setAttribute('data-theme', saved);

  function currentTheme(){ return body.getAttribute('data-theme')==='dark'?'dark':'light'; }
  function toggleTheme(){
    const next = currentTheme()==='dark'?'light':'dark';
    body.setAttribute('data-theme',next);
    localStorage.setItem('theme',next);
    btn.textContent = next==='dark'?'☀️':'🌙';
  }

  if(btn){ btn.addEventListener('click',toggleTheme); btn.textContent=currentTheme()==='dark'?'☀️':'🌙'; }
})();

// Reveal sections on scroll
(function(){
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, {threshold:0.15});
  sections.forEach(s=>observer.observe(s));
})();

// Animate skill bars
(function(){
  const bars = document.querySelectorAll('.skill-bar');
  bars.forEach(bar=>{
    const fill = bar.querySelector('.skill-bar-fill');
    const level = bar.dataset.level;
    setTimeout(()=>{ fill.style.width = level + '%'; }, 500);
  });
})();

// Download CV button
(function(){
  const btn = document.getElementById('downloadCV');
  btn.addEventListener('click', ()=>{
    alert('PDF download not implemented yet! Replace with real PDF generation.');
  });
})();
