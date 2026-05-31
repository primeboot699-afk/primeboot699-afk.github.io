document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  document.body.style.backgroundPosition = `${50 - x}% ${50 - y}%`;
});

console.log("Prime X Gaming Loaded");
