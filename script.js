const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && window.anime) {
  document.body.classList.add("motion-ready");

  anime({
    targets: ".section-reveal",
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(120),
    duration: 900,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".hero-art img",
    scale: [0.96, 1],
    opacity: [0, 1],
    duration: 1100,
    easing: "easeOutCubic",
  });
} else {
  document.body.classList.remove("motion-ready");
}
