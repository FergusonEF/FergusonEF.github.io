const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("text-animate-show", entry.isIntersecting);
  });
});

const textAnimateElement = document.querySelectorAll(".text-animate-hide");
textAnimateElement.forEach((el) => observer.observe(el));
