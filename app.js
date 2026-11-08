/* ==========================================================================
   ADVOCATE SOMKANT VERMA — HIGH COURT OF CHHATTISGARH, BILASPUR
   Apple Liquid Glass Interactive Engine
   ========================================================================== */

const CLIENT_CONFIG = {
  name: "Advocate Somkant Verma",
  designation: "Advocate, High Court of Chhattisgarh, Bilaspur",
  phoneRaw: "9826316250",
  phoneIntl: "+919826316250",
  phoneDisplay: "+91 98263 16250",
  mapsShortUrl: "https://maps.app.goo.gl/opJ2ctvji3sQQBDs8",
  mapsHighCourtUrl: "https://maps.app.goo.gl/3BxL18Kw6Zj7DtZt6",
  officeCoords: { lat: 22.0839, lng: 82.1267 }, // Office 1: Shanti Nagar, Bilaspur
  highCourtOfficeCoords: { lat: 22.0750, lng: 82.1420 }, // Office 2: Vasu Apartment, Bilaspur
  addressEn: "Office 1: Shanti Nagar, Bilaspur | Office 2: Somkant Verma High Court Advocate Office – Vasu Apartment",
  addressHi: "कार्यालय 1: शांति नगर, बिलासपुर | कार्यालय 2: सोमकांत वर्मा हाई कोर्ट एडवोकेट ऑफिस – वासु अपार्टमेंट"
};

/* --- Bilaspur Landmarks for Distance Estimator --- */
const BILASPUR_LANDMARKS = [
  {
    id: "hc",
    nameEn: "High Court of Chhattisgarh, Bodri",
    nameHi: "छत्तीसगढ़ उच्च न्यायालय, बोदरी",
    distanceKm: "Near High Court / ~9.8 km to City Chamber",
    driveTime: "Quick access via Raipur Rd / NH-130"
  },
  {
    id: "station",
    nameEn: "Bilaspur Railway Station",
    nameHi: "बिलासपुर रेलवे स्टेशन",
    distanceKm: "~5.2 km",
    driveTime: "12–15 mins via Link Rd / Shanti Nagar"
  },
  {
    id: "collectorate",
    nameEn: "Collectorate / Old High Court",
    nameHi: "कलेक्ट्रेट / पुराना हाई कोर्ट",
    distanceKm: "~3.4 km",
    driveTime: "8–10 mins via Nehru Chowk"
  },
  {
    id: "busstand",
    nameEn: "Hi-Tech Bus Stand, Tifra",
    nameHi: "हाई-टेक बस स्टैंड, तिफरा",
    distanceKm: "~4.1 km",
    driveTime: "9–12 mins via Overbridge / Ameri Rd"
  }
];

/* --- Map Modes --- */
const MAP_URLS = {
  vasu: "https://maps.google.com/maps?q=Somkant+Verma+High+Court+Advocate+Office+Vasu+Apartment+Bilaspur+Chhattisgarh&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  office: "https://maps.google.com/maps?q=Somkant+Verma+Advocate+Shanti+Nagar+Bilaspur+Chhattisgarh&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  satellite: "https://maps.google.com/maps?q=Somkant+Verma+High+Court+Advocate+Office+Vasu+Apartment+Bilaspur+Chhattisgarh&t=k&z=18&ie=UTF8&iwloc=&output=embed"
};

let currentLang = localStorage.getItem("sv_lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initThemeToggle();
  initLanguageToggle();
  initChamberStatus();
  initPortraitSwitcher();
  initLandmarkPills();
  initGpsDistanceCalculator();
  initMapModeTabs();
  initDualOfficeAndQrSwitcher();
  initConsultationForm();
  initFaqAccordion();
  initShareAndVcard();
  initScrollAndSpotlight();
  initScrollReveal();
});

