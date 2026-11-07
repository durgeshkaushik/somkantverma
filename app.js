/* ==========================================================================
   ADVOCATE SOMKANT VERMA — INTERACTIVE APPLICATION ENGINE
   High Court of Chhattisgarh | Bilaspur
   ========================================================================== */

const CLIENT_CONFIG = {
  name: "Advocate Somkant Verma",
  designation: "Senior Advocate, High Court of Chhattisgarh",
  phoneRaw: "9826316250",
  phoneIntl: "+919826316250",
  phoneDisplay: "+91 98263 16250",
  mapsShortUrl: "https://maps.app.goo.gl/opJ2ctvji3sQQBDs8",
  mapsHighCourtUrl: "https://maps.app.goo.gl/3BxL18Kw6Zj7DtZt6",
  officeCoords: { lat: 22.0839, lng: 82.1267 }, // Office 1: Shanti Nagar, Bilaspur
  highCourtOfficeCoords: { lat: 22.0750, lng: 82.1420 }, // Office 2: Somkant Verma High Court Advocate Office – Vasu Apartment
  addressEn: "Office 1: Shanti Nagar, Bilaspur | Office 2: Somkant Verma High Court Advocate Office – Vasu Apartment",
  addressHi: "कार्यालय 1: शांति नगर, बिलासपुर | कार्यालय 2: सोमकांत वर्मा हाई कोर्ट एडवोकेट ऑफिस – वासु अपार्टमेंट"
};

