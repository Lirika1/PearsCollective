/* Pearls Collective — language layer
   ─────────────────────────────────────────────────────────────────────────
   Albanian (sq) is the default. English (en) is a full translation: every key
   below exists in both. If you add one, add it to both.

   In markup, mark a translatable string with data-i18n:
       <h1 data-i18n="about.title">Historia jonë</h1>
   For attributes, data-i18n-attr="attribute:key", comma separated:
       <input data-i18n-attr="placeholder:contact.form.namePh">

   Product names, descriptions and details live in products.js, next to the
   product they belong to — not here.
   ───────────────────────────────────────────────────────────────────────── */

const STRINGS = {
  sq: {
    lang: "sq", locale: "sq-AL", htmlLang: "sq",

    announce: "Transport falas mbi €60 · Kosovë, Shqipëri dhe Maqedoni",

    nav: {
      new: "Të reja", bridal: "Nuse", earrings: "Vathë", necklaces: "Gjerdanë",
      bracelets: "Byzylykë", hair: "Bizhuteri flokësh", about: "Rreth nesh",
      contact: "Kontakt", menu: "Menyja", close: "Mbyll", search: "Kërko",
      account: "Llogaria", bag: "Shporta", language: "Gjuha",
      langSq: "Shqip", langEn: "Anglisht"
    },

    cart: {
      title: "Shporta juaj",
      empty: "Shporta juaj është bosh —<br>copët tuaja po presin.",
      shopBtn: "Shiko koleksionin",
      subtotal: "Nëntotali",
      free: "Porosia juaj dërgohet falas ✦",
      freeFrom: "Transport falas për porositë mbi €60",
      checkout: "Vazhdo te pagesa",
      decrease: "Zvogëlo", increase: "Shto", remove: "Hiq",
      added: "u shtua në shportë",
      accountSoon: "Llogaritë vijnë së shpejti"
    },

    search: {
      placeholder: "Kërko bizhuteri…",
      hint: "Provoni “gjerdan”, “set nuseje” ose “vathë”…",
      none: "Asgjë nuk u gjet për",
      tryAnother: "— provoni një fjalë tjetër."
    },

    wish: { saved: "U ruajt te të preferuarat", removed: "U hoq nga të preferuarat", add: "Ruaj te të preferuarat" },

    product: {
      badgeNew: "E re",
      addToBag: "Shto në shportë",
      from: "Nga ",
      inStock: "Në gjendje — dërgohet brenda 1–2 ditësh pune",
      quantity: "Sasia",
      detailsTitle: "Detajet dhe materialet",
      deliveryTitle: "Dërgesa",
      deliveryBody: "Transport falas për porositë mbi €60 në Kosovë, Shqipëri dhe Maqedoni. Dërgesa standarde €3, brenda 2–4 ditësh pune. Çdo porosi paketohet me dorë në paketimin tonë.",
      returnsTitle: "Kthimet",
      returnsBody: "Ndryshuat mendje? Copët e pambajtura, në paketimin origjinal, mund të kthehen brenda 14 ditësh nga dërgesa. Na kontaktoni dhe ne e rregullojmë gjithçka.",
      home: "Ballina",
      relatedEyebrow: "Plotësoni pamjen",
      relatedTitle: "Mund t'ju pëlqejnë edhe"
    },

    home: {
      heroEyebrow: "Bizhuteri nuseje · Krijuar me dashuri",
      heroTitle: 'Bizhuteri për momentin tuaj <em>përjetë</em>',
      heroQuote: "“Copë të përjetshme, krijuar për ta plotësuar pamjen tuaj si nuse.”",
      heroCta: "Shiko koleksionin e nuseve",
      catsEyebrow: "Shfleto sipas kategorisë",
      catsTitle: "Gjeni copën tuaj",
      catBridal: "Nuse", catBridalSub: "Bizhuteri krijuar për nusen.",
      catEarrings: "Vathë", catEarringsSub: "Copë elegante që plotësojnë pamjen tuaj.",
      catNecklaces: "Gjerdanë", catNecklacesSub: "Prekje të holla dhe të përjetshme.",
      catHair: "Bizhuteri flokësh", catHairSub: "Detaji i duhur për flokët tuaj në dasmë.",
      shopNow: "Shiko",
      featuredEyebrow: "Koleksioni i zgjedhur",
      featuredTitle: "Përzgjedhja për nuse",
      featuredSub: "“Zbuloni koleksionin tonë të copëve të përjetshme, krijuar për momentet tuaja të paharrueshme.”",
      viewAll: "Shiko të gjitha bizhuteritë",
      editorialEyebrow: "Pearls Collective",
      editorialTitle: "Krijuar për momentin",
      editorialQuote: "“Sepse detajet më të vogla bëhen ato më të paharrueshmet.”",
      editorialCta: "Zbuloni Pearls Collective",
      bridalEyebrow: "Koleksioni i nuseve",
      bridalTitle: "Për nusen",
      bridalBody: "Çdo nuse meriton bizhuteri që ndihen të bëra për të. Nga setet e plota te detajet më të holla — çdo copë vjen në kutinë tonë të veçantë, gati për ditën tuaj.",
      listEarrings: "Vathë", listNecklaces: "Gjerdanë", listBracelets: "Byzylykë",
      listHair: "Aksesorë flokësh", listSets: "Sete nuseje",
      shop: "Shiko", soon: "Së shpejti",
      shopAllBridal: "Shiko të gjitha për nuse",
      igEyebrow: "Instagram",
      igTitle: "Na ndiqni",
      igSub: "“Shihni si copët tona bëhen pjesë e momenteve tuaja më të bukura.”",
      newsEyebrow: "Newsletter",
      newsTitle: "Bashkohuni me Collective",
      newsSub: "“Jini të parat që zbuloni copë të reja, frymëzim për nuse dhe koleksione ekskluzive.”",
      newsPlaceholder: "Adresa juaj e email-it",
      newsBtn: "Abonohu",
      newsThanks: "Mirë se vini te Collective — jeni në listë."
    },

    shop: {
      eyebrow: "Koleksioni",
      titleAll: "Të gjitha bizhuteritë",
      sortFeatured: "Rendit · Të zgjedhurat",
      sortPriceAsc: "Çmimi · Nga i ulëti",
      sortPriceDesc: "Çmimi · Nga i larti",
      sortNew: "Më të rejat në fillim",
      sortLabel: "Rendit copët",
      countOne: "1 copë", countMany: "{n} copë",
      empty: "Ende asnjë copë në këtë përzgjedhje.",
      hairEyebrow: "Bizhuteri flokësh",
      hairTitle: "Detaji i duhur, së shpejti",
      hairBody: "“Përzgjedhja jonë e bizhuterive për flokë po përgatitet me kujdes. Për stilim flokësh për nuse dhe kërkesa të veçanta, do të donim t'ju dëgjonim.”",
      hairCta: "Pyetje për nuse",
      subs: {
        all: "Copë të përjetshme për nuse, shoqëruese dhe raste të bukura.",
        new: "Të porsaardhurat — fresh nga ateliera.",
        bridal: "Sete të plota dhe detaje të çmuara, krijuar për nusen.",
        earrings: "Copë elegante që plotësojnë pamjen tuaj si nuse.",
        necklaces: "Prekje të holla dhe të përjetshme.",
        bracelets: "Shkëlqim i hollë për dorën tuaj — vetëm ose të shtresuara.",
        hair: "Detaji i duhur për flokët tuaj në dasmë."
      },
      cats: { all: "Të gjitha" }
    },

    about: {
      eyebrow: "Historia jonë",
      title: "Historia pas<br>Pearls Collective",
      drop: "“Pearls Collective nisi nga një bindje e thjeshtë — se detajet më të vogla bëhen ato më të paharrueshmet.”",
      p1: "Nisëm nga dashuria për momentin kur nusja e sheh veten të plotë: fustani, flokët, dhe pastaj — shkëlqimi. Ajo prekje e fundit që i bën të gjitha reale. Nuk gjenim dot bizhuteri që ndiheshin njëkohësisht luksoze dhe personale, të përjetshme por të bëra për sot. Prandaj i krijuam vetë.",
      p2: "Çdo copë në koleksionin tonë zgjidhet me të njëjtin kujdes që ju vini në ditën tuaj. Kristale që kapin dritën e qirinjve në darkë. Vathë që kornizojnë fytyrën tuaj në fotografi që do t'i ruani përjetë. Sete që vijnë në kutinë tonë smerald — sepse hapja e paketimit duhet të ndihet si dhuratë, edhe kur ia bëni vetes.",
      p3: "Nga Kosova, me dashuri — për nuset, shoqëruesit dhe çdo grua që shënon një moment që ia vlen të mbahet mend.",
      believeEyebrow: "Në çfarë besojmë",
      believeTitle: "Punuar bukur, zgjedhur me kujdes",
      believeP1: "Besojmë se bizhuteritë duhen mbajtur, jo ruajtur. Se eleganca është e qetë. Se një copë nuk ka nevojë të kushtojë një pasuri për t'u çmuar si e tillë.",
      believeP2: "Çdo dizajn është hipoalergjik dhe pa nikel, i punuar që të ndihet i papeshë përgjatë festimeve më të gjata — nga fotoja e parë në mëngjes te vallëzimi i fundit natën.",
      believeCta: "Zbuloni koleksionin",
      v1Title: "Dizajn i përjetshëm",
      v1Body: "Copë që do të duken po aq të drejta në fotografitë tuaja pas tridhjetë vjetësh sa sot.",
      v2Title: "Bërë për t'u mbajtur",
      v2Body: "Të lehta si pupla, hipoalergjike dhe komode nga ceremonia te festa.",
      v3Title: "Me ju në mendje",
      v3Body: "Këshilla stilimi personale për çdo nuse — sepse asnjë moment nuk është njësoj.",
      dayEyebrow: "Për ditën tuaj",
      dayTitle: "Momenti juaj, i plotësuar",
      dayQuote: "“Do të donim të ishim një pjesë e vogël e ditës suaj më të madhe.”",
      dayCta: "Shiko për nuse"
    },

    contact: {
      eyebrow: "Do të donim t'ju dëgjonim",
      title: "Na kontaktoni",
      infoTitle: "Kontakt",
      infoBody: "Pyetje për një copë, për porosinë tuaj ose për stilimin e ditës suaj — çdo mesazh marrim përgjigje personalisht.",
      email: "Email", instagram: "Instagram", shipping: "Dërgesa", hours: "Orari",
      shippingVal: "Kosovë · Shqipëri · Maqedoni",
      hoursVal: "Hën – Sht, 9:00 – 19:00",
      bridalTitle: "Pyetje për nuse",
      bridalBody: "“Për pyetje stilimi, takime për nuse, kërkesa të veçanta ose ndihmë në zgjedhjen e copëve tuaja, do të donim t'ju dëgjonim.”",
      form: {
        name: "Emri", namePh: "Emri juaj",
        email: "Email", emailPh: "ju@email.com",
        topic: "Tema",
        t1: "Pyetje e përgjithshme", t2: "Pyetje për nuse", t3: "Porosia ime",
        t4: "Kërkesë e veçantë", t5: "Kthime",
        message: "Mesazhi",
        messagePh: "Na tregoni për ditën tuaj, pamjen tuaj, ose çdo gjë ku mund të ndihmojmë…",
        send: "Dërgo mesazhin",
        missing: "Ju lutemi plotësoni emrin, email-in dhe mesazhin.",
        thanks: "Faleminderit — e morëm mesazhin tuaj dhe do t'ju përgjigjemi brenda një dite pune."
      }
    },

    checkout: {
      eyebrow: "Gati e juaja",
      title: "Pagesa",
      emptyTitle: "Shporta juaj është bosh",
      emptyBody: "“Copët tuaja ende po presin të gjenden.”",
      emptyCta: "Shiko koleksionin",
      contact: "Kontakti",
      firstName: "Emri", lastName: "Mbiemri", email: "Email", phone: "Telefoni",
      delivery: "Dërgesa", address: "Adresa", city: "Qyteti", country: "Shteti",
      kosovo: "Kosovë", albania: "Shqipëri", macedonia: "Maqedonia e Veriut",
      payment: "Pagesa", method: "Mënyra",
      cod: "Para në dorë", transfer: "Transfertë bankare",
      payNote: "Kjo është një dyqan në fazë provë — asnjë pagesë nuk merret online. Çdo porosi e konfirmojmë personalisht para se ta dërgojmë.",
      place: "Porosit —",
      missing: "Ju lutemi plotësoni të dhënat e kontaktit dhe të dërgesës.",
      summary: "Përmbledhja e porosisë",
      qty: "Sasia",
      subtotal: "Nëntotali", shipping: "Dërgesa", free: "Falas", total: "Totali",
      doneEyebrow: "Porosia u pranua",
      doneTitle: "Faleminderit",
      doneBody: "“Copët tuaja po paketohen me dashuri. Do t'ju kontaktojmë për të konfirmuar dërgesën.”",
      doneCta: "Kthehu në ballinë"
    },

    footer: {
      tagline: "Bizhuteri të përjetshme për momentin tuaj përjetë — krijuar me dashuri, mbajtur për një jetë.",
      shop: "Shfleto", allJewellery: "Të gjitha bizhuteritë",
      help: "Ndihmë", faq: "Pyetje të shpeshta", deliveryLink: "Dërgesa", returnsLink: "Kthimet",
      newsTitle: "Bashkohuni me Collective",
      newsBody: "Copë të reja, frymëzim për nuse dhe koleksione ekskluzive.",
      follow: "Na ndiqni",
      rights: "© 2026 Pearls Collective. Të gjitha të drejtat e rezervuara.",
      privacy: "Politika e privatësisë", terms: "Kushtet e përdorimit"
    },

    meta: {
      home: { title: "Pearls Collective — Bizhuteri nuseje për momentin tuaj përjetë", desc: "Bizhuteri të përjetshme për nuse — gjerdanë, vathë, byzylykë dhe sete. Transport falas mbi €60 në Kosovë, Shqipëri dhe Maqedoni." },
      shop: { title: "Bizhuteritë — Pearls Collective" },
      about: { title: "Rreth nesh — Pearls Collective" },
      contact: { title: "Kontakt — Pearls Collective" },
      checkout: { title: "Pagesa — Pearls Collective" }
    }
  },

  en: {
    lang: "en", locale: "en-IE", htmlLang: "en",

    announce: "Free shipping over €60 · Kosovo, Albania & Macedonia",

    nav: {
      new: "New In", bridal: "Bridal", earrings: "Earrings", necklaces: "Necklaces",
      bracelets: "Bracelets", hair: "Hair Jewellery", about: "About",
      contact: "Contact", menu: "Menu", close: "Close", search: "Search",
      account: "Account", bag: "Shopping bag", language: "Language",
      langSq: "Albanian", langEn: "English"
    },

    cart: {
      title: "Your Bag",
      empty: "Your bag is empty —<br>your forever pieces await.",
      shopBtn: "Shop the collection",
      subtotal: "Subtotal",
      free: "Your order ships free ✦",
      freeFrom: "Free shipping on orders over €60",
      checkout: "Checkout",
      decrease: "Decrease", increase: "Increase", remove: "Remove",
      added: "added to bag",
      accountSoon: "Accounts are coming soon"
    },

    search: {
      placeholder: "Search jewellery…",
      hint: "Try “necklace”, “bridal set” or “earrings”…",
      none: "Nothing found for",
      tryAnother: "— try another word."
    },

    wish: { saved: "Saved to wishlist", removed: "Removed from wishlist", add: "Add to wishlist" },

    product: {
      badgeNew: "New",
      addToBag: "Add to Bag",
      from: "From ",
      inStock: "In stock — ships within 1–2 working days",
      quantity: "Quantity",
      detailsTitle: "Details & Materials",
      deliveryTitle: "Delivery",
      deliveryBody: "Free shipping on orders over €60 to Kosovo, Albania & Macedonia. Standard delivery €3, arriving in 2–4 working days. Each order is wrapped by hand in our signature packaging.",
      returnsTitle: "Returns",
      returnsBody: "Changed your mind? Unworn pieces in original packaging may be returned within 14 days of delivery. Contact us and we will arrange everything for you.",
      home: "Home",
      relatedEyebrow: "Complete the look",
      relatedTitle: "You May Also Like"
    },

    home: {
      heroEyebrow: "Bridal Jewellery · Est. with love",
      heroTitle: 'Jewellery for your <em>forever</em> moment',
      heroQuote: "“Timeless pieces designed to complete your bridal look.”",
      heroCta: "Shop Bridal",
      catsEyebrow: "Shop by Category",
      catsTitle: "Find Your Piece",
      catBridal: "Bridal", catBridalSub: "Jewellery designed for the bride.",
      catEarrings: "Earrings", catEarringsSub: "Elegant pieces to frame your bridal look.",
      catNecklaces: "Necklaces", catNecklacesSub: "Delicate and timeless finishing touches.",
      catHair: "Hair Jewellery", catHairSub: "The perfect detail for your wedding hairstyle.",
      shopNow: "Shop Now",
      featuredEyebrow: "Featured Collection",
      featuredTitle: "The Bridal Edit",
      featuredSub: "“Discover our collection of timeless pieces created for your most unforgettable moments.”",
      viewAll: "View All Jewellery",
      editorialEyebrow: "Pearls Collective",
      editorialTitle: "Made for the Moment",
      editorialQuote: "“Because the smallest details can become the most unforgettable ones.”",
      editorialCta: "Discover Pearls Collective",
      bridalEyebrow: "The Bridal Collection",
      bridalTitle: "For the Bride",
      bridalBody: "Every bride deserves jewellery that feels made for her. From complete parures to delicate finishing touches — each piece arrives in our signature keepsake box, ready for your day.",
      listEarrings: "Earrings", listNecklaces: "Necklaces", listBracelets: "Bracelets",
      listHair: "Hair Accessories", listSets: "Bridal Sets",
      shop: "Shop", soon: "Soon",
      shopAllBridal: "Shop All Bridal",
      igEyebrow: "Instagram",
      igTitle: "Follow the Pearls",
      igSub: "“See how our pieces become part of your most beautiful moments.”",
      newsEyebrow: "Newsletter",
      newsTitle: "Join the Collective",
      newsSub: "“Be the first to discover new pieces, bridal inspiration and exclusive collections.”",
      newsPlaceholder: "Your email address",
      newsBtn: "Subscribe",
      newsThanks: "Welcome to the Collective — you're on the list."
    },

    shop: {
      eyebrow: "The Collection",
      titleAll: "All Jewellery",
      sortFeatured: "Sort · Featured",
      sortPriceAsc: "Price · Low to High",
      sortPriceDesc: "Price · High to Low",
      sortNew: "Newest First",
      sortLabel: "Sort products",
      countOne: "1 piece", countMany: "{n} pieces",
      empty: "No pieces found in this edit yet.",
      hairEyebrow: "Hair Jewellery",
      hairTitle: "The Perfect Detail, Arriving Soon",
      hairBody: "“Our hair jewellery edit is being lovingly curated. For bridal hair styling and custom requests, we would love to hear from you.”",
      hairCta: "Bridal Enquiries",
      subs: {
        all: "Timeless pieces for brides, bridesmaids and beautiful occasions.",
        new: "The latest arrivals — fresh from the atelier.",
        bridal: "Complete sets and precious details, designed for the bride.",
        earrings: "Elegant pieces to frame your bridal look.",
        necklaces: "Delicate and timeless finishing touches.",
        bracelets: "Fine sparkle for your wrist — worn alone or stacked.",
        hair: "The perfect detail for your wedding hairstyle."
      },
      cats: { all: "All" }
    },

    about: {
      eyebrow: "Our Story",
      title: "The Story Behind<br>Pearls Collective",
      drop: "“Pearls Collective began with a simple belief — that the smallest details become the most unforgettable ones.”",
      p1: "We started with a love for the moment a bride sees herself complete: the dress, the hair, and then — the sparkle. That final touch that makes everything feel real. We couldn't find jewellery that felt both luxurious and personal, timeless yet made for now. So we created it ourselves.",
      p2: "Every piece in our collection is chosen with the same care you put into your day. Crystals that catch candlelight at dinner. Earrings that frame your face in photographs you'll keep forever. Sets that arrive in our signature emerald box — because the unboxing should feel like a gift, even when it's a gift to yourself.",
      p3: "From Kosovo, with love — to brides, bridesmaids and every woman marking a moment worth remembering.",
      believeEyebrow: "What We Believe",
      believeTitle: "Beautifully Made, Thoughtfully Chosen",
      believeP1: "We believe jewellery should be worn, not saved. That elegance is quiet. That a piece doesn't need to cost a fortune to be treasured for one.",
      believeP2: "Each design is hypoallergenic and nickel-free, finished to feel weightless through the longest of celebrations — from the first photograph in the morning to the last dance at night.",
      believeCta: "Explore the collection",
      v1Title: "Timeless Design",
      v1Body: "Pieces that will feel as right in your photographs in thirty years as they do today.",
      v2Title: "Made to Be Worn",
      v2Body: "Featherlight, hypoallergenic and comfortable from the ceremony to the celebration.",
      v3Title: "With You in Mind",
      v3Body: "Personal styling advice for every bride — because no two forever moments are the same.",
      dayEyebrow: "For Your Day",
      dayTitle: "Your Moment, Completed",
      dayQuote: "“We would love to be a small part of your biggest day.”",
      dayCta: "Shop Bridal"
    },

    contact: {
      eyebrow: "We'd love to hear from you",
      title: "Get in Touch",
      infoTitle: "Contact",
      infoBody: "Questions about a piece, your order, or styling for your day — we answer every message personally.",
      email: "Email", instagram: "Instagram", shipping: "Shipping", hours: "Hours",
      shippingVal: "Kosovo · Albania · Macedonia",
      hoursVal: "Mon – Sat, 9:00 – 19:00",
      bridalTitle: "Bridal Enquiries",
      bridalBody: "“For styling questions, bridal appointments, custom requests or help choosing your perfect pieces, we'd love to hear from you.”",
      form: {
        name: "Name", namePh: "Your name",
        email: "Email", emailPh: "you@email.com",
        topic: "Topic",
        t1: "General question", t2: "Bridal enquiry", t3: "My order",
        t4: "Custom request", t5: "Returns",
        message: "Message",
        messagePh: "Tell us about your day, your look, or anything we can help with…",
        send: "Send Message",
        missing: "Please fill in your name, email and message.",
        thanks: "Thank you — we've received your message and will reply within one working day."
      }
    },

    checkout: {
      eyebrow: "Almost yours",
      title: "Checkout",
      emptyTitle: "Your bag is empty",
      emptyBody: "“Your forever pieces are still waiting to be found.”",
      emptyCta: "Shop the Collection",
      contact: "Contact",
      firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone",
      delivery: "Delivery", address: "Address", city: "City", country: "Country",
      kosovo: "Kosovo", albania: "Albania", macedonia: "North Macedonia",
      payment: "Payment", method: "Method",
      cod: "Cash on delivery", transfer: "Bank transfer",
      payNote: "This is a preview store — no payment is taken online. We confirm every order personally before it ships.",
      place: "Place Order —",
      missing: "Please complete your contact and delivery details.",
      summary: "Order Summary",
      qty: "Qty",
      subtotal: "Subtotal", shipping: "Shipping", free: "Free", total: "Total",
      doneEyebrow: "Order received",
      doneTitle: "Thank You",
      doneBody: "“Your pieces are being wrapped with love. We'll be in touch to confirm delivery.”",
      doneCta: "Back to Home"
    },

    footer: {
      tagline: "Timeless bridal jewellery for your forever moment — designed with love, worn for a lifetime.",
      shop: "Shop", allJewellery: "All Jewellery",
      help: "Help", faq: "FAQ", deliveryLink: "Delivery", returnsLink: "Returns",
      newsTitle: "Join the Collective",
      newsBody: "New pieces, bridal inspiration and exclusive collections.",
      follow: "Follow",
      rights: "© 2026 Pearls Collective. All rights reserved.",
      privacy: "Privacy Policy", terms: "Terms & Conditions"
    },

    meta: {
      home: { title: "Pearls Collective — Bridal Jewellery for Your Forever Moment", desc: "Timeless bridal jewellery — necklaces, earrings, bracelets and sets designed to complete your bridal look. Free shipping over €60 to Kosovo, Albania & Macedonia." },
      shop: { title: "Jewellery — Pearls Collective" },
      about: { title: "About — Pearls Collective" },
      contact: { title: "Contact — Pearls Collective" },
      checkout: { title: "Checkout — Pearls Collective" }
    }
  }
};

