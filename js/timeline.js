// State Management
let currentFilter = "major";
let easterEggUnlocked = false;
let activeLeftIndex = null;
let activeRightIndex = null;

/**
 * Helper function to turn data arrays into inline readable lists
 * @param {Array} arr 
 * @returns {string}
 */
function formatInlineList(arr) {
    if (!arr || arr.length === 0) return "";
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
    return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`;
}

/**
 * Handles logic for switching the current event view filter
 * @param {string} type 
 */
function filterEvents(type) {
    currentFilter = type;
    activeLeftIndex = null;
    activeRightIndex = null;

    document.getElementById("leftDetail").classList.remove("show");
    document.getElementById("rightDetail").classList.remove("show");

    render();
}

const timelineContainer = document.getElementById('timeline');
timelineContainer.innerHTML = ''; // Clear existing

let hasInjectedDivider = false;

events.forEach((event, index) => {
    // 1. Detect transition shift to NT and drop the divider element
    if (event.testament === 'nt' && !hasInjectedDivider) {
        const divider = document.createElement('div');
        divider.className = 'timeline-divider';
        divider.innerHTML = `<span class="timeline-divider-content">New Testament</span>`;
        timelineContainer.appendChild(divider);

        hasInjectedDivider = true; // Ensure it only renders once
    }

    // 2. Render your regular card elements as normal below
    const eventCard = document.createElement('div');
    eventCard.className = `event ${event.importance} ${index % 2 === 0 ? 'left' : 'right'}`;

    // ... rest of your card setup logic (innerHTML, dots, event listeners, etc.) ...

    timelineContainer.appendChild(eventCard);
});