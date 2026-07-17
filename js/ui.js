const timeline = document.getElementById("timeline");

/**
 * Iterates through active dataset and mounts nodes to the timeline container
 */
/**
 * Iterates through active dataset and mounts nodes to the timeline container
 */
function render() {
    timeline.innerHTML = ""; // Clear existing elements safely

    // 1. Filter the event list based on the active state
    const filteredEvents = events.filter(e => currentFilter === "all" || e.type === currentFilter);

    // 2. Setup a tracker to make sure the divider only injects once
    let hasInjectedDivider = false;

    filteredEvents.forEach((e, displayIndex) => {

        // 3. DIVIDER INJECTION CHECK
        // If this event belongs to the New Testament and we haven't added the divider yet, inject it!
        if (e.testament === 'nt' && !hasInjectedDivider) {
            const divider = document.createElement('div');
            divider.className = 'timeline-divider';
            divider.innerHTML = `<span class="timeline-divider-content">New Testament</span>`;
            timeline.appendChild(divider);

            hasInjectedDivider = true; // Lock it so it doesn't repeat
        }

        // 4. CONTINUING STANDARD ELEMENT MOUNTING
        const side = displayIndex % 2 === 0 ? "left" : "right";
        const actualIndex = events.findIndex(ev => ev.title === e.title && ev.year === e.year);

        const isMajor = e.type === "major";
        const labelIcon = isMajor ? `<i class="fa-solid fa-crown"></i>` : `<i class="fa-regular fa-star"></i>`;
        const titlePrefix = isMajor ? `★ ` : ``;

        const isActive = (side === "left" && activeLeftIndex === actualIndex) ||
            (side === "right" && activeRightIndex === actualIndex);

        const eventElement = document.createElement("div");
        eventElement.className = `event ${side} ${e.type} testament-${e.testament} ${isActive ? 'active' : ''}`;
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

        <!-- Collapsible Connection to Jesus Section (ONLY SHOWS IF CONTENT EXISTS) -->
        ${e.jesus ? `
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
        ` : ''}

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
// Make sure both active indexes are defined at the top of your state (timeline.js)
// let activeLeftIndex = null;
// let activeRightIndex = null;

function handleEventClick(index, side, cardElement) {
    const width = window.innerWidth;

    if (width <= 992) {
        // 1. MOBILE VIEW
        openMobileModal(index);
    } else if (width > 992 && width <= 1400) {
        // 2. LAPTOP VIEW (Force all details to the right panel as a single sidebar)
        toggleLaptopDetail(index, cardElement);
    } else {
        // 3. DESKTOP VIEW (Standard alternating panels)
        toggleDesktopDetail(index, side, cardElement);
    }
}

// Laptop logic: Treats the right panel as the single unified sidebar
function toggleLaptopDetail(index, cardElement) {
    const leftPanel = document.getElementById("leftDetail");
    const rightPanel = document.getElementById("rightDetail");
    const containerEvent = cardElement.closest('.event');
    const dotElement = containerEvent.querySelector('.dot');

    // Close left panel completely
    activeLeftIndex = null;
    leftPanel.classList.remove("show");

    // Highlight active timeline node
    document.querySelectorAll('.event').forEach(el => el.classList.remove('active'));

    if (activeRightIndex === index) {
        activeRightIndex = null;
        rightPanel.className = "detail right-detail";
    } else {
        activeRightIndex = index;
        containerEvent.classList.add('active');

        // Render content into right sidebar
        rightPanel.className = `detail right-detail show testament-${events[index].testament}`;
        rightPanel.innerHTML = generateDetailHtml(events[index]);

        // Adjust arrow pointing position to the active dot
        adjustArrowPosition(dotElement, rightPanel);
        smoothScrollToEvent(containerEvent);
    }
}

function toggleDesktopDetail(index, side, cardElement) {
    const leftPanel = document.getElementById("leftDetail");
    const rightPanel = document.getElementById("rightDetail");
    const containerEvent = cardElement.closest('.event');
    const dotElement = containerEvent.querySelector('.dot');
    const currentEvent = events[index];

    document.querySelectorAll(`.event.${side}`).forEach(el => el.classList.remove('active'));

    if (side === "left") {
        if (activeLeftIndex === index) {
            activeLeftIndex = null;
            leftPanel.className = "detail left-detail"; // Reset classes
        } else {
            activeLeftIndex = index;
            containerEvent.classList.add('active');

            // Update data panel content and testament tracking class configurations
            leftPanel.className = `detail left-detail show testament-${currentEvent.testament}`;
            leftPanel.innerHTML = generateDetailHtml(currentEvent);

            adjustArrowPosition(dotElement, leftPanel);
            smoothScrollToEvent(containerEvent);
        }
    } else {
        if (activeRightIndex === index) {
            activeRightIndex = null;
            rightPanel.className = "detail right-detail"; // Reset classes
        } else {
            activeRightIndex = index;
            containerEvent.classList.add('active');

            // Update data panel content and testament tracking class configurations
            rightPanel.className = `detail right-detail show testament-${currentEvent.testament}`;
            rightPanel.innerHTML = generateDetailHtml(currentEvent);

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
    const currentEvent = events[index];

    // 1. Populate the target container with structural content layout
    modalBody.innerHTML = generateDetailHtml(currentEvent);

    // 2. Cleanly append visibility and era classes without breaking base styles
    modal.classList.add("show");

    // Clean up any old testament classes first to prevent layout bleeding
    modal.classList.remove("testament-ot", "testament-nt");
    modal.classList.add(`testament-${currentEvent.testament}`);

    // 3. Prevent background underlying view scroll tracking layers
    document.body.style.overflow = "hidden";
}

function closeMobileModal(event) {
    // Check if user clicked background container or explicit boundary target close trigger elements
    if (event.target.id === "mobileModal" || event.target.closest('.modal-close')) {
        const modal = document.getElementById("mobileModal");

        modal.classList.remove("show");
        document.body.style.overflow = "";
    }
}