/* --- Case & Writ Eligibility Assistant Data --- */
const CASE_ISSUES_DATA = {
  transfer: {
    tagEn: "WP(S) • Article 226",
    tagHi: "WP(S) • अनुच्छेद 226",
    titleEn: "Transfer & Posting Order Challenge",
    titleHi: "स्थानांतरण (Transfer) आदेश के विरुद्ध याचिका",
    remedyEn: "Writ Petition (Service) [WP(S)] + Interim Stay Application (I.A.)",
    remedyHi: "रिट याचिका (सेवा) [WP(S)] + अंतरिम स्थगन (Stay) आवेदन",
    strategyEn: "Challenging arbitrary, frequent, mid-academic session, competency-lacking, or malafide transfer orders before the High Court of Chhattisgarh to secure immediate interim stay or representation disposal with status quo.",
    strategyHi: "छत्तीसगढ़ उच्च न्यायालय के समक्ष मनमाने, अधिकार-क्षेत्र विहीन, या दुर्भावनापूर्ण स्थानांतरण आदेश को चुनौती देकर तत्काल अंतरिम रोक (Stay Order) प्राप्त करना।",
    docsEn: [
      "Copy of Impugned Transfer Order",
      "Previous Posting / Joining Order",
      "State Transfer Policy Circular",
      "Medical / Educational Hardship Proof",
      "Submitted Representation Copy",
      "Aadhaar Card & Employee ID"
    ],
    docsHi: [
      "विवादित स्थानांतरण आदेश की प्रति",
      "पूर्व पदस्थापना / कार्यभार आदेश",
      "राज्य स्थानांतरण नीति की प्रति",
      "चिकित्सा / पारिवारिक कठिनाई प्रमाण",
      "विभाग को दिए गए अभ्यावेदन की प्रति",
      "आधार कार्ड एवं कर्मचारी परिचय पत्र"
    ]
  },
  suspension: {
    tagEn: "WP(S) • CCA Rules",
    tagHi: "WP(S) • अनुशासनात्मक कार्यवाही",
    titleEn: "Suspension & Departmental Inquiry (DE)",
    titleHi: "निलंबन एवं विभागीय जांच (DE) प्रकरण",
    remedyEn: "Writ Petition (Service) under Article 226 • Quashing / Revocation",
    remedyHi: "अनुच्छेद 226 के अंतर्गत निलंबन एवं आरोप-पत्र निरस्तीकरण याचिका",
    strategyEn: "Challenging prolonged suspension beyond 90 days without timely charge-sheet (Ajay Kumar Choudhary principle), defective departmental inquiries, denial of natural justice, or disproportionate punishment orders.",
    strategyHi: "90 दिनों से अधिक समय तक बिना आरोप-पत्र के निलंबन, प्राकृतिक न्याय के सिद्धांतों के उल्लंघन, या दोषपूर्ण विभागीय जांच एवं दंड आदेश को उच्च न्यायालय में चुनौती।",
    docsEn: [
      "Suspension Order Copy",
      "Charge-Sheet (आरोप पत्र) & Show Cause Notice",
      "Reply Submitted to Disciplinary Authority",
      "Inquiry Report & Punishment Order (if any)",
      "Subsistence Allowance Slip",
      "Relevant Service / CCA Rules"
    ],
    docsHi: [
      "निलंबन आदेश की प्रति",
      "आरोप-पत्र एवं कारण बताओ नोटिस",
      "प्रस्तुत जवाब की प्रति",
      "जांच रिपोर्ट एवं दंड आदेश (यदि हो)",
      "जीवन निर्वाह भत्ता पर्ची",
      "आधार कार्ड एवं सेवा विवरण"
    ]
  },
  pension: {
    tagEn: "WP(S) • Retiral Dues",
    tagHi: "WP(S) • पेंशन एवं सेवानिवृत्ति लाभ",
    titleEn: "Pension, Gratuity, Selection Scale & Recovery Stay",
    titleHi: "पेंशन, ग्रेच्युटी, समयमान वेतनमान एवं वसूली पर रोक",
    remedyEn: "WP(S) • Recovery Quashing & Retiral Dues Release with Interest",
    remedyHi: "WP(S) • अवैध वेतन वसूली निरस्त करने एवं पेंशन लाभ दिलाने हेतु याचिका",
    strategyEn: "Staying and quashing unlawful post-retirement or Class-III/IV salary recovery orders (Rafiq Masih Supreme Court mandate) and securing Kramonnati, Time-Scale Pay, Senior Selection Scale, Pension, and Gratuity.",
    strategyHi: "तृतीय/चतुर्थ श्रेणी कर्मचारियों एवं सेवानिवृत्त शासकीय सेवकों से अवैध वेतन वसूली (Recovery) पर उच्च न्यायालय से तत्काल रोक एवं पेंशन, ग्रेच्युटी तथा क्रमोन्नति लाभ दिलाना।",
    docsEn: [
      "Retirement / Superannuation Order",
      "Impugned Recovery Order / PPO Copy",
      "Service Book Relevant Pages",
      "Pay Fixation / Kramonnati Orders",
      "No-Dues / NDC Certificate",
      "Bank Passbook & Aadhaar Copy"
    ],
    docsHi: [
      "सेवानिवृत्ति आदेश की प्रति",
      "वसूली आदेश (Recovery Order) / PPO",
      "सर्विस बुक के संबंधित पृष्ठ",
      "वेतन निर्धारण / समयमान आदेश",
      "नो-ड्यूज प्रमाण पत्र",
      "आधार कार्ड एवं बैंक पासबुक"
    ]
  },
  promotion: {
    tagEn: "WP(S) • Career Rights",
    tagHi: "WP(S) • पदोन्नति एवं नियमितीकरण",
    titleEn: "Promotion, Seniority, Regularization & Compassionate Appointment",
    titleHi: "पदोन्नति, वरिष्ठता सूची, नियमितीकरण एवं अनुकंपा नियुक्ति",
    remedyEn: "Writ of Mandamus & Certiorari under Article 226",
    remedyHi: "अनुच्छेद 226 के तहत परमादेश (Mandamus) एवं उत्प्रेषण रिट याचिका",
    strategyEn: "Challenging wrongful supersession in DPC, errors in gradation/seniority lists, arbitrary rejection of Compassionate Appointment (Anukampa Niyukti), and seeking regularization of long-serving daily wage/contract employees.",
    strategyHi: "वरिष्ठता सूची में त्रुटि, पदोन्नति से वंचित किए जाने, अनुकंपा नियुक्ति की अस्वीकृति, एवं दैनिक वेतनभोगी/संविदा कर्मचारियों के नियमितीकरण हेतु प्रभावी पैरवी।",
    docsEn: [
      "Gradation / Seniority List Copy",
      "DPC / Rejection Order Copy",
      "Initial Appointment Order",
      "Educational & Experience Certificates",
      "Compassionate Application & Death Certificate (if applicable)",
      "Departmental Recruitment Rules"
    ],
    docsHi: [
      "वरिष्ठता / पदक्रम सूची की प्रति",
      "अस्वीकृति / DPC आदेश की प्रति",
      "प्रथम नियुक्ति आदेश",
      "शैक्षणिक एवं अनुभव प्रमाण पत्र",
      "अनुकंपा आवेदन (यदि लागू हो)",
      "विभागीय भर्ती नियम"
    ]
  },
  civilwrit: {
    tagEn: "WP(C) • Article 226/227",
    tagHi: "WP(C) • सिविल रिट याचिका",
    titleEn: "Civil Writ Petitions — Land, Municipal, Revenue & Tenders",
    titleHi: "सिविल रिट याचिका — भूमि अधिग्रहण, नगर निगम, राजस्व एवं टेंडर",
    remedyEn: "Writ Petition (Civil) [WP(C)] + Interim Protection Order",
    remedyHi: "सिविल रिट याचिका [WP(C)] + अंतरिम सुरक्षा / स्थगन आदेश",
    strategyEn: "Protecting citizens and businesses against unlawful demolition notices, denied land acquisition compensation (NHAI/SECL/State), arbitrary municipal actions, revenue orders, and government contract/tender disqualifications.",
    strategyHi: "भूमि अधिग्रहण मुआवजा, नगर निगम/पंचायत नोटिस, तोड़फोड़ पर रोक, राजस्व विवाद, एवं शासकीय टेंडर/ठेका मामलों में उच्च न्यायालय से संवैधानिक राहत।",
    docsEn: [
      "Impugned Notice / Administrative Order",
      "Land Records (Khasra, B-1, Rin Pustika / Sale Deed)",
      "Award Copy / Compensation Sheet",
      "Tender Document / Contract Copy (if applicable)",
      "Photographs & Site Map",
      "Reply / Objection Filed Before Authority"
    ],
    docsHi: [
      "विवादित नोटिस / प्रशासनिक आदेश",
      "भूमि दस्तावेज (खसरा, बी-1, रजिस्ट्री)",
      "मुआवजा अवार्ड पत्रक (यदि लागू हो)",
      "टेंडर / अनुबंध दस्तावेज",
      "स्थल के फोटो एवं नक्शा",
      "प्राधिकरण को दिए गए जवाब की प्रति"
    ]
  },
  contempt: {
    tagEn: "CONT / WA • High Court",
    tagHi: "CONT / WA • अवमानना एवं रिट अपील",
    titleEn: "Contempt of Court (CONT) & Writ Appeals (WA)",
    titleHi: "न्यायालय की अवमानना (Contempt) एवं रिट अपील (Writ Appeal)",
    remedyEn: "Contempt Petition (Civil) / Division Bench Writ Appeal",
    remedyHi: "अवमानना याचिका (CONT) / युगल पीठ (Division Bench) रिट अपील",
    strategyEn: "Enforcing compliance when officials fail to obey High Court orders within the directed timeframe via Contempt Petitions, and representing clients before the Division Bench in Writ Appeals.",
    strategyHi: "उच्च न्यायालय के आदेश का निर्धारित समय में पालन न करने वाले अधिकारियों के विरुद्ध अवमानना याचिका (Contempt) एवं एकल पीठ के आदेश के विरुद्ध युगल पीठ में रिट अपील।",
    docsEn: [
      "Certified Copy of High Court Order",
      "Postal Receipt / Receiving of Order Submission",
      "Contempt Notice / Reminder Copy",
      "Subsequent Compliance / Rejection Order",
      "Complete Writ Petition Brief (for Writ Appeal)",
      "Vakalatnama & ID Proof"
    ],
    docsHi: [
      "उच्च न्यायालय आदेश की प्रमाणित प्रति",
      "विभाग में आदेश जमा करने की पावती",
      "स्मरण पत्र / अवमानना नोटिस की प्रति",
      "विभाग द्वारा पारित अनुवर्ती आदेश",
      "मूल याचिका की संपूर्ण प्रति (अपील हेतु)",
      "आधार कार्ड एवं पहचान पत्र"
    ]
  }
};