/* 14. Ultra-smooth scroll reveal (GPU transform + opacity only) */
function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = Array.from(
    document.querySelectorAll("main section:not(.hero) .section-header, main section:not(.hero) .liquid-glass, main section:not(.hero) .faq-item")
  ).filter(el => !el.parentElement.closest(".liquid-glass, .faq-item"));
  if (!targets.length) return;

  document.documentElement.classList.add("js-reveal");

  // Stagger siblings that enter together
  targets.forEach(el => {
    const siblings = Array.from(el.parentElement.children).filter(c => targets.includes(c));
    const i = siblings.indexOf(el);
    el.style.setProperty("--rd", `${Math.min(i, 4) * 80}ms`);
    el.classList.add("reveal");
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      el.classList.add("in");
      // Hand control back to the element's own hover transitions afterwards
      const done = e => {
        if (e.target !== el || e.propertyName !== "transform") return;
        el.removeEventListener("transitionend", done);
        el.classList.remove("reveal", "in");
        el.style.removeProperty("--rd");
      };
      el.addEventListener("transitionend", done);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  targets.forEach(el => io.observe(el));
}

/* 1. Mobile Navigation Menu */
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (!btn || !navLinks) return;

  btn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* 2. Light / Dark Liquid Glass Theme Switcher */
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("sv_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButtonLabel(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("sv_theme", next);
      updateThemeButtonLabel(next);
    });
  }
}

function updateThemeButtonLabel(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (!iconSpan) return;
  iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
}

/* 3. Bilingual Toggle (English ⇄ हिंदी) */
function initLanguageToggle() {
  const langBtn = document.getElementById("langToggleBtn");
  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "hi" : "en";
      localStorage.setItem("sv_lang", currentLang);
      applyLanguage(currentLang);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const langBtnLabel = document.getElementById("langBtnText");
  if (langBtnLabel) {
    langBtnLabel.textContent = lang === "en" ? "हिंदी में देखें" : "View in English";
  }

  document.querySelectorAll("[data-en]").forEach(el => {
    const text = lang === "hi" ? el.getAttribute("data-hi") : el.getAttribute("data-en");
    if (text) {
      el.textContent = text;
    }
  });

  document.querySelectorAll("[data-placeholder-en]").forEach(el => {
    const ph = lang === "hi" ? el.getAttribute("data-placeholder-hi") : el.getAttribute("data-placeholder-en");
    if (ph) {
      el.setAttribute("placeholder", ph);
    }
  });
}

/* 4. Real-Time IST Office & Court Status */
function initChamberStatus() {
  const statusEl = document.getElementById("liveCourtStatusText");
  const officeBannerStatus = document.getElementById("officeLiveScheduleBadge");
  if (!statusEl) return;

  function updateStatus() {
    const now = new Date();
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istDate = new Date(utcMs + (5.5 * 3600000));
    const day = istDate.getDay();
    const hour = istDate.getHours();
    const mins = istDate.getMinutes();
    const timeDecimal = hour + mins / 60;

    let statusEn = "";
    let statusHi = "";

    if (day === 0) {
      statusEn = "Sunday Consultation • Please Call 9826316250 Before Visiting";
      statusHi = "रविवार परामर्श • कार्यालय आने से पूर्व 9826316250 पर कॉल करें";
    } else if (timeDecimal >= 8.5 && timeDecimal < 10.25) {
      statusEn = "Morning Office Hours Open (8:30 AM – 10:15 AM IST)";
      statusHi = "प्रातः कालीन कार्यालय समय खुला है (सुबह 8:30 – 10:15 बजे)";
    } else if (timeDecimal >= 10.25 && timeDecimal < 17.0) {
      statusEn = "High Court Hours (10:30 AM – 5:00 PM) • Evening Office from 5:30 PM";
      statusHi = "उच्च न्यायालय समय (10:30 – 5:00) • सायं कार्यालय 5:30 बजे से";
    } else if (timeDecimal >= 17.5 && timeDecimal <= 21.5) {
      statusEn = "Evening Office Open Now for Consultations (5:30 PM – 9:30 PM IST)";
      statusHi = "सायं कालीन कार्यालय परामर्श हेतु खुला है (शाम 5:30 – रात 9:30 बजे)";
    } else {
      statusEn = "Direct Phone & WhatsApp Active: +91 98263 16250";
      statusHi = "सीधा फोन एवं व्हाट्सएप संपर्क: +91 98263 16250";
    }

    statusEl.setAttribute("data-en", statusEn);
    statusEl.setAttribute("data-hi", statusHi);
    statusEl.textContent = currentLang === "hi" ? statusHi : statusEn;

    if (officeBannerStatus) {
      officeBannerStatus.textContent = currentLang === "hi" ? statusHi : statusEn;
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);
}

/* 5. Dual Portrait Switcher (Advocate Robes Portrait + Chamber Portrait) */
function initPortraitSwitcher() {
  const buttons = document.querySelectorAll(".photo-toggle-btn");
  const slides = document.querySelectorAll(".portrait-slide");
  if (!buttons.length || !slides.length) return;

  let activeIdx = 0;
  let userInteracted = false;

  function showSlide(idx) {
    activeIdx = idx;
    slides.forEach((s, i) => s.classList.toggle("active", i === idx));
    buttons.forEach((b, i) => b.classList.toggle("active", i === idx));
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      userInteracted = true;
      showSlide(idx);
    });
  });

  setInterval(() => {
    if (document.hidden || userInteracted) return;
    showSlide((activeIdx + 1) % slides.length);
  }, 8500);
}

