/**
 * Global reveal mechanism toggled by header icon interaction
 */
function revealEasterEgg() {
  if (easterEggUnlocked) return;

  easterEggUnlocked = true;

  // 1. Update Button UI
  const btn = document.getElementById("easterEggBtn");
  if (btn) {
    btn.classList.add("unlocked");
    btn.setAttribute("title", "Insights activated");
  }

  // 2. Modularized UI Update Helper
  const updatePanel = (elementId, eventIndex) => {
    const el = document.getElementById(elementId);
    if (el && eventIndex !== null) {
      el.innerHTML = generateDetailHtml(events[eventIndex]);
    }
  };

  // Update active panels
  updatePanel("leftDetail", activeLeftIndex);
  updatePanel("rightDetail", activeRightIndex);

  // 3. Non-blocking Notification
  showToast("✨ Secrets Unlocked! You've found it. Interesting Facts will now appear inside event details!");
}

/**
 * Creates and displays a non-blocking toast notification
 */
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;

  // Style the toast directly or via a class
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '4px',
    zIndex: '1000',
    transition: 'opacity 0.5s',
    fontFamily: 'sans-serif'
  });

  document.body.appendChild(toast);

  // Fade out and remove
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 500);
  }, 5000);
}

// Runtime Initialization
render();