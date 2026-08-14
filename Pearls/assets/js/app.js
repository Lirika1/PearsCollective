/* Pearls Collective — shared UI: header, cart, wishlist, search, helpers */

/* ── State ── */
const Cart = {
  read() { try { return JSON.parse(localStorage.getItem("pc_cart")) || []; } catch { return []; } },
  write(items) { localStorage.setItem("pc_cart", JSON.stringify(items)); renderCart(); updateBagCount(); },
  add(id, qty = 1, variant = null) {
    const items = Cart.read();
    const key = id + (variant ? "::" + variant : "");
    const found = items.find(i => i.key === key);
    if (found) found.qty += qty;
    else items.push({ key, id, qty, variant });
    Cart.write(items);
  },
  setQty(key, qty) {
    let items = Cart.read();
    const it = items.find(i => i.key === key);
    if (!it) return;
    it.qty = qty;
    if (it.qty <= 0) items = items.filter(i => i.key !== key);
    Cart.write(items);
  },
  remove(key) { Cart.write(Cart.read().filter(i => i.key !== key)); },
  clear() { Cart.write([]); },
  total() { return Cart.read().reduce((s, i) => s + (findProduct(i.id)?.price || 0) * i.qty, 0); },
  count() { return Cart.read().reduce((s, i) => s + i.qty, 0); }
};

const Wishlist = {
  read() { try { return JSON.parse(localStorage.getItem("pc_wish")) || []; } catch { return []; } },
  toggle(id) {
    let w = Wishlist.read();
    if (w.includes(id)) w = w.filter(x => x !== id);
    else w.push(id);
    localStorage.setItem("pc_wish", JSON.stringify(w));
    return w.includes(id);
  },
  has(id) { return Wishlist.read().includes(id); }
};

function findProduct(id) { return PRODUCTS.find(p => p.id === id); }
function money(n) { return "€" + n.toFixed(2).replace(/\.00$/, ""); }

/* Product text in the active language. */
function pName(p) { return I18N.pick(p.name); }
function pDesc(p) { return I18N.pick(p.desc); }
function pDetails(p) { return I18N.pick(p.details); }

/* ── Icons ── */
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7.5"/><path d="M21 21l-4.7-4.7"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.6-3.6 4.3-5.5 7.5-5.5s5.9 1.9 7.5 5.5"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 3.7-3.5 6.9-8.5 10.9z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3.5 7h17M3.5 12h17M3.5 17h17"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 5l14 14M19 5L5 19"/></svg>'
};

/* ── Header / chrome injection ── */
/* [href, translation key, page slug for the active state] */
const NAV_LINKS = [
  ["shop.html?cat=new", "nav.new", "new"],
  ["shop.html?cat=bridal", "nav.bridal", "bridal"],
  ["shop.html?cat=earrings", "nav.earrings", "earrings"],
  ["shop.html?cat=necklaces", "nav.necklaces", "necklaces"],
  ["shop.html?cat=bracelets", "nav.bracelets", "bracelets"],
  ["shop.html?cat=hair", "nav.hair", "hair"],
  ["about.html", "nav.about", "about"],
  ["contact.html", "nav.contact", "contact"]
];

/* Two-button language switch. The active one is pressed, not just styled, so
   it is announced correctly rather than looking like a pair of plain links. */
function langSwitchHtml(extraClass = "") {
  const cur = I18N.lang;
  return `
    <div class="lang-switch ${extraClass}" role="group" aria-label="${t("nav.language")}">
      <button type="button" data-lang="sq" aria-pressed="${cur === "sq"}" title="${t("nav.langSq")}">SQ</button>
      <button type="button" data-lang="en" aria-pressed="${cur === "en"}" title="${t("nav.langEn")}">EN</button>
    </div>`;
}