/* 6. Bilaspur Landmark Distance Switcher */
function initLandmarkPills() {
  const container = document.getElementById("landmarkPillsContainer");
  const distValueEl = document.getElementById("distanceValueText");
  const driveTimeEl = document.getElementById("driveTimeText");
  if (!container || !distValueEl || !driveTimeEl) return;

  function selectLandmark(item, btnEl) {
    container.querySelectorAll(".landmark-pill").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");
    distValueEl.textContent = item.distanceKm;
    driveTimeEl.textContent = item.driveTime;
  }

  BILASPUR_LANDMARKS.forEach((lm, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "landmark-pill" + (idx === 0 ? " active" : "");
    btn.setAttribute("data-en", lm.nameEn);
    btn.setAttribute("data-hi", lm.nameHi);
    btn.textContent = currentLang === "hi" ? lm.nameHi : lm.nameEn;
    btn.addEventListener("click", () => selectLandmark(lm, btn));
    container.appendChild(btn);
  });

  selectLandmark(BILASPUR_LANDMARKS[0], container.querySelector(".landmark-pill"));
}

/* 7. Live User GPS to Both Offices Distance Calculator */
function initGpsDistanceCalculator() {
  const gpsBtn = document.getElementById("calcMyGpsBtn");
  const distValueEl = document.getElementById("distanceValueText");
  const driveTimeEl = document.getElementById("driveTimeText");
  if (!gpsBtn) return;

  gpsBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      window.open(CLIENT_CONFIG.mapsHighCourtUrl, "_blank", "noopener");
      return;
    }

    const originalText = gpsBtn.textContent;
    gpsBtn.textContent = currentLang === "hi" ? "लोकेशन जांची जा रही है..." : "Locating via GPS...";

    navigator.geolocation.getCurrentPosition(
      pos => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;
        const km1 = (haversineDistance(userLat, userLng, CLIENT_CONFIG.officeCoords.lat, CLIENT_CONFIG.officeCoords.lng) * 1.24).toFixed(1);
        const km2 = (haversineDistance(userLat, userLng, CLIENT_CONFIG.highCourtOfficeCoords.lat, CLIENT_CONFIG.highCourtOfficeCoords.lng) * 1.24).toFixed(1);

        document.querySelectorAll(".landmark-pill").forEach(b => b.classList.remove("active"));
        distValueEl.textContent = `Vasu Apt: ~${km2} km | Shanti Nagar: ~${km1} km`;
        driveTimeEl.textContent = currentLang === "hi"
          ? "आपकी वर्तमान लोकेशन से दोनों कार्यालयों की दूरी"
          : "Live GPS distance to both offices";
        gpsBtn.textContent = currentLang === "hi" ? "✓ दूरी गणना पूर्ण" : "✓ Live GPS Active";
      },
      () => {
        gpsBtn.textContent = originalText;
        window.open(CLIENT_CONFIG.mapsHighCourtUrl, "_blank", "noopener");
      },
      { enableHighAccuracy: true, timeout: 7000 }
    );
  });
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRad = deg => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/* 8. Google Maps View Mode Switcher */
function initMapModeTabs() {
  const tabs = document.querySelectorAll(".map-tab");
  const iframe = document.getElementById("officeMapIframe");
  if (!tabs.length || !iframe) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const mode = tab.getAttribute("data-map-mode");
      if (MAP_URLS[mode]) {
        iframe.src = MAP_URLS[mode];
      }
    });
  });
}

