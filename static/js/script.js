var tl = gsap.timeline ()
.to('.hero-gradient',{
  x: "random(-50, 50, 5)%",
  y: "random(-50, 50, 5)%",
  rotation: "random(-40, 40, 5)",
  width: "random(40, 80, 5)rem",
  height: "random(40, 80, 5)rem",
  opacity: "random(0.6, 0.8)",
  scale: "random(0.8, 1.1)",
  duration: 6,
  ease: "none",
  repeat: -1,
  repeatRefresh: true
});