function buildChrome() {
  const page = document.body.dataset.page || "";
  const navHtml = NAV_LINKS.map(([href, key, slug]) =>
    `<a href="${href}" ${slug === page ? 'class="active"' : ""}>${t(key)}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="announce">${t("announce")}</div>
    <header class="header" id="header">
      <div class="container header-inner">
        <button class="icon-btn hamburger" id="hamburgerBtn" aria-label="${t("nav.menu")}">${ICONS.menu}</button>
        <a class="brand" href="index.html">Pearls <span>Collective</span></a>
        <nav class="nav" aria-label="Main">${navHtml}</nav>
        <div class="header-actions">
          ${langSwitchHtml()}
          <button class="icon-btn" id="searchBtn" aria-label="${t("nav.search")}">${ICONS.search}</button>
          <button class="icon-btn" id="accountBtn" aria-label="${t("nav.account")}">${ICONS.user}</button>
          <button class="icon-btn" id="bagBtn" aria-label="${t("nav.bag")}">
            ${ICONS.bag}<span class="bag-count hidden" id="bagCount">0</span>
          </button>
        </div>
      </div>
    </header>

    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile">
      <div class="mobile-nav-head">
        <span class="brand">Pearls <span style="color:var(--gold)">Collective</span></span>
        <button class="icon-btn" id="mobileClose" aria-label="${t("nav.close")}">${ICONS.close}</button>
      </div>
      ${NAV_LINKS.map(([href, key]) => `<a class="mnav-link" href="${href}">${t(key)}</a>`).join("")}
      ${langSwitchHtml("lang-switch--mobile")}
      <div class="mnav-foot">
        <a class="mnav-small" href="https://www.instagram.com/pearlscollective/" target="_blank" rel="noopener">Instagram — @pearlscollective</a>
        <a class="mnav-small" href="contact.html">${t("contact.bridalTitle")}</a>
      </div>
    </nav>

    <div class="overlay" id="overlay"></div>

    <aside class="cart-drawer" id="cartDrawer" aria-label="${t("nav.bag")}">
      <div class="cart-head">
        <h3>${t("cart.title")}</h3>
        <button class="icon-btn" id="cartClose" aria-label="${t("nav.close")}">${ICONS.close}</button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-foot" id="cartFoot"></div>
    </aside>

    <div class="search-panel" id="searchPanel">
      <div class="container">
        <div class="search-bar">
          ${ICONS.search}
          <input type="text" id="searchInput" placeholder="${t("search.placeholder")}" autocomplete="off">
          <button class="icon-btn" id="searchClose" aria-label="${t("nav.close")}">${ICONS.close}</button>
        </div>
        <div id="searchResults"></div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand">Pearls <span>Collective</span></div>
            <p style="max-width:280px">${t("footer.tagline")}</p>
          </div>
          <div>
            <h4>${t("footer.shop")}</h4>
            <ul>
              <li><a href="shop.html">${t("footer.allJewellery")}</a></li>
              <li><a href="shop.html?cat=bridal">${t("nav.bridal")}</a></li>
              <li><a href="shop.html?cat=earrings">${t("nav.earrings")}</a></li>
              <li><a href="shop.html?cat=necklaces">${t("nav.necklaces")}</a></li>
              <li><a href="shop.html?cat=bracelets">${t("nav.bracelets")}</a></li>
            </ul>
          </div>
          <div>
            <h4>${t("footer.help")}</h4>
            <ul>
              <li><a href="about.html">${t("nav.about")}</a></li>
              <li><a href="contact.html">${t("nav.contact")}</a></li>
              <li><a href="contact.html">${t("footer.faq")}</a></li>
              <li><a href="contact.html">${t("footer.deliveryLink")}</a></li>
              <li><a href="contact.html">${t("footer.returnsLink")}</a></li>
            </ul>
          </div>
          <div class="footer-news">
            <h4>${t("footer.newsTitle")}</h4>
            <p>${t("footer.newsBody")}</p>
            <form class="news-form" data-newsletter>
              <input type="email" placeholder="${t("home.newsPlaceholder")}" required>
              <button type="submit">${t("home.newsBtn")}</button>
            </form>
            <div class="news-msg"></div>
            <h4 style="margin-top:26px">${t("footer.follow")}</h4>
            <ul>
              <li><a href="https://www.instagram.com/pearlscollective/" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>${t("footer.rights")}</span>
          <span><a href="contact.html">${t("footer.privacy")}</a> &nbsp;·&nbsp; <a href="contact.html">${t("footer.terms")}</a></span>
        </div>
      </div>
    </footer>
  `);

  wireChrome();
  renderCart();
  updateBagCount();
  I18N.apply();          // translate any static data-i18n markup on the page
  applyMetaForPage();
}

