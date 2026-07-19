 const otAbbr = {
      "Genesis": "Gen", "Exodus": "Exod", "Leviticus": "Lev", "Numbers": "Num", "Deuteronomy": "Deut",
      "Joshua": "Josh", "Judges": "Judg", "Ruth": "Ruth", "1 Samuel": "1Sam", "2 Samuel": "2Sam",
      "1 Kings": "1Kings", "2 Kings": "2Kings", "1 Chronicles": "1Chr", "2 Chronicles": "2Chr",
      "Ezra": "Ezra", "Nehemiah": "Neh", "Esther": "Esth", "Job": "Job", "Psalms": "Ps", "Proverbs": "Prov",
      "Ecclesiastes": "Eccl", "Song of Solomon": "Song", "Isaiah": "Isa", "Jeremiah": "Jer", "Lamentations": "Lam",
      "Ezekiel": "Ezek", "Daniel": "Dan", "Hosea": "Hos", "Joel": "Joel", "Amos": "Amos", "Obadiah": "Obad",
      "Jonah": "Jonah", "Micah": "Mic", "Nahum": "Nahum", "Habakkuk": "Hab", "Zephaniah": "Zeph",
      "Haggai": "Hag", "Zechariah": "Zech", "Malachi": "Mal"
    };

    const ntAbbr = {
      "Matthew": "Matt", "Mark": "Mark", "Luke": "Luke", "John": "John", "Acts": "Acts", "Romans": "Rom",
      "1 Corinthians": "1Cor", "2 Corinthians": "2Cor", "Galatians": "Gal", "Ephesians": "Eph",
      "Philippians": "Phil", "Colossians": "Col", "1 Thessalonians": "1Thess", "2 Thessalonians": "2Thess",
      "1 Timothy": "1Tim", "2 Timothy": "2Tim", "Titus": "Titus", "Philemon": "Philem", "Hebrews": "Heb",
      "James": "Jas", "1 Peter": "1Pet", "2 Peter": "2Pet", "1 John": "1John", "2 John": "2John",
      "3 John": "3John", "Jude": "Jude", "Revelation": "Rev"
    };

    const seededBooks = [
      { name: "Genesis", testament: "ot", tags: ["Law", "History", "Noahic", "Abrahamic"], overview: "The foundational book of origins, highlighting creation, the fall, and God establishing the structural covenant lineage through Abraham, Isaac, and Jacob.", history: "Written during the wilderness wanderings around 1440 BC by Moses, setting the historical baseline for Israel's identity.", culture: "Uses Ancient Near Eastern narrative structures, lineage models, and foundational legal pact structures.", connection: "Jesus is the ultimate Promised Seed of the woman who crushes the serpent's head, and the lineage of blessing through Abraham fulfilling all national plans." },
      { name: "Exodus", testament: "ot", tags: ["Law", "History", "Mosaic"], overview: "Chronicles the rescue of Israel from physical slavery, advancing into the holy mountain covenant where God gives the Ten Commandments.", history: "Sets up structural boundaries for Israel transitioning out of Egyptian regional control.", culture: "Features historical ancient Near Eastern vassal treaty mechanics.", connection: "Jesus functions as the definitive Passover Lamb whose sacrificial blood averts judgment, leading a cosmic exodus out of sin." },
      { name: "Isaiah", testament: "ot", tags: ["Prophet", "New", "Davidic"], overview: "A massive visionary scroll highlighting judgments on rebellion, but constantly pivoting to a future Messiah who establishes the New Covenant.", history: "Set in Jerusalem during the existential threat of Assyrian geopolitical expansion (740–680 BC).", culture: "High-tier Hebrew poetic prophecy, featuring courtly idioms and elaborate metaphorical descriptions.", connection: "Jesus is perfectly detailed as the Suffering Servant who bears our griefs and the ruling Immanuel born of a virgin." },
      { name: "Jeremiah", testament: "ot", tags: ["Prophet", "New"], overview: "The weeping prophet witnessing the catastrophic fall of Jerusalem, famously predicting a day where God writes a New Covenant directly onto human hearts.", history: "Spans the direct collapse and conquest of Jerusalem by Babylon around 586 BC.", culture: "Heavy prophetic performance art, lament patterns, and covenant legal indictments.", connection: "Jesus launches and seals the dynamic New Covenant during the Last Supper, rewriting divine law inside the human heart." },
      { name: "Matthew", testament: "nt", tags: ["Gospel", "New", "Abrahamic", "Davidic"], overview: "Perfect bridge book bridging the Old and New testaments, introducing Jesus explicitly as the royal offspring of Abraham and David fulfilling all covenants.", history: "Composed post-resurrection to display the fulfillment of prophecy to second-generation Judean believers.", culture: "Strong rabbinic argumentation styles, systematic structural discourses, and Kingdom parablistic frameworks.", connection: "Jesus acts as the royal true King of Kings, bringing the actualized Kingdom of God directly into reality." },
      { name: "Romans", testament: "nt", tags: ["Epistle", "New", "Abrahamic"], overview: "The foundational theological treatise outlining how Jews and Gentiles are unified inside God's redemptive purpose through faith.", history: "Written by Paul around 57 AD to the strategic Christian hub in Rome before his imprisonment.", culture: "Employs diatribe rhetorical styles, legal framework argumentation, and Greco-Roman letter structures.", connection: "Jesus is our absolute propitiation and justification—the Second Adam who brings life where the first brought death." },
      { name: "Revelation", testament: "nt", tags: ["Apocalyptic", "New"], overview: "The grand finale where all paths conclude, showing the total destruction of evil and the permanent establishment of the New Creation.", history: "Written by John while exiled on the island of Patmos during periods of heavy Roman imperial pushback.", culture: "Features rich cosmic imagery, apocalyptic symbolic values, and extensive Old Testament metaphor loops.", connection: "Jesus shines explicitly as the Alpha and Omega, the Lion of Judah, and the slain yet triumphant Lamb reigning forever over the New Creation." }
    ];

    const completeLibrary = [];
    let currentContextSubTab = 'history';
    
    // Inject and reconcile the full canon into complete library array
    Object.keys(otAbbr).forEach(name => {
      const match = seededBooks.find(b => b.name === name);
      if (match) completeLibrary.push(match);
      else completeLibrary.push({ name, testament: "ot", tags: ["History"], overview: `Systematic overview framework content assigned to ${name}.`, history: `Dating matrices and historical timeline markers for ${name}.`, culture: `Literary genre profiles and targeted sub-context analysis for ${name}.`, connection: `Messianic connections and covenant themes running directly through ${name}.` });
    });

    Object.keys(ntAbbr).forEach(name => {
      const match = seededBooks.find(b => b.name === name);
      if (match) completeLibrary.push(match);
      else completeLibrary.push({ name, testament: "nt", tags: ["Epistle"], overview: `Systematic overview framework content assigned to ${name}.`, history: `Dating matrices and historical timeline markers for ${name}.`, culture: `Literary genre profiles and targeted sub-context analysis for ${name}.`, connection: `Messianic connections and covenant themes running directly through ${name}.` });
    });

    let currentSelectedBook = completeLibrary[0];
    let activeFilterTags = [];

    function initializeSidebar() {
      const otContainer = document.getElementById('otList');
      const ntContainer = document.getElementById('ntList');
      
      otContainer.innerHTML = '';
      ntContainer.innerHTML = '';

      completeLibrary.forEach(book => {
        const btn = document.createElement('div');
        btn.className = `book-item ${book.testament}-book`;
        btn.id = `book-btn-${book.name.replace(/ /g, '_')}`;
        btn.textContent = book.testament === 'ot' ? otAbbr[book.name] : ntAbbr[book.name];
        btn.setAttribute('title', book.name);
        btn.onclick = () => selectBook(book.name);
        
        if (book.testament === 'ot') otContainer.appendChild(btn);
        else ntContainer.appendChild(btn);
      });
      
      updateBookSelectionUI();
    }

    function selectBook(bookName) {
      const match = completeLibrary.find(b => b.name === bookName);
      if (match) {
        currentSelectedBook = match;
        updateBookSelectionUI();
        updateDashboardCards();
        closeDeepDive();
      }
    }

    function updateBookSelectionUI() {
      document.querySelectorAll('.book-item').forEach(el => el.classList.remove('active-selection'));
      const activeEl = document.getElementById(`book-btn-${currentSelectedBook.name.replace(/ /g, '_')}`);
      if (activeEl) activeEl.classList.add('active-selection');
      
      document.getElementById('activeBookTitle').textContent = currentSelectedBook.name;
    }

    function updateDashboardCards() {
      document.getElementById('cardOverviewBody').textContent = currentSelectedBook.overview;
      document.getElementById('cardConnectionBody').textContent = currentSelectedBook.connection;
      document.getElementById('panelHistory').textContent = currentSelectedBook.history;
      document.getElementById('panelCulture').textContent = currentSelectedBook.culture;
    }

    // --- Sub-Tab Switching Logic inside Context Card ---
    function switchContextSubTab(event, subTab) {
      event.stopPropagation(); // Stop parent dashboard card click
      currentContextSubTab = subTab;

      document.querySelectorAll('.context-pill').forEach(p => p.classList.remove('active-pill'));
      document.querySelectorAll('.context-view-panel').forEach(p => p.classList.remove('active-panel'));

      if (subTab === 'history') {
        document.getElementById('pillHistory').classList.add('active-pill');
        document.getElementById('panelHistory').classList.add('active-panel');
      } else {
        document.getElementById('pillCulture').classList.add('active-pill');
        document.getElementById('panelCulture').classList.add('active-panel');
      }
    }

    function handleContextCardClick(event) {
      // Direct full panel trigger based on active state pill context
      openDeepDive(currentContextSubTab);
    }

    function openDeepDiveFromContext(event) {
      event.stopPropagation();
      openDeepDive(currentContextSubTab);
    }

    // --- Filter Consolidation Logic ---
    const tagInput = document.getElementById('tagInput');
    tagInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && this.value.trim() !== '') {
        addFilterTag(this.value.trim());
        this.value = '';
      }
    });

    function addFilterTag(tagText) {
      const cleanTag = tagText.toLowerCase();
      if (!activeFilterTags.includes(cleanTag)) {
        activeFilterTags.push(cleanTag);
        renderTagsConsole();
        evaluateLibraryFilters();
      }
    }

    function removeFilterTag(tagText) {
      activeFilterTags = activeFilterTags.filter(t => t !== tagText.toLowerCase());
      renderTagsConsole();
      evaluateLibraryFilters();
    }

    function renderTagsConsole() {
      const container = document.getElementById('activeTagsList');
      container.innerHTML = '';
      
      activeFilterTags.forEach(tag => {
        const pill = document.createElement('div');
        pill.className = 'pill-tag';
        pill.innerHTML = `${tag} <i class="fa-solid fa-xmark" onclick="removeFilterTag('${tag}')"></i>`;
        container.appendChild(pill);
      });
    }

    function evaluateLibraryFilters() {
      if (activeFilterTags.length === 0) {
        completeLibrary.forEach(book => {
          const el = document.getElementById(`book-btn-${book.name.replace(/ /g, '_')}`);
          if (el) el.className = `book-item ${book.testament}-book`;
        });
        return;
      }

      completeLibrary.forEach(book => {
        const el = document.getElementById(`book-btn-${book.name.replace(/ /g, '_')}`);
        if (!el) return;

        const matchesAll = activeFilterTags.every(filter => 
          book.tags.some(bookTag => bookTag.toLowerCase().includes(filter))
        );

        if (matchesAll) {
          el.className = `book-item ${book.testament}-book highlighted`;
          el.classList.remove('dimmed');
        } else {
          el.className = `book-item ${book.testament}-book dimmed`;
          el.classList.remove('highlighted');
        }
      });
    }

    // --- Drill-Down Panel View Matrix ---
    function openDeepDive(sectionType) {
      const grid = document.getElementById('dashboardGrid');
      const panel = document.getElementById('deepDivePanel');
      const titleEl = document.getElementById('deepDiveTitle');
      const bodyEl = document.getElementById('deepDiveBody');

      let title = "";
      let template = "";

      switch(sectionType) {
        case 'overview':
          title = "Overview & Thematic Structural Pillars";
          template = `<p class="deep-dive-text">${currentSelectedBook.overview}</p>
                      <br><hr style="border:0; border-top:1px solid #e2e8f0; margin:20px 0;"><br>
                      <h3>Structural Intent</h3>
                      <p style="margin-top:10px; color:var(--text-muted)">This pane outlines how this specific historical scroll forms building block links inside the overarching textual architecture.</p>`;
          break;
        case 'connection':
          title = "Messianic Motifs & The Jesus Connection";
          template = `<p class="deep-dive-text">${currentSelectedBook.connection}</p>
                      <br><hr style="border:0; border-top:1px solid #e2e8f0; margin:20px 0;"><br>
                      <h3>Covenantal Intersect</h3>
                      <p style="margin-top:10px; color:var(--text-muted)">Maps the redemptive lineage and explicit typographic links tying directly into the person and mission of Jesus Christ.</p>`;
          break;
        case 'history':
          title = "Chronological Boundaries & Historical Settings";
          template = `<p class="deep-dive-text">${currentSelectedBook.history}</p>
                      <p style="margin-top:15px; color:var(--text-muted)">Unpacks geopolitical and cultural shifts framing authorship environments (empires, wilderness paths, and diaspora frameworks).</p>`;
          break;
        case 'culture':
          title = "Cultural Paradigms & Literary Genres";
          template = `<p class="deep-dive-text">${currentSelectedBook.culture}</p>
                      <p style="margin-top:15px; color:var(--text-muted)">Analyzes ancient Near Eastern and Greco-Roman structural parameters (e.g., poetic wisdom motifs, legal codexes, epistles) to accurately trace intended reader interpretation metrics.</p>`;
          break;
      }

      titleEl.textContent = title;
      bodyEl.innerHTML = template;

      grid.style.display = 'none';
      panel.style.display = 'flex';
    }

    function closeDeepDive() {
      document.getElementById('dashboardGrid').style.display = 'grid';
      document.getElementById('deepDivePanel').style.display = 'none';
    }

    initializeSidebar();
    updateDashboardCards();