/* 9. Dual-Office Map Focus & QR Code Switcher */
function initDualOfficeAndQrSwitcher() {
  const office1Card = document.getElementById("selectOffice1Card");
  const office2Card = document.getElementById("selectOffice2Card");
  const previewBtns = document.querySelectorAll(".preview-office-map-btn");
  const mapTabs = document.querySelectorAll(".map-tab");
  const iframe = document.getElementById("officeMapIframe");

  function focusOfficeOnMap(officeId) {
    if (office1Card && office2Card) {
      office1Card.classList.toggle("active", officeId === "office1");
      office2Card.classList.toggle("active", officeId === "office2");
    }
    const mode = officeId === "office1" ? "office" : "vasu";
    mapTabs.forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-map-mode") === mode);
    });
    if (iframe && MAP_URLS[mode]) {
      iframe.src = MAP_URLS[mode];
    }
  }

  previewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-office-target");
      focusOfficeOnMap(target);
      if (iframe) {
        iframe.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  const qrTabs = document.querySelectorAll(".qr-tab");
  const qrImg = document.getElementById("activeQrImg");
  const qrLabel = document.getElementById("qrAddressLabel");
  const qrBox = document.getElementById("qrContainerBox");

  qrTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      qrTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const which = tab.getAttribute("data-qr-office");
      if (which === "office2") {
        if (qrImg) {
          qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=4&data=" + encodeURIComponent(CLIENT_CONFIG.mapsHighCourtUrl);
        }
        if (qrBox) qrBox.title = "Scan to open " + CLIENT_CONFIG.mapsHighCourtUrl;
        if (qrLabel) {
          qrLabel.setAttribute("data-en", "🏛️ Somkant Verma High Court Advocate Office – Vasu Apartment");
          qrLabel.setAttribute("data-hi", "🏛️ सोमकांत वर्मा हाई कोर्ट एडवोकेट ऑफिस – वासु अपार्टमेंट");
          qrLabel.textContent = currentLang === "hi"
            ? "🏛️ सोमकांत वर्मा हाई कोर्ट एडवोकेट ऑफिस – वासु अपार्टमेंट"
            : "🏛️ Somkant Verma High Court Advocate Office – Vasu Apartment";
        }
      } else {
        if (qrImg) {
          qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=4&data=" + encodeURIComponent(CLIENT_CONFIG.mapsShortUrl);
        }
        if (qrBox) qrBox.title = "Scan to open " + CLIENT_CONFIG.mapsShortUrl;
        if (qrLabel) {
          qrLabel.setAttribute("data-en", "📍 Office: Shanti Nagar, Bilaspur (C.G.)");
          qrLabel.setAttribute("data-hi", "📍 कार्यालय: शांति नगर, बिलासपुर");
          qrLabel.textContent = currentLang === "hi"
            ? "📍 कार्यालय: शांति नगर, बिलासपुर"
            : "📍 Office: Shanti Nagar, Bilaspur (C.G.)";
        }
      }
    });
  });
}

