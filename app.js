const events = [
  {
    title: "Creation",
    year: "Genesis 1-2",
    type: "major",
    books: ["Genesis"],
    passages: ["Genesis 1:1", "Genesis 1:26-27"],
    description: "God creates the universe and humanity in His image.",
    keyTheme: "God is the Creator, and humanity is created to reflect His image and represent Him on earth.",
    jesus: "Jesus is the Word through whom all things were created.",
    funFact: "The first recorded words of God in Scripture are 'Let there be light.' Creation begins through God's spoken word."
  },
  {
    title: "The Fall",
    year: "Genesis 3",
    type: "major",
    books: ["Genesis"],
    passages: ["Genesis 3:15"],
    description: "Sin enters the world through human rebellion.",
    keyTheme: "Humanity's greatest problem is sin, but God immediately promises a future victory over evil.",
    jesus: "The promised seed points forward to Christ's victory over sin.",
    funFact: "Genesis 3:15 is often called the 'first gospel promise' because it is the earliest hint of God's plan to defeat sin and Satan."
  },
  {
    title: "The Flood",
    year: "Genesis 6-9",
    type: "minor",
    books: ["Genesis"],
    passages: ["Genesis 6:13", "Genesis 9:12-13"],
    description: "God judges the earth with water but preserves Noah and his family.",
    keyTheme: "God judges wickedness but provides salvation for those who trust Him.",
    jesus: "The ark serves as a prototype of salvation through Christ.",
    funFact: "The ark was built according to God's design and was large enough to preserve Noah's family and representatives of animals."
  },
  {
    title: "Abraham Covenant",
    year: "Around 2000 BC",
    type: "major",
    books: ["Genesis"],
    passages: ["Genesis 12", "Genesis 15"],
    description: "God promises Abraham land, descendants and blessing.",
    keyTheme: "God begins His redemption plan through one family that will bless all nations.",
    jesus: "Jesus brings blessing to all nations through Abraham's seed.",
    funFact: "Abraham was 75 years old when God called him, showing that God's purposes are not limited by age."
  },
  {
    title: "Isaac Born",
    year: "Genesis 21",
    type: "minor",
    books: ["Genesis"],
    passages: ["Genesis 21"],
    description: "God fulfills His promise by giving Abraham Isaac.",
    keyTheme: "God faithfully keeps His promises even when they seem impossible.",
    jesus: "Shows God's faithfulness in fulfilling promises.",
    funFact: "Isaac's name means 'he laughs' because Abraham and Sarah laughed when God promised them a son in their old age."
  },
  {
    title: "The Call of Moses",
    year: "1446 BC",
    type: "minor",
    books: ["Exodus"],
    passages: ["Exodus 3"],
    description: "God calls Moses through the burning bush to deliver His people.",
    keyTheme: "God chooses and equips unlikely people to accomplish His mission.",
    jesus: "Moses prefigures Christ as the great deliverer and mediator.",
    funFact: "Moses spent 40 years in Egypt, 40 years in Midian, and 40 years leading Israel."
  },
  {
    title: "Exodus",
    year: "1446 BC",
    type: "major",
    books: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"],
    passages: ["Exodus 12", "Exodus 20"],
    description: "God delivers Israel from Egypt and establishes covenant.",
    keyTheme: "God redeems His people and forms them into a covenant nation.",
    jesus: "The Passover lamb points to Jesus.",
    funFact: "The Exodus became the defining example of God's saving power and is remembered throughout the Old Testament."
  },
  {
    title: "Ten Commandments",
    year: "1446 BC",
    type: "minor",
    books: ["Exodus"],
    passages: ["Exodus 20"],
    description: "God gives Israel His law at Mount Sinai.",
    keyTheme: "God teaches His redeemed people how to live in relationship with Him.",
    jesus: "Jesus fulfills the law perfectly.",
    funFact: "The Ten Commandments were given after God rescued Israel, showing that obedience comes from a relationship with God, not as a way to earn salvation."
  },
  {
    title: "Conquest of Canaan",
    year: "1406 BC",
    type: "minor",
    books: ["Joshua"],
    passages: ["Joshua 1:1-9"],
    description: "Israel enters the Promised Land under Joshua's leadership.",
    keyTheme: "God fulfills His promise by giving His people the land He promised Abraham.",
    jesus: "Joshua (Yeshua) is a type of Jesus, the captain of our salvation.",
    funFact: "Joshua's Hebrew name is Yeshua, the same name as Jesus, meaning 'The LORD saves.'"
  },
  {
    title: "Era of Judges",
    year: "1375–1050 BC",
    type: "minor",
    books: ["Judges", "Ruth"],
    passages: ["Judges 2:16"],
    description: "God raises up deliverers for Israel during cycles of disobedience.",
    keyTheme: "Human leaders fail, showing the need for a perfect and eternal King.",
    jesus: "Jesus is the ultimate Judge and Redeemer.",
    funFact: "The book of Judges follows a repeated cycle: Israel sins, suffers, cries out, and God raises a deliverer."
  },
  {
    title: "Davidic Covenant",
    year: "1000 BC",
    type: "major",
    books: ["1 Samuel", "2 Samuel", "Psalms"],
    passages: ["2 Samuel 7"],
    description: "God promises David an everlasting kingdom.",
    keyTheme: "God promises an eternal King from David's family who will rule forever.",
    jesus: "Jesus is the eternal Son of David.",
    funFact: "David wanted to build God a house (the Temple), but God promised to build David a lasting 'house' (dynasty)."
  },
  {
    title: "Solomon's Temple",
    year: "960 BC",
    type: "minor",
    books: ["1 Kings", "2 Chronicles"],
    passages: ["1 Kings 6"],
    description: "The permanent dwelling place for God's presence is built in Jerusalem.",
    keyTheme: "God desires to dwell among His people, but the Temple points forward to a greater way God will be present with humanity.",
    jesus: "Jesus is the true Temple, where God dwells with man.",
    funFact: "The first Temple took about seven years to build and became the center of Israel's worship for nearly 400 years before its destruction by Babylon."
  },
  {
    title: "Ministry of Elijah/Elisha",
    year: "870–790 BC",
    type: "minor",
    books: ["1 Kings", "2 Kings"],
    passages: ["1 Kings 17", "2 Kings 2"],
    description: "Prophets call a backslidden Israel to repentance.",
    keyTheme: "God remains faithful by sending prophets to call His people back to covenant faithfulness.",
    jesus: "They prefigure the prophetic and miraculous ministry of Jesus.",
    funFact: "Elijah is one of the few biblical figures who did not experience ordinary death; he was taken up to heaven in a whirlwind."
  },
  {
    title: "Ministry of Isaiah",
    year: "740–680 BC",
    type: "minor",
    books: ["Isaiah"],
    passages: ["Isaiah 7:14", "Isaiah 53"],
    description: "God uses Isaiah to prophesy judgment and the coming Suffering Servant.",
    keyTheme: "God reveals both judgment for sin and hope through the coming Messiah.",
    jesus: "Isaiah provides the clearest Old Testament prophecies of Christ.",
    funFact: "Isaiah 53 describes the suffering servant hundreds of years before Jesus' crucifixion and is one of the strongest Messianic prophecies in the Old Testament."
  },
  {
    title: "Babylonian Exile & Ezekiel",
    year: "586 BC",
    type: "major",
    books: ["Jeremiah", "Lamentations", "Ezekiel", "Daniel"],
    passages: ["Jeremiah 31:31", "Ezekiel 36:26"],
    description: "Judah is taken into exile; Ezekiel prophesies in Babylon of a new heart and Spirit.",
    keyTheme: "God disciplines His people but promises restoration through a New Covenant and transformed hearts.",
    jesus: "The New Covenant prophecy points to Christ's work in the believer.",
    funFact: "Ezekiel received visions while living in Babylon, showing that God's presence was not limited to Jerusalem or the Temple."
  },
  {
    title: "Birth of Jesus",
    year: "AD 0",
    type: "major",
    books: ["Matthew", "Luke"],
    passages: ["Matthew 1", "Luke 2"],
    description: "The Messiah enters the world.",
    keyTheme: "God's promise of salvation reaches its fulfillment as the Creator enters His creation.",
    jesus: "God becomes flesh.",
    funFact: "Jesus' birthplace, Bethlehem, was also the hometown of King David, connecting Jesus to the promised Davidic royal line."
  },
  {
    title: "Cross and Resurrection",
    year: "AD 30",
    type: "major",
    books: ["Matthew", "Mark", "Luke", "John"],
    passages: ["Isaiah 53", "Luke 24"],
    description: "Jesus dies and rises again.",
    keyTheme: "Jesus accomplishes God's plan of salvation by defeating sin and death.",
    jesus: "The center of God's salvation plan.",
    funFact: "The resurrection transformed Jesus' disciples from fearful followers into bold witnesses who proclaimed His message throughout the world."
  }
];

