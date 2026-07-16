const timeline = document.getElementById("timeline");

/**
 * Iterates through active dataset and mounts nodes to the timeline container
 */
function render() {
    timeline.innerHTML = "";
    const filteredEvents = events.filter(e => currentFilter === "all" || e.type === currentFilter);

    filteredEvents.forEach((e, displayIndex) => {
        const side = displayIndex % 2 === 0 ? "left" : "right";
        const actualIndex = events.findIndex(ev => ev.title === e.title && ev.year === e.year);

        const isMajor = e.type === "major";
        const labelIcon = isMajor ? `<i class="fa-solid fa-crown"></i>` : `<i class="fa-regular fa-star"></i>`;
        const titlePrefix = isMajor ? `★ ` : ``;

        const isActive = (side === "left" && activeLeftIndex === actualIndex) ||
            (side === "right" && activeRightIndex === actualIndex);

        const eventElement = document.createElement("div");
        eventElement.className = `event ${side} ${e.type} ${isActive ? 'active' : ''}`;
        eventElement.setAttribute("data-index", actualIndex);

        eventElement.innerHTML = `
      <div class="card" onclick="handleEventClick(${actualIndex}, '${side}', this)">
        <h2>${titlePrefix}${e.title}</h2>
        <div class="year">${e.year}</div>
        <div class="label ${e.type}-label">${labelIcon} ${e.type.toUpperCase()} EVENT</div>
      </div>
      <div class="dot" onclick="handleEventClick(${actualIndex}, '${side}', this.parentElement.querySelector('.card'))"></div>
    `;

        timeline.appendChild(eventElement);
    });
}

/**
 * Creates structure for detailed panel templates
 * @param {Object} e - Event Object
 * @returns {string} HTML string
 */
function generateDetailHtml(e) {

    const interestingFactHtml = (easterEggUnlocked && e.funFact)
        ? `
            <h3><i class="fa-solid fa-star"></i> Interesting Fact</h3>
            <p>${e.funFact}</p>
          `
        : '';

    return `
        <h2>${e.title}</h2>
        <div class="year">${e.year}</div>

        <h3><i class="fa-solid fa-book"></i> Books</h3>
        <div class="inline-list">${formatInlineList(e.books)}</div>

        <h3><i class="fa-solid fa-location-dot"></i> Key Passages</h3>
        <div class="inline-list">${formatInlineList(e.passages)}</div>

        <h3><i class="fa-solid fa-book-open"></i> Event Summary</h3>
        <p>${e.description}</p>

        <h3><i class="fa-solid fa-bullseye"></i> Key Theme</h3>
        <p>${e.keyTheme}</p>

        <!-- Collapsible Connection to Jesus Section -->
        <div class="collapsible-jesus-container">
            <button class="jesus-toggle-btn" onclick="toggleJesusConnection(this)">
                <span><i class="fa-solid fa-cross jesus-icon"></i> Connection To Jesus</span>
                <span class="toggle-arrow"><i class="fa-solid fa-chevron-down"></i> Tap to reveal</span>
            </button>
            <div class="jesus-content-wrapper">
                <div class="jesus-content-inner">
                <p>${e.jesus}</p>
                </div>
            </div>
        </div>

        ${interestingFactHtml}
    `;
}

/**
 * Handles the smooth toggle and arrow rotation for the Jesus Connection section
 * @param {HTMLElement} btn 
 */
function toggleJesusConnection(btn) {
    const container = btn.closest('.collapsible-jesus-container');
    const wrapper = container.querySelector('.jesus-content-wrapper');
    const inner = container.querySelector('.jesus-content-inner');
    const arrowText = btn.querySelector('.toggle-arrow');

    const isOpen = container.classList.contains('is-open');

    if (!isOpen) {
        // Open: Set height to the exact content height
        container.classList.add('is-open');
        wrapper.style.height = `${inner.scrollHeight}px`;
        arrowText.innerHTML = `<i class="fa-solid fa-chevron-up"></i> Hide`;
    } else {
        // Close: Reset height to 0
        container.classList.remove('is-open');
        wrapper.style.height = '0px';
        arrowText.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Tap to reveal`;
    }
}

/**
 * Branching layout strategy handler based on width
 */
function handleEventClick(index, side, cardElement) {
    if (window.innerWidth <= 992) {
        openMobileModal(index);
    } else {
        toggleDesktopDetail(index, side, cardElement);
    }
}

function toggleDesktopDetail(index, side, cardElement) {
    const leftPanel = document.getElementById("leftDetail");
    const rightPanel = document.getElementById("rightDetail");
    const containerEvent = cardElement.closest('.event');
    const dotElement = containerEvent.querySelector('.dot');

    document.querySelectorAll(`.event.${side}`).forEach(el => el.classList.remove('active'));

    if (side === "left") {
        if (activeLeftIndex === index) {
            activeLeftIndex = null;
            leftPanel.classList.remove("show");
        } else {
            activeLeftIndex = index;
            containerEvent.classList.add('active');
            leftPanel.innerHTML = generateDetailHtml(events[index]);
            leftPanel.classList.add("show");
            adjustArrowPosition(dotElement, leftPanel);
            smoothScrollToEvent(containerEvent);
        }
    } else {
        if (activeRightIndex === index) {
            activeRightIndex = null;
            rightPanel.classList.remove("show");
        } else {
            activeRightIndex = index;
            containerEvent.classList.add('active');
            rightPanel.innerHTML = generateDetailHtml(events[index]);
            rightPanel.classList.add("show");
            adjustArrowPosition(dotElement, rightPanel);
            smoothScrollToEvent(containerEvent);
        }
    }
}

function adjustArrowPosition(dot, panel) {
    requestAnimationFrame(() => {
        const dotRect = dot.getBoundingClientRect();
        const panelRect = panel.getBoundingClientRect();
        const arrowY = (dotRect.top - panelRect.top) + (dotRect.height / 2) - 12;
        panel.style.setProperty("--arrowY", `${arrowY}px`);
    });
}

function smoothScrollToEvent(eventElement) {
    const elementRect = eventElement.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY;

    window.scrollTo({
        top: absoluteElementTop - 40,
        behavior: "smooth"
    });
}

function openMobileModal(index) {
    const modal = document.getElementById("mobileModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = generateDetailHtml(events[index]);
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeMobileModal(event) {
    if (event.target.id === "mobileModal" || event.target.closest('.modal-close')) {
        const modal = document.getElementById("mobileModal");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
}