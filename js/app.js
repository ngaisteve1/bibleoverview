/**
 * Global reveal mechanism toggled by header icon interaction
 */
function revealEasterEgg() {
  if (easterEggUnlocked) return;

  easterEggUnlocked = true;

  const btn = document.getElementById("easterEggBtn");
  if (btn) {
    btn.classList.add("unlocked");
    btn.setAttribute("title", "Easter Egg Unlocked! Interesting Fact Activated!");
  }

  alert("✨ Secrets Unlocked! You've found the timeline Easter egg. Interesting Facts will now appear inside event details!");

  // Dynamic re-render if panels are actively open during activation
  if (activeLeftIndex !== null) {
    document.getElementById("leftDetail").innerHTML = generateDetailHtml(events[activeLeftIndex]);
  }
  if (activeRightIndex !== null) {
    document.getElementById("rightDetail").innerHTML = generateDetailHtml(events[activeRightIndex]);
  }
}

// Runtime Initialization
render();