let currentFilter = "major";
let easterEggUnlocked = false;
let activeLeftIndex = null;
let activeRightIndex = null;

const timeline = document.getElementById("timeline");

// Helper function to turn data arrays into inline readable lists
function formatInlineList(arr) {
  if (!arr || arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
  return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`;
}

// Global reveal mechanism toggled by header icon interaction
function revealEasterEgg() {
  if (easterEggUnlocked) return; // Prevent loop adjustments if already activated

  easterEggUnlocked = true;

  const btn = document.getElementById("easterEggBtn");
  btn.classList.add("unlocked");
  btn.setAttribute("title", "Easter Egg Unlocked! Fun Facts Activated!");

  alert("✨ Secrets Unlocked! You've found the timeline Easter egg. Fun Facts will now appear inside event details!");

  // Dynamic re-render inside existing panels if one happens to be actively open
  if (activeLeftIndex !== null) {
    document.getElementById("leftDetail").innerHTML = generateDetailHtml(events[activeLeftIndex]);
  }
  if (activeRightIndex !== null) {
    document.getElementById("rightDetail").innerHTML = generateDetailHtml(events[activeRightIndex]);
  }
}

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

function generateDetailHtml(e) {
  return `
    <h2>${e.title}</h2>
    <div class="year">${e.year}</div>

    <h3><i class="fa-solid fa-book"></i> Books</h3>
    <div class="inline-list">${formatInlineList(e.books)}</div>

    <h3><i class="fa-solid fa-location-dot"></i> Key Passages</h3>
    <div class="inline-list">${formatInlineList(e.passages)}</div>

    <h3><i class="fa-solid fa-book-open"></i> Overview</h3>
    <p>${e.description}</p>

    <h3><i class="fa-solid fa-bullseye"></i> Key Theme</h3>
    <p>${e.keyTheme}</p>

    <h3><i class="fa-solid fa-cross"></i> Connection To Jesus</h3>
    <p>${e.jesus}</p>

    ${typeof easterEggUnlocked !== 'undefined' && easterEggUnlocked === true && e.funFact ? `
    <h3><i class="fa-solid fa-star"></i> Fun Fact</h3>
    <p>${e.funFact}</p>
    ` : ''}
  `;
}

function handleEventClick(index, side, cardElement) {
  // Check if viewport width qualifies for Mobile Modal Viewport vs Desktop Panels
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

  // Clear previous highlighted event styles matching this side
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
  // Calculates container offset position and matches it to desktop sticky coordinates (40px)
  const elementRect = eventElement.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.scrollY;

  window.scrollTo({
    top: absoluteElementTop - 40,
    behavior: "smooth"
  });
}

/* =================
MOBILE MODAL LOGIC
================= */
function openMobileModal(index) {
  const modal = document.getElementById("mobileModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = generateDetailHtml(events[index]);
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // Lock page background body scrolling
}

function closeMobileModal(event) {
  // Allow closing either via explicit button click or targeting background click
  if (event.target.id === "mobileModal" || event.target.closest('.modal-close')) {
    const modal = document.getElementById("mobileModal");
    modal.classList.remove("show");
    document.body.style.overflow = ""; // Unlock normal page body scrolling
  }
}

function filterEvents(type) {
  currentFilter = type;
  activeLeftIndex = null;
  activeRightIndex = null;

  document.getElementById("leftDetail").classList.remove("show");
  document.getElementById("rightDetail").classList.remove("show");

  render();
}

// Runtime Initialisation
render();