/* Title and description follow the language too, not just the body copy. */
function applyMetaForPage() {
  const page = document.body.dataset.page || "";
  const meta = I18N.dict().meta[page];
  if (!meta) return;
  if (meta.title) document.title = meta.title;
  const d = document.querySelector('meta[name="description"]');
  if (d && meta.desc) d.setAttribute("content", meta.desc);
}

/* ── Chrome behaviour ── */
function wireChrome() {
  const overlay = document.getElementById("overlay");
  const drawer = document.getElementById("cartDrawer");
  const searchPanel = document.getElementById("searchPanel");
  const mobileNav = document.getElementById("mobileNav");

  const closeAll = () => {
    drawer.classList.remove("open");
    searchPanel.classList.remove("open");
    mobileNav.classList.remove("open");
    overlay.classList.remove("show");
  };

  document.getElementById("bagBtn").addEventListener("click", () => {
    closeAll(); drawer.classList.add("open"); overlay.classList.add("show");
  });
  document.getElementById("cartClose").addEventListener("click", closeAll);
  document.getElementById("searchBtn").addEventListener("click", () => {
    closeAll(); searchPanel.classList.add("open"); overlay.classList.add("show");
    setTimeout(() => document.getElementById("searchInput").focus(), 250);
  });
  document.getElementById("searchClose").addEventListener("click", closeAll);
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
    closeAll(); mobileNav.classList.add("open");
  });
  document.getElementById("mobileClose").addEventListener("click", closeAll);
  overlay.addEventListener("click", closeAll);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });

  document.getElementById("accountBtn").addEventListener("click", () =>
    toast(t("cart.accountSoon")));

  document.querySelectorAll("[data-lang]").forEach(b =>
    b.addEventListener("click", () => I18N.set(b.dataset.lang)));

  document.getElementById("searchInput").addEventListener("input", e => renderSearch(e.target.value));

  document.querySelectorAll("[data-newsletter]").forEach(f => {
    f.addEventListener("submit", e => {
      e.preventDefault();
      const msg = f.parentElement.querySelector(".news-msg");
      if (msg) msg.textContent = t("home.newsThanks");
      f.reset();
    });
  });

  window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
}

/* ── Cart rendering ── */
function updateBagCount() {
  const el = document.getElementById("bagCount");
  if (!el) return;
  const n = Cart.count();
  el.textContent = n;
  el.classList.toggle("hidden", n === 0);
}

function renderCart() {
  const wrap = document.getElementById("cartItems");
  const foot = document.getElementById("cartFoot");
  if (!wrap) return;
  const items = Cart.read();

  if (!items.length) {
    wrap.innerHTML = `<div class="cart-empty">${t("cart.empty")}</div>`;
    foot.innerHTML = `<a class="btn btn--ghost" style="width:100%" href="shop.html">${t("cart.shopBtn")}</a>`;
    return;
  }

  wrap.innerHTML = items.map(i => {
    const p = findProduct(i.id);
    if (!p) return "";
    const name = pName(p);
    return `
      <div class="cart-item">
        <a href="product.html?id=${p.id}"><img src="${p.imgs[0]}" alt="${name}" style="object-position:${p.pos}"></a>
        <div>
          <div class="ci-name">${name}</div>
          ${i.variant ? `<div class="ci-variant">${i.variant}</div>` : ""}
          <div class="ci-price">${money(p.price)}</div>
          <div class="ci-qty">
            <button data-dec="${i.key}" aria-label="${t("cart.decrease")}">−</button>
            <span>${i.qty}</span>
            <button data-inc="${i.key}" aria-label="${t("cart.increase")}">+</button>
          </div>
        </div>
        <button class="ci-remove" data-remove="${i.key}" aria-label="${t("cart.remove")}">×</button>
      </div>`;
  }).join("");

  const total = Cart.total();
  foot.innerHTML = `
    <div class="cart-total"><span>${t("cart.subtotal")}</span><span>${money(total)}</span></div>
    <div class="cart-note">${total >= 60 ? t("cart.free") : t("cart.freeFrom")}</div>
    <a class="btn" href="checkout.html">${t("cart.checkout")}</a>`;

  wrap.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => {
    const it = Cart.read().find(i => i.key === b.dataset.inc);
    Cart.setQty(b.dataset.inc, it.qty + 1);
  }));
  wrap.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => {
    const it = Cart.read().find(i => i.key === b.dataset.dec);
    Cart.setQty(b.dataset.dec, it.qty - 1);
  }));
  wrap.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => Cart.remove(b.dataset.remove)));
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