/* --- Bilaspur Landmarks for Distance Estimator --- */
const BILASPUR_LANDMARKS = [
  {
    id: "hc",
    nameEn: "High Court of Chhattisgarh, Bodri",
    nameHi: "छत्तीसगढ़ उच्च न्यायालय, बोदरी",
    distanceKm: "9.8 km",
    driveTime: "18–22 mins via NH-130 / Ameri Rd"
  },
  {
    id: "station",
    nameEn: "Bilaspur Railway Station",
    nameHi: "बिलासपुर रेलवे स्टेशन",
    distanceKm: "5.2 km",
    driveTime: "12–15 mins via Link Rd / Shanti Nagar"
  },
  {
    id: "collectorate",
    nameEn: "Collectorate / Old High Court",
    nameHi: "कलेक्ट्रेट / पुराना हाई कोर्ट",
    distanceKm: "3.4 km",
    driveTime: "8–10 mins via Nehru Chowk"
  },
  {
    id: "busstand",
    nameEn: "Hi-Tech Bus Stand, Tifra",
    nameHi: "हाई-टेक बस स्टैंड, तिफरा",
    distanceKm: "4.1 km",
    driveTime: "9–12 mins via Overbridge / Ameri Rd"
  }
];

/* --- Map Modes --- */
const MAP_URLS = {
  office: "https://maps.google.com/maps?q=Somkant+Verma+Advocate+Shanti+Nagar+Bilaspur+Chhattisgarh&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  vasu: "https://maps.google.com/maps?q=Somkant+Verma+High+Court+Advocate+Office+Vasu+Apartment+Bilaspur+Chhattisgarh&t=m&z=17&ie=UTF8&iwloc=&output=embed",
  satellite: "https://maps.google.com/maps?q=Somkant+Verma+High+Court+Advocate+Office+Vasu+Apartment+Bilaspur+Chhattisgarh&t=k&z=18&ie=UTF8&iwloc=&output=embed"
};

