// Smooth scroll to sections
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight nav on scroll (basic version)
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelectorAll("main section").forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector(`nav a[href='#${section.id}']`);
    if (scrollY >= top && scrollY <= bottom) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
