const events = [
  {
    title: "Creation",
    year: "Genesis 1-2",
    type: "major",
    books: ["Genesis"],
    passages: ["Genesis 1:1", "Genesis 1:26-27"],
    description: "God creates the heavens, earth, and humanity, establishing His design for creation and giving humans the unique role of bearing His image and reflecting His glory.",
    keyTheme: "God is the Creator, and humanity is created to reflect His image and represent Him on earth.",
    jesus: "Jesus is the eternal Word through whom all things were created, showing that Christ was active from the beginning of creation.",
    funFact: "The first recorded words of God in Scripture are 'Let there be light,' showing the power of God's spoken word."
  },
  {
    title: "The Fall",
    year: "Genesis 3",
    type: "major",
    books: ["Genesis"],
    passages: ["Genesis 3:15"],
    description: "Adam and Eve disobey God in the Garden of Eden, bringing sin, suffering, and separation from God into the world.",
    keyTheme: "Humanity's greatest problem is sin, but God immediately reveals His plan to bring redemption.",
    jesus: "The promised offspring of Eve points forward to Jesus, who defeats sin and Satan through His saving work.",
    funFact: "Genesis 3:15 is called the first gospel promise because it is the earliest announcement of God's victory over evil."
  },
  {
    title: "The Flood",
    year: "Genesis 6-9",
    type: "minor",
    books: ["Genesis"],
    passages: ["Genesis 6:13", "Genesis 9:12-13"],
    description: "God judges the widespread corruption of humanity through the flood while preserving Noah, his family, and representatives of creation.",
    keyTheme: "God judges evil but provides a way of salvation for those who trust and obey Him.",
    jesus: "The ark points forward to Christ as the ultimate refuge and means of salvation from judgment.",
    funFact: "God established the rainbow covenant with Noah as a sign of His promise never again to destroy the earth with a flood."
  },
  {
    title: "Abraham Covenant",
    year: "Around 2000 BC",
    type: "major",
    books: ["Genesis"],
    passages: ["Genesis 12", "Genesis 15"],
    description: "God calls Abraham and promises him land, descendants, and blessing, beginning His plan to bless all nations through one family.",
    keyTheme: "God begins His redemption plan through Abraham's family and extends His blessing to the entire world.",
    jesus: "Jesus fulfills God's promise to Abraham by bringing salvation and blessing to all nations.",
    funFact: "Abraham was 75 years old when God called him, showing that God's purposes are not limited by human age."
  },
  {
    title: "Isaac Born",
    year: "Genesis 21",
    type: "minor",
    books: ["Genesis"],
    passages: ["Genesis 21"],
    description: "God fulfills His promise by giving Abraham and Sarah a son, demonstrating His faithfulness despite their old age and impossible circumstances.",
    keyTheme: "God faithfully keeps His promises even when fulfillment seems impossible from a human perspective.",
    jesus: "Isaac's miraculous birth points to God's ability to fulfill His promises through His chosen plan.",
    funFact: "Isaac's name means 'he laughs' because Abraham and Sarah laughed when God promised them a son."
  },
  {
    title: "The Call of Moses",
    year: "1446 BC",
    type: "minor",
    books: ["Exodus"],
    passages: ["Exodus 3"],
    description: "God appears to Moses through the burning bush and calls him to deliver Israel from slavery in Egypt.",
    keyTheme: "God chooses ordinary people and equips them to accomplish His extraordinary purposes.",
    jesus: "Moses points forward to Jesus as the greater Deliverer and mediator between God and humanity.",
    funFact: "Moses spent 40 years in Egypt, 40 years in Midian, and 40 years leading Israel through the wilderness."
  },
  {
    title: "Exodus",
    year: "1446 BC",
    type: "major",
    books: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"],
    passages: ["Exodus 12", "Exodus 20"],
    description: "God rescues Israel from slavery in Egypt, establishes His covenant, and forms them into a nation devoted to Him.",
    keyTheme: "God redeems His people and establishes a covenant relationship with them.",
    jesus: "The Passover lamb points to Jesus, whose sacrifice brings ultimate freedom from sin.",
    funFact: "The Exodus became Israel's defining example of God's saving power throughout the Old Testament."
  },
  {
    title: "Ten Commandments",
    year: "1446 BC",
    type: "minor",
    books: ["Exodus"],
    passages: ["Exodus 20"],
    description: "God gives Israel His law at Mount Sinai, teaching them how to live as His covenant people and reflect His holiness.",
    keyTheme: "God teaches His redeemed people how to live in faithful relationship with Him.",
    jesus: "Jesus fulfills the law perfectly and reveals its true purpose through His teaching and life.",
    funFact: "The Ten Commandments were given after God rescued Israel, showing obedience flows from relationship with God."
  },
  {
    title: "Conquest of Canaan",
    year: "1406 BC",
    type: "minor",
    books: ["Joshua"],
    passages: ["Joshua 1:1-9"],
    description: "Under Joshua's leadership, Israel enters the Promised Land as God fulfills His covenant promise to Abraham.",
    keyTheme: "God faithfully fulfills His promises and leads His people into the inheritance He prepared for them.",
    jesus: "Joshua's name means Yeshua, pointing forward to Jesus who brings ultimate salvation.",
    funFact: "Joshua and Jesus share the same Hebrew name, Yeshua, meaning 'The LORD saves.'"
  },
  {
    title: "Era of Judges",
    year: "1375–1050 BC",
    type: "minor",
    books: ["Judges", "Ruth"],
    passages: ["Judges 2:16"],
    description: "Israel repeatedly turns away from God, but He raises judges to rescue them from oppression and restore them.",
    keyTheme: "Human leaders fail, revealing humanity's need for a perfect and eternal King.",
    jesus: "Jesus is the ultimate Judge and Redeemer who delivers His people forever.",
    funFact: "Judges follows a repeating cycle: sin, oppression, crying out to God, and deliverance through a judge."
  },
  {
    title: "Davidic Covenant",
    year: "1000 BC",
    type: "major",
    books: ["1 Samuel", "2 Samuel", "Psalms"],
    passages: ["2 Samuel 7"],
    description: "God promises David that his family line will continue forever and that an everlasting kingdom will come through his descendant.",
    keyTheme: "God promises an eternal King from David's family who will rule with everlasting authority.",
    jesus: "Jesus is the promised Son of David who establishes God's eternal kingdom.",
    funFact: "David wanted to build God a house, but God promised to build David a lasting dynasty instead."
  },
  {
    title: "Solomon's Temple",
    year: "960 BC",
    type: "minor",
    books: ["1 Kings", "2 Chronicles"],
    passages: ["1 Kings 6"],
    description: "Solomon builds the first permanent Temple in Jerusalem, creating a central place where Israel worships God and experiences His covenant presence among His people.",
    keyTheme: "God desires to dwell among His people, pointing toward His ultimate presence through Christ.",
    jesus: "Jesus is the greater Temple where God's presence is fully revealed and where humanity meets God.",
    funFact: "The first Temple took seven years to build and remained the center of Israel's worship for almost 400 years."
  },
  {
    title: "Ministry of Elijah/Elisha",
    year: "870–790 BC",
    type: "minor",
    books: ["1 Kings", "2 Kings"],
    passages: ["1 Kings 17", "2 Kings 2"],
    description: "Elijah and Elisha serve as prophets during a time of spiritual decline, calling Israel back to worship the true God and trust His word.",
    keyTheme: "God remains faithful by sending prophets to call His people back to covenant faithfulness.",
    jesus: "Their prophetic ministries point forward to Jesus, the ultimate prophet who reveals God's truth.",
    funFact: "Elijah was taken to heaven in a whirlwind without experiencing ordinary death, one of Scripture's most unusual events."
  },
  {
    title: "Ministry of Isaiah",
    year: "740–680 BC",
    type: "minor",
    books: ["Isaiah"],
    passages: ["Isaiah 7:14", "Isaiah 53"],
    description: "Isaiah proclaims God's judgment against sin while revealing hope through prophecies about the coming Messiah and suffering servant.",
    keyTheme: "God reveals both judgment and salvation through the promised coming Messiah.",
    jesus: "Isaiah's prophecies point clearly to Jesus as the suffering servant and promised Savior.",
    funFact: "Isaiah 53 describes the suffering servant centuries before Jesus' death and is one of the clearest Messianic prophecies."
  },
  {
    title: "Babylonian Exile & Ezekiel",
    year: "586 BC",
    type: "major",
    books: ["Jeremiah", "Lamentations", "Ezekiel", "Daniel"],
    passages: ["Jeremiah 31:31", "Ezekiel 36:26"],
    description: "Babylon destroys Jerusalem and takes Judah into exile, while prophets like Ezekiel bring messages of judgment, restoration, and future hope.",
    keyTheme: "God disciplines His people but promises restoration through a New Covenant and transformed hearts.",
    jesus: "The New Covenant promises find fulfillment through Jesus, who brings forgiveness and a renewed relationship with God.",
    funFact: "Ezekiel received visions while living in Babylon, showing God's presence was not limited to the Temple in Jerusalem."
  },
  {
    title: "Birth of Jesus",
    year: "AD 0",
    type: "major",
    books: ["Matthew", "Luke"],
    passages: ["Matthew 1", "Luke 2"],
    description: "Jesus, the promised Messiah and Son of God, is born in Bethlehem, bringing God's salvation plan into human history through the incarnation.",
    keyTheme: "God fulfills His promises by entering His creation and becoming present with humanity.",
    jesus: "Jesus is the promised Messiah, God in the flesh, who comes to save His people from sin.",
    funFact: "Bethlehem was the city of David, connecting Jesus' birth to the royal promise God made to David."
  },
  {
    title: "Cross and Resurrection",
    year: "AD 30",
    type: "major",
    books: ["Matthew", "Mark", "Luke", "John"],
    passages: ["Isaiah 53", "Luke 24"],
    description: "Jesus dies on the cross for sin and rises from the dead, accomplishing God's plan of redemption and defeating the power of death.",
    keyTheme: "Jesus completes God's salvation plan by defeating sin, death, and separation from God.",
    jesus: "The death and resurrection of Jesus are the center of the gospel and the foundation of Christian faith.",
    funFact: "The resurrection transformed Jesus' frightened disciples into bold witnesses who spread the gospel throughout the world."
  },
  {
    title: "Birth of the Church",
    year: "AD 30–33",
    type: "major",
    books: ["Acts"],
    passages: ["Acts 2"],
    description: "The Holy Spirit comes at Pentecost, empowering Jesus' followers to proclaim the gospel and forming the early Church.",
    keyTheme: "God's presence now dwells within His people through the Holy Spirit, continuing His mission in the world.",
    jesus: "The risen Christ continues His work through His Church as His followers become witnesses of the gospel.",
    funFact: "At Pentecost, people from many nations heard the gospel in their own languages, showing God's salvation is for all peoples."
  },
  {
    title: "New Creation",
    year: "Future Promise",
    type: "major",
    books: ["Revelation"],
    passages: ["Revelation 21:1-5"],
    description: "God restores creation, removes the effects of sin, and dwells forever with His people in the renewed heavens and earth.",
    keyTheme: "The Bible ends where it began: God dwelling with humanity in a restored creation.",
    jesus: "Jesus makes all things new and reigns forever as King over God's eternal kingdom.",
    funFact: "The Bible begins with a garden in Genesis and ends with a restored creation in Revelation, showing God's complete redemption plan."
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

    <h3><i class="fa-solid fa-book-open"></i> Event Summary</h3>
    <p>${e.description}</p>

    <h3><i class="fa-solid fa-bullseye"></i> Key Theme</h3>
    <p>${e.keyTheme}</p>
    
    <h3>
    <i class="fa-solid fa-cross jesus-icon"></i>
    Connection To Jesus
    </h3>
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