let currentLang = localStorage.getItem("sv_lang") || "en";
let currentIssueKey = "transfer";

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initThemeToggle();
  initLanguageToggle();
  initChamberStatus();
  initLandmarkPills();
  initGpsDistanceCalculator();
  initMapModeTabs();
  initCaseAssistant();
  initConsultationForm();
  initFaqAccordion();
  initShareAndVcard();
  initDualOfficeAndQrSwitcher();
  initMotionEngine();
});

/* 1. Sticky Navbar Scroll Effect */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* 2. Mobile Navigation Menu */
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

/* 3. Light / Dark Judicial Theme Switcher */
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("sv_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButtonLabel(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", e => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      const apply = () => {
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("sv_theme", next);
        updateThemeButtonLabel(next);
      };

      // Circular reveal theme switch where supported (Chrome/Edge/Safari 18+)
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || reduced) {
        apply();
        return;
      }
      const rect = themeBtn.getBoundingClientRect();
      const x = e.clientX || rect.left + rect.width / 2;
      const y = e.clientY || rect.top + rect.height / 2;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const transition = document.startViewTransition(apply);
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" }
        );
      }).catch(() => {});
    });
  }
}

function updateThemeButtonLabel(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (!iconSpan) return;
  iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
}

/* 4. Bilingual Toggle (English ⇄ हिंदी) */
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

  renderCaseAssistantOutput(currentIssueKey);
  syncRotator();
}