/* ── Search ── */
function renderSearch(q) {
  const wrap = document.getElementById("searchResults");
  q = (q || "").trim().toLowerCase();
  if (!q) { wrap.innerHTML = `<div class="search-hint">${t("search.hint")}</div>`; return; }
  /* Search both languages, so "necklace" still finds it while browsing in
     Albanian and "gjerdan" still finds it while browsing in English. */
  const hay = p => [p.name, p.desc].flatMap(f => Object.values(f)).join(" ").toLowerCase();
  const hits = PRODUCTS.filter(p =>
    hay(p).includes(q) ||
    p.category.includes(q) ||
    Object.values(CATEGORY_LABELS[p.category] || {}).join(" ").toLowerCase().includes(q));
  if (!hits.length) {
    wrap.innerHTML = `<div class="search-hint">${t("search.none")} “${q}” ${t("search.tryAnother")}</div>`;
    return;
  }
  wrap.innerHTML = `<div class="search-results">` + hits.map(p => `
    <a class="sr-card" href="product.html?id=${p.id}">
      <img src="${p.imgs[0]}" alt="${pName(p)}" style="object-position:${p.pos}">
      <div><div class="sr-name">${pName(p)}</div><div class="sr-price">${money(p.price)}</div></div>
    </a>`).join("") + `</div>`;
}

/* ── Product cards ── */
function productCard(p) {
  const wished = Wishlist.has(p.id);
  const name = pName(p);
  return `
    <div class="product-card reveal">
      ${p.isNew ? `<span class="pc-badge">${t("product.badgeNew")}</span>` : ""}
      <button class="pc-wish ${wished ? "active" : ""}" data-wish="${p.id}" aria-label="${t("wish.add")}">${ICONS.heart}</button>
      <a class="pc-media" href="product.html?id=${p.id}">
        <img src="${p.imgs[0]}" alt="${name}" loading="lazy" style="object-position:${p.pos}">
      </a>
      <button class="pc-add" data-add="${p.id}">${t("product.addToBag")}</button>
      <div class="pc-info">
        <a href="product.html?id=${p.id}"><div class="pc-name">${name}</div></a>
        <div class="pc-price">${p.id === "riviera-stacking-bracelets" ? t("product.from") : ""}${money(p.price)}</div>
      </div>
    </div>`;
}

function wireProductCards(scope = document) {
  scope.querySelectorAll("[data-add]").forEach(b => b.addEventListener("click", () => {
    const p = findProduct(b.dataset.add);
    const v = p.variants ? I18N.pick(p.variants[0].options[0]) : null;
    Cart.add(p.id, 1, v);
    toast(`${pName(p)} ${t("cart.added")}`);
    openCart();
  }));
  scope.querySelectorAll("[data-wish]").forEach(b => b.addEventListener("click", () => {
    const on = Wishlist.toggle(b.dataset.wish);
    b.classList.toggle("active", on);
    toast(on ? t("wish.saved") : t("wish.removed"));
  }));
}

/* ── Toast ── */
let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ── Reveal on scroll ── */
function initReveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  buildChrome();
  if (typeof pageInit === "function") pageInit();
  initReveals();
});