/* 10. Direct Office Visit & Consultation Request (WhatsApp / SMS / Call) */
function initConsultationForm() {
  const form = document.getElementById("consultationPlannerForm");
  const smsBtn = document.getElementById("sendSmsBriefBtn");
  if (!form) return;

  function buildBriefMessage() {
    const name = (document.getElementById("clientName")?.value || "").trim() || "Client";
    const city = (document.getElementById("clientDistrict")?.value || "").trim() || "Chhattisgarh";
    const slot = document.getElementById("clientVisitSlot")?.value || "Somkant Verma High Court Advocate Office – Vasu Apartment";
    const summary = (document.getElementById("clientCaseSummary")?.value || "").trim();

    const lines = [
      `⚖️ *APPOINTMENT & CONSULTATION REQUEST*`,
      `*To:* Advocate Somkant Verma`,
      `*Name:* ${name}`,
      `*City / District:* ${city}`,
      `*Preferred Office:* ${slot}`,
      summary ? `*Message:* ${summary}` : `*Message:* Requesting appointment for legal consultation.`,
      `*Vasu Apartment Office:* ${CLIENT_CONFIG.mapsHighCourtUrl}`,
      `*Shanti Nagar Office:* ${CLIENT_CONFIG.mapsShortUrl}`
    ];
    return lines.join("\n");
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const message = buildBriefMessage();
    const waUrl = `https://wa.me/919826316250?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener");
  });

  if (smsBtn) {
    smsBtn.addEventListener("click", () => {
      const message = buildBriefMessage().replace(/\*/g, "");
      window.location.href = `sms:+919826316250?body=${encodeURIComponent(message)}`;
    });
  }
}

/* 11. FAQ Accordion */
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

/* 12. Share Google Maps Locations & 1-Click vCard (.vcf) Contact Download */
function initShareAndVcard() {
  const copyBtn = document.getElementById("copyMapsLinkBtn");
  const shareBtn = document.getElementById("shareLocationBtn");
  const vcardBtns = document.querySelectorAll(".save-vcard-btn");

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const bothLinks = `Somkant Verma High Court Advocate Office – Vasu Apartment: ${CLIENT_CONFIG.mapsHighCourtUrl}\nSomkant Verma High Court Advocate Office (Shanti Nagar): ${CLIENT_CONFIG.mapsShortUrl}`;
      try {
        await navigator.clipboard.writeText(bothLinks);
        const orig = copyBtn.textContent;
        copyBtn.textContent = currentLang === "hi" ? "✓ दोनों मैप्स लिंक कॉपी हो गए!" : "✓ Both Maps Links Copied!";
        setTimeout(() => { copyBtn.textContent = orig; }, 2500);
      } catch {
        window.open(CLIENT_CONFIG.mapsHighCourtUrl, "_blank", "noopener");
      }
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareText = `Advocate Somkant Verma (High Court of Chhattisgarh, Bilaspur) • Mobile: +91 98263 16250\n🏛️ Somkant Verma High Court Advocate Office – Vasu Apartment: ${CLIENT_CONFIG.mapsHighCourtUrl}\n📍 Shanti Nagar Office: ${CLIENT_CONFIG.mapsShortUrl}`;
      const shareData = {
        title: "Advocate Somkant Verma — High Court of Chhattisgarh",
        text: shareText,
        url: CLIENT_CONFIG.mapsHighCourtUrl
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch {
          // User cancelled share sheet
        }
      } else {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(shareText)}`,
          "_blank",
          "noopener"
        );
      }
    });
  }

  vcardBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const vcf = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Verma;Somkant;;Advocate;",
        "FN:Advocate Somkant Verma (High Court of Chhattisgarh)",
        "ORG:Somkant Verma High Court Advocate Office – Vasu Apartment",
        "TITLE:Advocate, High Court of Chhattisgarh",
        "TEL;TYPE=CELL,VOICE,MSG:+919826316250",
        "ADR;TYPE=WORK:;;Somkant Verma High Court Advocate Office – Vasu Apartment;Bilaspur;Chhattisgarh;495220;India",
        "ADR;TYPE=WORK:;;Shanti Nagar, Near St. Francis School;Bilaspur;Chhattisgarh;495001;India",
        "URL:https://maps.app.goo.gl/3BxL18Kw6Zj7DtZt6",
        "URL:https://maps.app.goo.gl/opJ2ctvji3sQQBDs8",
        "NOTE:Advocate at High Court of Chhattisgarh, Bilaspur. Mobile: +91 98263 16250. Vasu Apartment Office: https://maps.app.goo.gl/3BxL18Kw6Zj7DtZt6 | Shanti Nagar Office: https://maps.app.goo.gl/opJ2ctvji3sQQBDs8",
        "END:VCARD"
      ].join("\r\n");

      const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Advocate-Somkant-Verma.vcf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });
}

/* 13. Scroll Progress & Liquid Glass Cursor Specular Spotlight */
function initScrollAndSpotlight() {
  const bar = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTopBtn");
  const ring = document.getElementById("toTopRing");
  const CIRC = 2 * Math.PI * 21;
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  let lastY = window.scrollY;
  let ticking = false;

  function updateScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, y / max) : 0;
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (ring) ring.style.strokeDashoffset = String(CIRC * (1 - p));
    if (toTop) toTop.classList.toggle("show", y > 500);

    // Apple-style: glass navbar slides away while reading, returns on scroll-up
    if (navbar) {
      const menuOpen = navLinks && navLinks.classList.contains("active");
      const delta = y - lastY;
      if (menuOpen || y < 160 || delta < -6) {
        navbar.classList.remove("nav-hidden");
      } else if (delta > 6) {
        navbar.classList.add("nav-hidden");
      }
      if (Math.abs(delta) > 6) lastY = y;
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  updateScroll();

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cards = document.querySelectorAll(".liquid-glass");
    cards.forEach(c => c.classList.add("spotlight"));
    let raf = null;
    document.addEventListener("pointermove", e => {
      const card = e.target.closest && e.target.closest(".spotlight");
      if (!card) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    }, { passive: true });
  }
}