/* 5. Real-Time IST Court & Chamber Status */
function initChamberStatus() {
  const statusEl = document.getElementById("liveCourtStatusText");
  const officeBannerStatus = document.getElementById("officeLiveScheduleBadge");
  if (!statusEl) return;

  function updateStatus() {
    const now = new Date();
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istDate = new Date(utcMs + (5.5 * 3600000));
    const day = istDate.getDay(); // 0 = Sun
    const hour = istDate.getHours();
    const mins = istDate.getMinutes();
    const timeDecimal = hour + mins / 60;

    let statusEn = "";
    let statusHi = "";

    if (day === 0) {
      statusEn = "Sunday Special Consultation • Call 9826316250 Prior to Visit";
      statusHi = "रविवार विशेष परामर्श • कार्यालय आने से पूर्व 9826316250 पर कॉल करें";
    } else if (timeDecimal >= 8.5 && timeDecimal < 10.25) {
      statusEn = "Morning Chamber Open Now (8:30 AM – 10:15 AM IST)";
      statusHi = "प्रातः कालीन चैम्बर खुला है (सुबह 8:30 – 10:15 बजे)";
    } else if (timeDecimal >= 10.25 && timeDecimal < 16.75) {
      statusEn = "In Session at High Court of Chhattisgarh (10:30 AM – 4:30 PM) • Evening Chamber at 5:30 PM";
      statusHi = "उच्च न्यायालय बिलासपुर में पैरवी समय (10:30 – 4:30) • सायं चैम्बर 5:30 बजे से";
    } else if (timeDecimal >= 17.5 && timeDecimal <= 21.5) {
      statusEn = "Evening Chamber Open Now for Client Consultations (5:30 PM – 9:30 PM IST)";
      statusHi = "सायं कालीन चैम्बर परामर्श हेतु खुला है (शाम 5:30 – रात 9:30 बजे)";
    } else {
      statusEn = "Direct Phone & WhatsApp Active: +91 98263 16250 • Chamber Opens 8:30 AM";
      statusHi = "फोन एवं व्हाट्सएप उपलब्ध: +91 98263 16250 • चैम्बर प्रातः 8:30 बजे खुलेगा";
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

/* 7. Live User GPS to Chamber Distance Calculator */
function initGpsDistanceCalculator() {
  const gpsBtn = document.getElementById("calcMyGpsBtn");
  const distValueEl = document.getElementById("distanceValueText");
  const driveTimeEl = document.getElementById("driveTimeText");
  if (!gpsBtn) return;

  gpsBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      window.open(CLIENT_CONFIG.mapsShortUrl, "_blank", "noopener");
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
        distValueEl.textContent = `Office 1: ~${km1} km | Office 2 (HC): ~${km2} km`;
        driveTimeEl.textContent = currentLang === "hi"
          ? "दोनों कार्यालयों की आपकी लोकेशन से दूरी"
          : "Live GPS distance to both offices";
        gpsBtn.textContent = currentLang === "hi" ? "✓ दोनों की दूरी गणना पूर्ण" : "✓ Live GPS Distance Active";
      },
      () => {
        gpsBtn.textContent = originalText;
        window.open(CLIENT_CONFIG.mapsShortUrl, "_blank", "noopener");
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

/* 9. Interactive Case & Writ Eligibility + Document Checklist Assistant */
function initCaseAssistant() {
  const buttons = document.querySelectorAll(".issue-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentIssueKey = btn.getAttribute("data-issue");
      renderCaseAssistantOutput(currentIssueKey);
    });
  });

  renderCaseAssistantOutput(currentIssueKey);
}

function renderCaseAssistantOutput(issueKey) {
  const data = CASE_ISSUES_DATA[issueKey];
  if (!data) return;

  const isHi = currentLang === "hi";
  const remedyEl = document.getElementById("assistantRemedyBadge");
  const titleEl = document.getElementById("assistantOutputTitle");
  const strategyEl = document.getElementById("assistantStrategyText");
  const checklistEl = document.getElementById("assistantChecklist");
  const waBtn = document.getElementById("assistantWhatsappBtn");

  if (remedyEl) remedyEl.textContent = isHi ? data.remedyHi : data.remedyEn;
  if (titleEl) titleEl.textContent = isHi ? data.titleHi : data.titleEn;
  if (strategyEl) strategyEl.textContent = isHi ? data.strategyHi : data.strategyEn;

  if (checklistEl) {
    checklistEl.innerHTML = "";
    const docs = isHi ? data.docsHi : data.docsEn;
    docs.forEach((doc, i) => {
      const li = document.createElement("li");
      li.style.setProperty("--i", i);
      li.innerHTML = `<span class="check-icon">✓</span> <span>${doc}</span>`;
      checklistEl.appendChild(li);
    });
  }

  // Replay the content swap animation
  const outputCard = document.querySelector(".assistant-output-card");
  if (outputCard) {
    outputCard.classList.remove("swap");
    void outputCard.offsetWidth;
    outputCard.classList.add("swap");
  }

  if (waBtn) {
    const waMsg = isHi
      ? `नमस्ते अधिवक्ता सोमकांत वर्मा जी, मुझे छत्तीसगढ़ उच्च न्यायालय (बिलासपुर) में "${data.titleHi}" (${data.tagHi}) के संबंध में परामर्श एवं कार्यालय भेंट हेतु समय चाहिए।`
      : `Namaste Advocate Somkant Verma Sir, I would like to consult you regarding "${data.titleEn}" (${data.tagEn}) before the High Court of Chhattisgarh, Bilaspur.`;
    waBtn.href = `https://wa.me/919826316250?text=${encodeURIComponent(waMsg)}`;
  }
}

/* 10. Direct Chamber Visit & Case Brief Planner (WhatsApp / SMS / Call) */
function initConsultationForm() {
  const form = document.getElementById("consultationPlannerForm");
  const smsBtn = document.getElementById("sendSmsBriefBtn");
  if (!form) return;

  function buildBriefMessage() {
    const name = (document.getElementById("clientName")?.value || "").trim() || "Client";
    const district = (document.getElementById("clientDistrict")?.value || "").trim() || "Chhattisgarh";
    const category = document.getElementById("clientCaseType")?.value || "Service Writ Petition - WP(S)";
    const slot = document.getElementById("clientVisitSlot")?.value || "Evening Chamber (5:30 PM - 9:00 PM)";
    const summary = (document.getElementById("clientCaseSummary")?.value || "").trim();

    const lines = [
      `⚖️ *HIGH COURT CONSULTATION REQUEST*`,
      `*To:* Senior Advocate Somkant Verma`,
      `*Client Name:* ${name}`,
      `*District / Dept:* ${district}`,
      `*Case Category:* ${category}`,
      `*Preferred Visit Slot:* ${slot}`,
      summary ? `*Brief Details:* ${summary}` : `*Brief Details:* Requesting chamber appointment & legal guidance.`,
      `*Office 1 (Shanti Nagar):* ${CLIENT_CONFIG.mapsShortUrl}`,
      `*Office 2 (Somkant Verma High Court Advocate Office – Vasu Apartment):* ${CLIENT_CONFIG.mapsHighCourtUrl}`
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

/* 12. Share Google Maps Location & 1-Click vCard (.vcf) Contact Download */
function initShareAndVcard() {
  const copyBtn = document.getElementById("copyMapsLinkBtn");
  const shareBtn = document.getElementById("shareLocationBtn");
  const vcardBtns = document.querySelectorAll(".save-vcard-btn");

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const bothLinks = `Office 1 (Shanti Nagar): ${CLIENT_CONFIG.mapsShortUrl}\nSomkant Verma High Court Advocate Office – Vasu Apartment: ${CLIENT_CONFIG.mapsHighCourtUrl}`;
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
      const shareText = `Senior Advocate Somkant Verma (High Court of Chhattisgarh, Bilaspur) • Mobile: +91 98263 16250\n🏛️ Somkant Verma High Court Advocate Office – Vasu Apartment: ${CLIENT_CONFIG.mapsHighCourtUrl}\n📍 Office 1 (Shanti Nagar): ${CLIENT_CONFIG.mapsShortUrl}`;
      const shareData = {
        title: "Somkant Verma High Court Advocate Office – Vasu Apartment",
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
        "TITLE:Senior Advocate - Service Matters & Civil Writ Petitions",
        "TEL;TYPE=CELL,VOICE,MSG:+919826316250",
        "ADR;TYPE=WORK:;;Somkant Verma High Court Advocate Office – Vasu Apartment;Bilaspur;Chhattisgarh;495220;India",
        "ADR;TYPE=WORK:;;Office 1: Shanti Nagar, Near St. Francis School;Bilaspur;Chhattisgarh;495001;India",
        "URL:https://maps.app.goo.gl/3BxL18Kw6Zj7DtZt6",
        "URL:https://maps.app.goo.gl/opJ2ctvji3sQQBDs8",
        "NOTE:Senior Advocate at High Court of Chhattisgarh specializing in Service Matters (WPS) and Civil Writ Petitions (WPC). Mobile: +91 98263 16250. Vasu Apartment Office: https://maps.app.goo.gl/3BxL18Kw6Zj7DtZt6 | Shanti Nagar Office: https://maps.app.goo.gl/opJ2ctvji3sQQBDs8",
        "END:VCARD"
      ].join("\r\n");

      const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Advocate-Somkant-Verma-HighCourt.vcf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });
}

/* ==========================================================================
   13. V2 MOTION ENGINE — reveal, spotlight, tilt, rotator, progress, ripple
   All scroll/pointer work is rAF-throttled & passive for 60fps smoothness.
   ========================================================================== */
let rotatorIndex = 0;
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function getRotatorWords() {
  const el = document.getElementById("heroRotator");
  if (!el) return [];
  return (el.getAttribute(currentLang === "hi" ? "data-words-hi" : "data-words-en") || "").split("|");
}

function syncRotator() {
  const el = document.getElementById("heroRotator");
  const words = getRotatorWords();
  if (el && words.length) el.textContent = words[rotatorIndex % words.length];
}

function initMotionEngine() {
  initHeroRotator();
  initScrollReveal();
  initScrollEffects();
  initActiveNav();
  initSpotlight();
  initPortraitTilt();
  initRipple();
}

/* Rotating hero keyword */
function initHeroRotator() {
  const el = document.getElementById("heroRotator");
  if (!el || REDUCED_MOTION) return;
  setInterval(() => {
    if (document.hidden) return;
    const words = getRotatorWords();
    rotatorIndex = (rotatorIndex + 1) % words.length;
    el.classList.add("out");
    setTimeout(() => {
      el.textContent = words[rotatorIndex];
      el.classList.remove("out");
      el.classList.add("pre");
      void el.offsetWidth;
      el.classList.remove("pre");
    }, 400);
  }, 2800);
}

/* Staggered scroll reveal; classes are removed afterwards so hover effects work */
function initScrollReveal() {
  if (REDUCED_MOTION || !("IntersectionObserver" in window)) return;
  const selectors = [
    ".maps-hub-section .section-header", ".practice-section .section-header",
    ".assistant-section .section-header", ".cases-section .section-header",
    ".consultation-section .section-header", ".faq-section .section-header",
    ".office-card", ".map-showcase-card", ".practice-card", ".assistant-box",
    ".case-card", ".planner-card", ".vcard-qr-card", ".faq-item", ".footer-grid > div"
  ];
  const targets = document.querySelectorAll(selectors.join(","));

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("in");
      io.unobserve(el);
      const cleanup = ev => {
        if (ev.target !== el || ev.propertyName !== "transform") return;
        el.classList.remove("reveal", "in");
        el.style.removeProperty("--d");
        el.removeEventListener("transitionend", cleanup);
      };
      el.addEventListener("transitionend", cleanup);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  targets.forEach(el => {
    const siblings = Array.from(el.parentElement.children).filter(c => c.matches(selectors.join(",")));
    const idx = Math.max(0, siblings.indexOf(el));
    el.style.setProperty("--d", `${Math.min(idx, 5) * 90}ms`);
    el.classList.add("reveal");
    io.observe(el);
  });
}

/* Progress bar, hide-on-scroll navbar, back-to-top ring — single rAF loop */
function initScrollEffects() {
  const bar = document.getElementById("scrollProgress");
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const toTop = document.getElementById("toTopBtn");
  const ring = document.getElementById("toTopRing");
  const CIRC = 2 * Math.PI * 21;
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, y / max) : 0;

    if (bar) bar.style.transform = `scaleX(${p})`;
    if (ring) ring.style.strokeDashoffset = String(CIRC * (1 - p));
    if (toTop) toTop.classList.toggle("show", y > 600);

    if (navbar) {
      const menuOpen = navLinks && navLinks.classList.contains("active");
      const goingDown = y > lastY + 4;
      const goingUp = y < lastY - 4;
      if (goingDown && y > 420 && !menuOpen) navbar.classList.add("nav-hidden");
      else if (goingUp || y < 200) navbar.classList.remove("nav-hidden");
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? "auto" : "smooth" }));
  }
}

