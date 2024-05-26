document.addEventListener("DOMContentLoaded", function () {
  const bubblesContainer = document.querySelector(".bubbles");

  function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }

  setInterval(createBubble, 500);
});
