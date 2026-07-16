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