/* Highlight current section in navbar */
function initActiveNav() {
  if (!("IntersectionObserver" in window)) return;
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const map = new Map();
  links.forEach(a => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (sec) map.set(sec, a);
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.remove("active"));
      const link = map.get(entry.target);
      if (link) link.classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, sec) => io.observe(sec));
}

/* Cursor-following gold spotlight on cards (desktop only) */
function initSpotlight() {
  if (!FINE_POINTER) return;
  const cards = document.querySelectorAll(
    ".practice-card, .case-card, .office-card, .planner-card, .vcard-qr-card, .issue-btn, .assistant-output-card"
  );
  cards.forEach(card => card.classList.add("spotlight"));

  let pending = null;
  document.addEventListener("pointermove", e => {
    const card = e.target.closest && e.target.closest(".spotlight");
    if (!card) return;
    if (pending) cancelAnimationFrame(pending);
    pending = requestAnimationFrame(() => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  }, { passive: true });
}

/* Subtle 3D tilt + glare on portrait (desktop only) */
function initPortraitTilt() {
  const frame = document.querySelector(".portrait-frame");
  if (!frame || !FINE_POINTER || REDUCED_MOTION) return;
  let raf = null;
  frame.addEventListener("pointermove", e => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = frame.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      frame.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
      frame.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
      frame.style.setProperty("--gx", `${px * 100}%`);
      frame.style.setProperty("--gy", `${py * 100}%`);
    });
  }, { passive: true });
  frame.addEventListener("pointerleave", () => {
    frame.style.setProperty("--rx", "0deg");
    frame.style.setProperty("--ry", "0deg");
  });
}

/* Material-style ripple on every button */
function initRipple() {
  if (REDUCED_MOTION) return;
  document.addEventListener("pointerdown", e => {
    const btn = e.target.closest && e.target.closest(".btn, .dock-btn");
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    if (getComputedStyle(btn).position === "static") btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, { passive: true });
}

/* ==========================================================================
   14. DUAL-OFFICE MAP FOCUS & QR CODE SWITCHER
   ========================================================================== */
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
    const mode = officeId === "office2" ? "vasu" : "office";
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

  // QR Switcher Tabs
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
          qrLabel.setAttribute("data-en", "📍 Office 1: Shanti Nagar, Bilaspur (C.G.)");
          qrLabel.setAttribute("data-hi", "📍 कार्यालय 1: शांति नगर, बिलासपुर");
          qrLabel.textContent = currentLang === "hi"
            ? "📍 कार्यालय 1: शांति नगर, बिलासपुर"
            : "📍 Office 1: Shanti Nagar, Bilaspur (C.G.)";
        }
      }
    });
  });
}