/* ── Engine ─────────────────────────────────────────────────────────────── */

const I18N = {
  DEFAULT: "sq",
  KEY: "pc_lang",

  get lang() {
    try { const v = localStorage.getItem(I18N.KEY); if (STRINGS[v]) return v; } catch {}
    return I18N.DEFAULT;
  },

  /* Switching language re-renders every grid, drawer and panel on the page.
     Rather than teach each page to re-render itself, we persist and reload —
     one navigation, and nothing can be left half-translated. */
  set(lang) {
    if (!STRINGS[lang] || lang === I18N.lang) return;
    try { localStorage.setItem(I18N.KEY, lang); } catch {}
    location.reload();
  },

  dict() { return STRINGS[I18N.lang] || STRINGS[I18N.DEFAULT]; },

  /* Resolve "a.b.c". Returns the key itself when missing, so a gap in a
     translation shows up on the page instead of rendering blank. */
  t(path, vars) {
    const v = path.split(".").reduce((a, k) => (a == null ? undefined : a[k]), I18N.dict());
    if (typeof v !== "string") return v === undefined ? path : v;
    return vars ? v.replace(/\{(\w+)\}/g, (m, n) => (n in vars ? vars[n] : m)) : v;
  },

  /* Pick the {sq,en} variant off a product field. Falls back to Albanian, then
     to the raw value, so a product that has not been translated still renders. */
  pick(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[I18N.lang] ?? field[I18N.DEFAULT] ?? "";
  },

  /* Apply to any static markup carrying data-i18n / data-i18n-attr. */
  apply(root = document) {
    root.querySelectorAll("[data-i18n]").forEach(el => {
      el.innerHTML = I18N.t(el.dataset.i18n);
    });
    root.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.dataset.i18nAttr.split(",").forEach(pair => {
        const [attr, key] = pair.split(":").map(s => s.trim());
        if (attr && key) el.setAttribute(attr, I18N.t(key));
      });
    });
  }
};

/* Set <html lang> as early as possible so screen readers and the browser's
   own translation prompt get the right language before paint. */
document.documentElement.lang = I18N.dict().htmlLang;

const t = (path, vars) => I18N.t(path, vars);
