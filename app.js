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
    title: "Jacob Becomes Israel",
    year: "Genesis 25–35",
    type: "minor",
    books: ["Genesis"],
    passages: ["Genesis 32:28", "Genesis 35:10"],
    description: "God continues His covenant promise through Jacob, whose twelve sons become the foundation of the twelve tribes of Israel.",
    keyTheme: "God's promises continue through generations despite human weakness and failure.",
    jesus: "God's covenant line leads to Jesus, the promised descendant who brings blessing to all nations.",
    funFact: "Jacob's name was changed to Israel, and his twelve sons became the ancestors of the twelve tribes of Israel."
  },
  {
    title: "God Forms Israel as His People",
    year: "1446 BC",
    type: "major",
    books: ["Exodus", "Leviticus", "Deuteronomy"],
    passages: ["Exodus 19:5-6", "Deuteronomy 7:6"],
    description: "God forms the descendants of Abraham into a covenant nation, calling Israel to know Him, reflect His character, and bless the nations.",
    keyTheme: "God chooses Israel to reveal His purposes and serve as His witness among the nations.",
    jesus: "Jesus fulfills Israel's calling by becoming the faithful Son who brings God's blessing to all peoples.",
    funFact: "Israel was called a 'kingdom of priests,' showing their purpose was to represent God to the world."
  },
  {
    title: "Exodus",
    year: "1446 BC",
    type: "major",
    books: ["Exodus", "Leviticus", "Numbers", "Deuteronomy"],
    passages: [
      "Exodus 3",
      "Exodus 12",
      "Exodus 19-20"
    ],
    description: "God calls Moses to deliver Israel from slavery in Egypt, rescues His people through the Passover, and establishes His covenant with them at Mount Sinai.",
    keyTheme: "God redeems His people and forms them into a covenant nation for His purposes.",
    jesus: "The Passover lamb points to Jesus, whose sacrifice brings ultimate freedom from sin.",
    funFact: "Moses' life is divided into three 40-year periods: Egypt, Midian, and leading Israel through the wilderness."
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
    funFact: "The first tablets were broken by Moses after Israel worshiped the golden calf. God later gave a second set of tablets that were kept in the Ark of the Covenant."
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
    title: "The Kingdom Divided",
    year: "930 BC",
    type: "major",
    books: ["1 Kings", "2 Chronicles"],
    passages: ["1 Kings 12"],
    description: "After Solomon's reign, Israel divides into the Northern Kingdom and Southern Kingdom because of rebellion and unfaithfulness.",
    keyTheme: "A divided kingdom reveals the consequences of rejecting God's rule and the need for a faithful King.",
    jesus: "Jesus comes as the greater Son of David who restores God's kingdom and gathers God's people together.",
    funFact: "The Northern Kingdom had many kings, but none were described as faithful to God in the same way as David."
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
    title: "Ministry of Jeremiah",
    year: "627–586 BC",
    type: "minor",
    books: ["Jeremiah"],
    passages: ["Jeremiah 31:31-34"],
    description: "Jeremiah warns Judah of coming judgment while announcing God's promise of a New Covenant.",
    keyTheme: "God judges rebellion but promises restoration and a renewed relationship with His people.",
    jesus: "The New Covenant promise finds its fulfilment through Jesus' sacrifice and the forgiveness He brings.",
    funFact: "Jeremiah is known as the 'weeping prophet' because he grieved over Judah's rejection of God."
  },
  {
    title: "Babylonian Exile",
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
    title: "Jesus' Ministry",
    year: "AD 27–30",
    type: "major",
    books: ["Matthew", "Mark", "Luke", "John"],
    passages: ["Mark 1:14-15", "Luke 4:18-19"],
    description: "Jesus announces the arrival of God's kingdom, teaches truth, performs miracles, and reveals God's character through His life and ministry.",
    keyTheme: "Jesus reveals God's kingdom and shows that God's saving purpose has arrived through Him.",
    jesus: "Jesus is the promised Messiah, the Son of God, and the King who brings God's kingdom to humanity.",
    funFact: "Jesus' ministry lasted about three years, yet it transformed history and continues to impact billions of people."
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
    title: "Pentecost: The Church Begins",
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
    title: "The Gospel Spreads to the Nations",
    year: "AD 30–60",
    type: "major",
    books: ["Acts"],
    passages: ["Acts 1:8", "Acts 13"],
    description: "The Holy Spirit empowers the early Church to spread the gospel from Jerusalem to Judea, Samaria, and the nations.",
    keyTheme: "God's salvation plan expands beyond Israel to include people from every nation.",
    jesus: "The risen Jesus continues His mission through His Church as His witnesses proclaim the gospel.",
    funFact: "The book of Acts begins in Jerusalem and ends with the gospel reaching Rome, showing the expansion of God's mission."
  },
  // {
  //   title: "The Apostles' Writings",
  //   year: "AD 50–95",
  //   type: "major",
  //   books: [
  //     "Romans",
  //     "1 Corinthians",
  //     "Hebrews",
  //     "James",
  //     "1 Peter",
  //     "Revelation"
  //   ],
  //   passages: [
  //     "Romans 1:16",
  //     "1 Corinthians 15:1-4",
  //     "Revelation 21:1-5"
  //   ],
  //   description: "The apostles teach the Church the meaning of Jesus' life, death, and resurrection while guiding believers to live faithfully as they await His return.",
  //   keyTheme: "God's people live between Christ's first coming and His future return, continuing His mission with hope.",
  //   jesus: "Jesus is the risen Lord who builds His Church and will return to complete God's kingdom.",
  //   funFact: "The New Testament letters were written to real churches facing real struggles, making their teachings practical for believers today."
  // },  
  {
    title: "New Creation",
    year: "Future Promise",
    type: "major",
    books: ["Revelation"],
    passages: ["Revelation 21:1-5", "Revelation 22:1-5"],
    description: "God restores creation, removes the effects of sin, and brings His people into eternal fellowship with Him in the renewed heavens and earth.",
    keyTheme: "The Bible ends with God's original purpose fulfilled: dwelling with humanity in a restored creation.",
    jesus: "Jesus makes all things new and reigns forever as the King over God's eternal kingdom.",
    funFact: "The Bible begins with a garden in Genesis and ends with a restored creation in Revelation, showing God's complete redemption story."
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