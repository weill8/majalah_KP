const C = {
  raka: { n: "Liam", skin: "#F2C29B", hair: "#2B2118", shirt: "#3E8EDE" },
  dimas: {
    n: "Zayn",
    skin: "#E8B088",
    hair: "#1E1E1E",
    shirt: "#FF7A6B",
  },
  bima: { n: "Elian", skin: "#D9A073", hair: "#3A2A1A", shirt: "#3FAE6E" },
  sari: {
    n: "Alana",
    skin: "#F2C29B",
    hair: "#2A1B14",
    shirt: "#B58CE0",
    f: 1,
  },
  joko: {
    n: "Joko",
    skin: "#C98F63",
    hair: "#666",
    shirt: "#F4A000",
    hat: 1,
    st: 1,
  },
  mhs: {
    n: ["Mahasiswa", "College Student"],
    skin: "#F2C29B",
    hair: "#6B3FA0",
    shirt: "#9AA5B1",
  },
};
const ch = (k, m) => {
  const c = C[k];
  const mouth =
    m == "o"
      ? '<ellipse cx="50" cy="69" rx="4" ry="5" fill="#7a2b2b"/>'
      : m == "sad"
        ? '<path d="M43 71q7-6 14 0" fill="none" stroke="#7a2b2b" stroke-width="2.5" stroke-linecap="round"/>'
        : '<path d="M42 65q8 8 16 0" fill="none" stroke="#7a2b2b" stroke-width="2.5" stroke-linecap="round"/>';
  return `<svg class="ch" viewBox="0 0 100 130" role="img" aria-label="${c.n}">${c.f ? `<rect x="17" y="44" width="15" height="44" rx="7" fill="${c.hair}"/><rect x="68" y="44" width="15" height="44" rx="7" fill="${c.hair}"/>` : ""}<ellipse cx="50" cy="126" rx="28" ry="4" fill="#0002"/><path d="M20 128v-22a30 24 0 0 1 60 0v22z" fill="${c.shirt}"/><circle cx="50" cy="54" r="31" fill="${c.skin}"/>${c.hat ? '<path d="M18 48a32 28 0 0 1 64 0z" fill="#F4A000"/><rect x="13" y="46" width="74" height="7" rx="3.5" fill="#F4A000"/>' : `<path d="M19 54a31 31 0 0 1 62 0c-10-13-22-16-31-16S29 41 19 54z" fill="${c.hair}"/>`}<circle cx="39" cy="57" r="5" class="eye" fill="#222"/><circle class="eye" cx="61" cy="57" r="5" fill="#222"/><circle cx="40.5" cy="55.5" r="1.8" fill="#fff"/><circle cx="62.5" cy="55.5" r="1.8" fill="#fff"/><ellipse cx="30" cy="68" rx="5" ry="3" fill="#FF7A6B" opacity=".5"/><ellipse cx="70" cy="68" rx="5" ry="3" fill="#FF7A6B" opacity=".5"/>${c.st ? '<path d="M39 63q11-6 22 0q-11 5-22 0z" fill="#555"/>' : ""}${mouth}</svg>`;
};
const BOT =
  '<svg viewBox="0 0 30 60"><rect x="10" y="0" width="10" height="8" rx="2" fill="#FF7A6B"/><path d="M8 10h14l3 10v34a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20z" fill="#9fe3ff" stroke="#3a9bb0" stroke-width="2"/></svg>';
const BAG =
  '<svg viewBox="0 0 40 52"><path d="M6 14h28l-3 34H9z" fill="#fff" stroke="#8aa" stroke-width="2"/><path d="M13 14c0-10 14-10 14 0" fill="none" stroke="#8aa" stroke-width="2"/></svg>';
const S = [
  {
    h: [
      "Satu Plastik, Sejuta Kasih",
      "One Piece of Plastic, a Million Acts of Love",
    ],
    p: [
      "Kisah empat mahasiswa dan sebuah eksperimen kecil tentang sampah plastik.",
      "A story of four students and one small experiment about plastic waste.",
    ],
    w: [["raka"], ["dimas"], ["bima"], ["sari"]],
    n: [
      "Cerita fiksi untuk Budaya Kasih Semesta. Geser atau tekan › untuk mulai.",
      "A fictional story for the Universal Love Culture. Swipe or press › to begin.",
    ],
  },
  {
    h: ["Kenalan dulu", "Meet the team"],
    w: [
      [
        "raka",
        [
          "Aku Liam. Aku suka bertanya.",
          "I’m Liam. I love asking questions.",
        ],
      ],
      [
        "dimas",
        [
          "Aku Zayn. Siap jadi “pelaku” eksperimen!",
          "I’m Zayn. Ready to be the “culprit”!",
        ],
      ],
      [
        "bima",
        [
          "Aku Elian. Tukang catat dan foto.",
          "I’m Elian. I take notes and photos.",
        ],
      ],
      [
        "sari",
        [
          "Aku Alana. Aku peduli pada alam.",
          "I’m Alana. I care about nature.",
        ],
      ],
    ],
  },
  {
    h: ["Jalan pengamatan", "The observation walk"],
    p: [
      "Di sekitar kampus, plastik sekali pakai berserakan: botol, kantong, gelas.",
      "Around campus, single-use plastic is scattered everywhere: bottles, bags, cups.",
    ],
    w: [
      [
        "sari",
        [
          "Lihat itu… plastik di mana-mana.",
          "Look at that… plastic everywhere.",
        ],
        "sad",
      ],
      ["bima", ["Dibiarkan begitu saja.", "Just left there."], "sad"],
    ],
    lit: 6,
  },
  {
    h: ["Satu pertanyaan", "One question"],
    w: [
      [
        "raka",
        [
          "Kalau ada yang membuang sampah sembarangan, adakah yang mau memungutnya?",
          "If someone litters, will anyone pick it up?",
        ],
      ],
      ["dimas", ["Hmm, ayo kita buktikan!", "Hmm, let’s find out!"]],
    ],
  },
  {
    h: ["Rencana eksperimen", "The plan"],
    p: [
      "Zayn sengaja menjatuhkan sebotol plastik di jalur kampus. Tiga temannya mengamati dari jauh selama satu jam.",
      "Zayn will drop a plastic bottle on a busy campus path. His three friends will watch from afar for one hour.",
    ],
    l: [
      ["Zayn menjatuhkan botol", "Zayn drops the bottle"],
      ["Elian mencatat dan memotret", "Elian records and takes photos"],
      ["Liam dan Alana mengamati", "Liam and Alana observe"],
    ],
  },
  {
    h: ["Eksperimen dimulai", "The experiment begins"],
    w: [
      [
        "dimas",
        ["*klontang* Ups, botolnya jatuh.", "*clunk* Oops, the bottle fell."],
        "o",
      ],
      [
        "bima",
        ["Catat: pukul 10.02, botol terjatuh.", "Note: 10:02, bottle dropped."],
      ],
    ],
    lit: 1,
  },
  {
    h: ["Hasil pengamatan", "What we saw"],
    p: [
      "Dalam satu jam, 27 orang lewat. Hanya satu yang berhenti.",
      "In one hour, 27 people walked by. Only one stopped.",
    ],
    w: [
      [
        "mhs",
        [
          "Ah, nanti juga ada yang bersihin.",
          "Eh, someone will clean it up later.",
        ],
      ],
      ["joko", ["Sini, Bapak ambil ya.", "Here, let me get that."]],
    ],
    lit: 1,
  },
  {
    h: ["Dari “aku” menjadi “kita semesta”", "From “me” to “we, the universe”"],
    w: [
      [
        "dimas",
        [
          "Pak, maaf. Saya yang menjatuhkannya tadi.",
          "Sir, I’m sorry. I dropped that one.",
        ],
        "sad",
      ],
      [
        "joko",
        [
          "Tidak apa-apa, Nak. Bumi ini rumah kita bersama.",
          "It’s alright. This Earth is everyone’s home.",
        ],
      ],
      [
        "raka",
        [
          "Kita lupa: yang membersihkan juga manusia.",
          "We forgot: the people who clean up are people too.",
        ],
      ],
    ],
  },
  {
    h: ["Tiga Dimensi Kasih Semesta", "Three Dimensions of Universal Love"],
    d: [
      [
        "var(--sun)",
        ["Luas", "Broad"],
        [
          "Satu botol plastik mengalir ke selokan, sungai, lalu laut. Semua kehidupan saling terhubung.",
          "One plastic bottle flows to the drain, the river, then the sea. All life is connected.",
        ],
      ],
      [
        "var(--g)",
        ["Tinggi", "High"],
        [
          "Kita menjaga alam bukan karena terpaksa, tetapi karena hormat pada setiap kehidupan.",
          "We protect nature not out of obligation but out of deep respect for life.",
        ],
      ],
      [
        "var(--acc)",
        ["Mendalam", "Deep"],
        [
          "Perubahan dimulai dari dalam: dari “buang saja” menjadi “aku ikut menjaga”.",
          "Change starts within: from “just throw it away” to “I’ll help care”.",
        ],
      ],
    ],
  },
  {
    h: ["Aksi kecil kita", "Our small actions"],
    w: [["sari", ["Mulai dari hal kecil, yuk!", "Let’s start small!"]]],
    l: [
      ["Bawa botol minum sendiri", "Carry your own bottle"],
      ["Pakai tas kain saat belanja", "Use a cloth bag when shopping"],
      [
        "Pungut satu sampah yang bukan milikmu",
        "Pick up one piece of litter that isn’t yours",
      ],
      [
        "Ucapkan terima kasih kepada petugas kebersihan",
        "Thank the people who clean up",
      ],
    ],
  },
  {
    h: [
      "Dunia berubah lewat tindakan kecil",
      "The world changes through small acts",
    ],
    p: [
      "Satu tindakan kecil yang dilakukan dengan sadar dan penuh kasih bisa menyentuh diri sendiri, sesama, dan alam. Kamu mulai dari mana hari ini?",
      "One small act, done with awareness and love, can touch yourself, others, and nature. Where will you start today?",
    ],
    w: [["raka"], ["dimas"], ["bima"], ["sari"], ["joko"]],
  },

  {
    h: ["Ngobrol Yuk", "Let’s Chat"],
    p: [
      "Punya pertanyaan atau cerita tentang sampah plastik? Bagikan bersama asisten AI kami.",
      "Have a question or a story about plastic waste? Share it with our AI assistant.",
    ],
    cta: [
      "Mari mengobrol tentang kasih universal",
      "Let’s talk about universal love",
    ],
  },
];
const TH = {
  d: ["#8fd8f5", "#e9fbff", "#FFE27A", "#a6e0a2", "#86d68f", "#6fc57f"],
  s: ["#ff9e7a", "#ffe3a3", "#fff3b0", "#d9a36b", "#b7935b", "#8fb36a"],
};
const M = "ddpppppswkdk";
const tree = (x, y, s) =>
  `<g transform="translate(${x} ${y - 20}) scale(${s})"><rect x="-6" y="0" width="12" height="42" fill="#8a5a3c"/><circle cx="0" cy="-8" r="30" fill="#3fae6e"/><circle cx="-20" cy="10" r="22" fill="#4fc27e"/><circle cx="20" cy="10" r="22" fill="#4fc27e"/></g>`;
const scene = (n) => {
  const P = matchMedia("(orientation:portrait)").matches,
    t = M[n],
    c = TH[t == "s" ? "s" : "d"],
    g = "g" + n,
    sx = t == "s" ? 620 : P ? 420 : 120,
    sy = t == "s" ? 300 : P ? 70 : 290;
  const T = (
    t == "k"
      ? [
          [60, 360, 1.1],
          [180, 375, 0.9],
          [300, 368, 1.2],
          [440, 380, 0.9],
          [560, 365, 1.1],
          [690, 375, 1],
          [770, 360, 0.8],
        ]
      : [
          [60, 360, 1],
          [170, 375, 0.8],
          [740, 365, 0.9],
        ]
  )
    .map((a) => tree(...a))
    .join("");
  const bld = "dps".includes(t)
    ? '<rect x="520" y="250" width="220" height="150" fill="#f1e3c8"/><rect x="505" y="236" width="250" height="20" fill="#c97b5a"/><g fill="#7fc6e6"><rect x="540" y="275" width="30" height="30"/><rect x="600" y="275" width="30" height="30"/><rect x="660" y="275" width="30" height="30"/><rect x="540" y="330" width="30" height="30"/><rect x="660" y="330" width="30" height="30"/></g><rect x="604" y="335" width="26" height="65" fill="#8a5a3c"/>'
    : "";
  const low =
    t == "w"
      ? '<path d="M0 340q50-24 100 0t100 0t100 0t100 0t100 0t100 0t100 0t100 0V500H0z" fill="#5ec3e6"/><path d="M0 395q50-24 100 0t100 0t100 0t100 0t100 0t100 0t100 0t100 0V500H0z" fill="#3aa7d4"/><path d="M0 450q50-24 100 0t100 0t100 0t100 0t100 0t100 0t100 0t100 0V500H0z" fill="#2488bd"/>'
      : T +
        `<path d="M0 380Q400 365 800 380V500H0z" fill="${c[5]}"/>` +
        ("ps".includes(t)
          ? '<path d="M-20 500L330 392H500L860 500z" fill="#ead9ab"/>'
          : "") +
        (t == "k"
          ? [
              [90, 450, "#FF7A6B"],
              [240, 470, "#FFC93C"],
              [480, 455, "#fff"],
              [650, 470, "#FF7A6B"],
              [740, 440, "#FFC93C"],
            ]
              .map(
                ([x, y, f]) =>
                  `<circle cx="${x}" cy="${y}" r="6" fill="${f}"/>`,
              )
              .join("")
          : "");
  return `<svg class="bgs" viewBox="0 0 800 500" preserveAspectRatio="${P ? "xMidYMax meet" : "xMidYMax slice"}" aria-hidden="true"><defs><linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="330"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect x="-1000" y="-1500" width="2800" height="2000" fill="url(#${g})"/><circle class="sun" cx="${sx}" cy="${sy}" r="72" fill="${c[2]}" opacity=".4"/><circle cx="${sx}" cy="${sy}" r="46" fill="${c[2]}"/><g class="cloud" transform="translate(${P ? "-20 -50" : "-100 130"})" fill="${t == "s" ? "#ffd0b8" : "#fff"}" opacity=".85"><ellipse cx="300" cy="80" rx="60" ry="20"/><ellipse cx="340" cy="68" rx="40" ry="18"/><ellipse cx="560" cy="140" rx="70" ry="20"/><ellipse cx="600" cy="128" rx="40" ry="16"/></g><path d="M0 330Q150 250 300 320T600 300T800 320V500H0z" fill="${c[3]}"/><path d="M0 380Q200 320 420 370T800 350V500H0z" fill="${c[4]}"/>${bld}${low}</svg>`;
};

const UI = [
  {
    ph: "Tulis pesan…",
    err: "Maaf, aku sedang tidak bisa menjawab. Coba lagi sebentar ya.",
    info: "Sahabat Kasih dapat membuat kesalahan & memiliki kapasitas chat terbatas.",
  },
  {
    ph: "Type a message…",
    err: "Sorry, I can’t answer right now. Please try again in a moment.",
    info: "Sahabat Kasih may make mistakes & has limited chat capacity.",
  },
];

const $ = (id) => document.getElementById(id);
let L = 0,
  i = 0;
const lit = (n) =>
  `<div class="lit">${Array.from({ length: n }, (_, k) => `<span style="transform:rotate(${((k * 47) % 60) - 30}deg)">${k % 2 ? BAG : BOT}</span>`).join("")}</div>`;
function render() {
  document.documentElement.lang = L ? "en" : "id";
  $("lg").textContent = L ? "ID" : "EN";
  $("ai-info").textContent = UI[L].info;
  $("tr").innerHTML = S.map(
    (s, n) =>
      `<section class="s ${[0, 1, 10].includes(n) ? "up " : ""}${[2, 3, 5, 6, 7].includes(n) ? "bl" : ""}">${scene(n)}<div class="sc"><div class="in"><h1>${s.h[L]}</h1>${s.p ? `<p>${s.p[L]}</p>` : ""}${s.w ? `<div class="st" style="--n:${s.w.length};--r:${s.w.some((x) => x[1]) ? s.w.length + 1 : 1}">${s.w.map(([k, t, m], j) => `${t ? `<div class="b" style="--d:${j + 1};--j:${j + 1};--c:${C[k].shirt}"><b class="bn">${Array.isArray(C[k].n) ? C[k].n[L] : C[k].n}</b>${t[L]}</div>` : ""}<div class="av" style="--j:${j + 1}">${ch(k, m)}<span class="nm">${Array.isArray(C[k].n) ? C[k].n[L] : C[k].n}</span></div>`).join("")}</div>` : ""}${s.l ? `<ul>${s.l.map((t) => `<li>${t[L]}</li>`).join("")}</ul>` : ""}${s.d ? `<div class="dm">${s.d.map(([c, t, x]) => `<div style="--c:${c}"><h2>${t[L]}</h2><p>${x[L]}</p></div>`).join("")}</div>` : ""}${s.lit ? lit(s.lit) : ""}${s.cta ? `<button class="cta" data-chat>${s.cta[L]}</button>` : ""}${s.n ? `<small>${s.n[L]}</small>` : ""}</div></div></section>`,
  ).join("");
  $("dots").innerHTML = S.map(
    (_, k) =>
      `<button aria-label="${k + 1}/${S.length}" data-k="${k}"></button>`,
  ).join("");
  go(i);
}
function go(n) {
  i = Math.max(0, Math.min(S.length - 1, n));
  $("tr").style.transform = `translateX(${-i * 100}%)`;
  document.querySelectorAll(".s").forEach((e, k) => {
    e.classList.toggle("on", k == i);
    e.inert = k != i;
  });
  document
    .querySelectorAll("#dots button")
    .forEach((b, k) =>
      k == i
        ? b.setAttribute("aria-current", "true")
        : b.removeAttribute("aria-current"),
    );
  $("ct").textContent = i + 1 + " / " + S.length;
  $("pv").disabled = i == 0;
  $("nx").disabled = i == S.length - 1;
}
$("pv").onclick = () => go(i - 1);
$("nx").onclick = () => go(i + 1);
$("lg").onclick = () => {
  L = 1 - L;
  render();
};
$("dots").onclick = (e) => {
  if (e.target.dataset.k) go(+e.target.dataset.k);
};
addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") go(i + 1);
  if (e.key == "ArrowLeft") go(i - 1);
});
let x0, y0;
addEventListener(
  "touchstart",
  (e) => {
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
  },
  { passive: true },
);
addEventListener(
  "touchend",
  (e) => {
    const dx = e.changedTouches[0].clientX - x0,
      dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
      go(i + (dx < 0 ? 1 : -1));
  },
  { passive: true },
);

matchMedia("(orientation:portrait)").onchange = () => render();

const sp = $("sp");
const lock = (v) =>
  document.querySelectorAll("header,main,nav").forEach((e) => (e.inert = v));
lock(true);
["keydown", "touchend"].forEach((t) =>
  addEventListener(
    t,
    (e) => {
      if ($("sp")) e.stopImmediatePropagation();
    },
    true,
  ),
);
$("sb").onclick = () => {
  lock(false);
  sp.classList.add("out");
  setTimeout(() => sp.remove(), 700);
};

(() => {
  const sp = $("sp");
  if (!sp) return;
  const d = document.createElement("div");
  d.className = "spd";
  d.setAttribute("aria-hidden", "true");
  const cloud =
    '<svg class="spcl" viewBox="0 0 120 40"><ellipse cx="40" cy="26" rx="34" ry="12"/><ellipse cx="72" cy="18" rx="26" ry="14"/><ellipse cx="92" cy="28" rx="26" ry="10"/></svg>';
  const rainbow =
    '<svg class="sprb" viewBox="0 0 200 100">' +
    [92, 84, 76, 68, 60]
      .map(
        (r, k) =>
          `<path d="M${100 - r} 100a${r} ${r} 0 0 1 ${2 * r} 0" fill="none" stroke="${["#ff7a6b", "#ffc93c", "#a6e0a2", "#7fc6e6", "#b58ce0"][k]}" stroke-width="8"/>`,
      )
      .join("") +
    "</svg>";
  
  const tree = (c) =>
    `<svg class="sptr ${c}" viewBox="-50 -40 100 110"><rect x="-6" y="14" width="12" height="42" fill="#8a5a3c"/><circle cx="0" cy="6" r="30" fill="#3fae6e"/><circle cx="-20" cy="24" r="22" fill="#4fc27e"/><circle cx="20" cy="24" r="22" fill="#4fc27e"/></svg>`;
  const leaves = Array.from(
    { length: 10 },
    (_, k) =>
      `<i style="--x:${(k * 37 + 8) % 92}%;--s:${14 + ((k * 5) % 12)}px;--t:${7 + ((k * 3) % 6)}s;--dl:${(k * 1.3) % 5}s">🍃</i>`,
  ).join("");

  const butter = [
    [14, 38, 6],
    [72, 46, 8],
    [44, 60, 7],
  ]
    .map(([x, y, t]) => `<em style="--x:${x}%;--y:${y}%;--t:${t}s">🦋</em>`)
    .join("");
  const spark = [
    [30, 34, 18, 0],
    [66, 30, 14, 0.6],
    [22, 58, 12, 1.1],
    [78, 62, 18, 1.6],
    [50, 20, 14, 0.3],
    [40, 72, 12, 1.9],
  ]
    .map(([x, y, s, dl]) => `<u style="--x:${x}%;--y:${y}%;--s:${s}px;--dl:${dl}s">✨</u>`)
    .join("");
  d.innerHTML =
    `<div class="spsun"></div>${rainbow}${cloud}${cloud}` +
    `${tree("tl")}${tree("tr2")}${leaves}${spark}${butter}`;
  sp.prepend(d);
})();


/* ===== CHAT ===== */
const CHAT_URL =
  "https://outsource-facelift-ship.ngrok-free.dev/webhook/kasih-chat";
const sid =
  "s-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const GREET = [
  "Halo! Aku Sahabat Kasih 🌱 Mau ngobrol tentang sampah plastik, kasih universal, atau aksi kecil yang bisa kamu mulai?",
  "Hi! I’m Sahabat Kasih 🌱 Want to chat about plastic waste, universal love, or small actions you can start?",
];

let started = 0,
  busy = 0;
const lockUI = (v) =>
  document.querySelectorAll("header,main,nav").forEach((e) => (e.inert = v));
function addMsg(t, c) {
  const d = document.createElement("div");
  d.className = "m " + c;
  if (t) d.textContent = t;
  $("msgs").append(d);
  $("msgs").scrollTop = $("msgs").scrollHeight;
  return d;
}
function openChat() {
  $("chat").hidden = false;
  lockUI(true);
  $("ci").placeholder = UI[L].ph;
  if (!started) {
    started = 1;
    addMsg(GREET[L], "bot");
  }
  $("ci").focus();
}
function closeChat() {
  $("chat").hidden = true;
  lockUI(false);
}
$("tr").onclick = (e) => {
  if (e.target.closest("[data-chat]")) openChat();
};
$("cx").onclick = closeChat;
addEventListener("keydown", (e) => {
  if (e.key == "Escape" && !$("chat").hidden) closeChat();
});
addEventListener(
  "keydown",
  (e) => {
    if (!$("chat").hidden && e.key.startsWith("Arrow"))
      e.stopImmediatePropagation();
  },
  true,
);
addEventListener(
  "touchend",
  (e) => {
    if (!$("chat").hidden) e.stopImmediatePropagation();
  },
  true,
);
$("cf").onsubmit = async (e) => {
  e.preventDefault();

  if (busy) return;

  const text = $("ci").value.trim();

  if (!text) {
    const inputField = $("ci");
    inputField.classList.add("shake");
    inputField.focus();
    
    // hapus kelas animasi setelah selesai agar bisa dipicu lagi nanti
    setTimeout(() => inputField.classList.remove("shake"), 300);
    return; // hentikan eksekusi agar pesan kosong tidak terkirim
  }

  busy = 1;
  $("ci").value = "";

  // disabled input dan button
  $("ci").disabled = true;
  $("cs").disabled = true;

  addMsg(text, "me");

  const w = addMsg("", "bot");
  w.innerHTML = '<span class="dotz"><i></i><i></i><i></i></span>';

  const ac = new AbortController(),
    tm = setTimeout(() => ac.abort(), 45000);
  try {
    const r = await fetch(CHAT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: sid,
        message: text,
        lang: L ? "en" : "id",
      }),
      signal: ac.signal,
    });
    if (!r.ok) throw 0;
    const d = await r.json();
    w.textContent = d.reply || UI[L].err;
  } catch {
    w.textContent = UI[L].err;
    w.classList.add("err");
  }
  clearTimeout(tm);
  busy = 0;

  // enable input dan button
  $("ci").disabled = false;
  $("cs").disabled = false;
  $("ci").focus();
  
  $("msgs").scrollTop = $("msgs").scrollHeight;
};

(() => {
  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => [...r.querySelectorAll(s)];
  const ld = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
  const sv = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  const tx = (a, b) => (L ? b : a);

  /* ---------- static UI ---------- */
  const hd = q("header"), hx = document.createElement("div");
  hx.className = "hx";
  hx.innerHTML = '<button id="mn">☰</button>';
  hd.append(hx);
  hx.append($("lg"));
  const cm = document.createElement("div");
  cm.id = "cm"; cm.hidden = true;
  document.body.append(cm);
  const tt = document.createElement("div");
  tt.id = "tt"; tt.setAttribute("role", "status");
  document.body.append(tt);
  const toast = (m) => {
    tt.textContent = m; tt.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(() => tt.classList.remove("on"), 2200);
  };

  /* ---------- menu marker ---------- */
  const mark = () =>
    qa("#cm button").forEach((b, k) => (k == i ? b.setAttribute("aria-current", "true") : b.removeAttribute("aria-current")));

  /* ---------- menu ---------- */
  const closeMenu = () => (cm.hidden = true);
  $("mn").onclick = () => (cm.hidden = !cm.hidden);
  cm.onclick = (e) => {
    const b = e.target.closest("button[data-k]");
    if (b) go(+b.dataset.k);
    if (b || e.target === cm) closeMenu();
  };
  addEventListener("keydown", (e) => e.key == "Escape" && closeMenu());
  /* ---------- music (on/off) ---------- */
  // const MUSIC_SRC = "sound_majalahKP.mp3";
  // let on = ld("eco-music", "on") !== "on", ac, master, timer, aud, pi = 0;
  // const NOTES = [261.63, 293.66, 329.63, 392, 440, 523.25];
  // const PAT = [0, 2, 4, 5, 4, 2, 3, 1, 0, 2, 4, 2, 5, 4, 2, 0];
  // const tone = (f, t, d, v) => {
  //   const o = ac.createOscillator(), gn = ac.createGain();
  //   o.type = "sine"; o.frequency.value = f;
  //   gn.gain.setValueAtTime(0, t);
  //   gn.gain.linearRampToValueAtTime(v, t + 0.05);
  //   gn.gain.exponentialRampToValueAtTime(0.001, t + d);
  //   o.connect(gn); gn.connect(master); o.start(t); o.stop(t + d);
  // };
  // const bar = () => {
  //   const t = ac.currentTime + 0.05;
  //   for (let k = 0; k < 4; k++) tone(NOTES[PAT[pi++ % PAT.length]], t + k * 0.6, 1.8, 0.07);
  //   tone(NOTES[(pi >> 2) % 2 ? 0 : 3] / 2, t, 2.6, 0.05);
  // };
  // const play = () => {
  //   try {
  //     if (MUSIC_SRC) {
  //       aud = aud || Object.assign(new Audio(MUSIC_SRC), { loop: true, volume: 0.4 });
  //       aud.play().catch(() => {});
  //     } else if (window.AudioContext || window.webkitAudioContext) {
  //       if (!ac) { ac = new (window.AudioContext || window.webkitAudioContext)(); master = ac.createGain(); master.gain.value = 0.8; master.connect(ac.destination); }
  //       ac.resume(); clearInterval(timer); bar(); timer = setInterval(bar, 2400);
  //     }
  //   } catch {}
  // };
  // const stop = () => {
  //   clearInterval(timer);
  //   if (aud) aud.pause();
  //   if (ac) ac.suspend();
  // };
  // const muIcon = () => {
  //   $("mu").textContent = on ? "🎵" : "🔇";
  //   $("mu").setAttribute("aria-pressed", on);
  //   $("mu").setAttribute("aria-label", on ? tx("Matikan musik", "Mute music") : tx("Nyalakan musik", "Play music"));
  // };
  // $("mu").onclick = () => {
  //   on = !on; sv("eco-music", on ? "on" : "off");
  //   on ? play() : stop();
  //   muIcon();
  // };
  // // browser hanya mengizinkan suara setelah interaksi, jadi mulai saat tombol "Mulai" ditekan
  // const sb = $("sb");
  // if (sb) sb.addEventListener("click", () => on && play());
  // document.addEventListener("visibilitychange", () => (document.hidden ? stop() : on && sb && !$("sp") && play()));

  /* ---------- checklist (slide 9) ---------- */
  function checklist(sec) {
    const lis = qa("li", sec);
    if (!lis.length) return;
    const done = ld("eco-actions", []);
    const box = document.createElement("div");
    box.className = "ap";
    box.innerHTML = '<div class="apb"><i></i></div><span aria-live="polite"></span>';
    q("ul", sec).after(box);
    const upd = () => {
      const n = lis.filter((_, k) => done[k]).length, p = Math.round((n / lis.length) * 100);
      q("i", box).style.width = p + "%";
      q("span", box).textContent = !n
        ? tx("Pilih satu aksi kecil untuk memulai.", "Pick one small action to begin.")
        : n < lis.length
          ? `${n}/${lis.length} · ${p}% — ${tx("Langkah kecil yang indah!", "A lovely small step!")}`
          : tx("Luar biasa! Kamu sudah menebar kasih untuk bumi 🌍", "Wonderful! You’ve spread love for the Earth 🌍");
    };
    lis.forEach((li, k) => {
      li.tabIndex = 0;
      li.setAttribute("role", "checkbox");
      const set = () => { li.classList.toggle("done", !!done[k]); li.setAttribute("aria-checked", !!done[k]); };
      const tg = () => { done[k] = !done[k]; sv("eco-actions", done); set(); upd(); };
      set();
      li.onclick = tg;
      li.onkeydown = (e) => { if (e.key == " " || e.key == "Enter") { e.preventDefault(); tg(); } };
    });
    upd();
  }

  /* ---------- reflection (slide 10) ---------- */
  function reflection(sec) {
    const f = document.createElement("div");
    f.className = "rf";
    f.innerHTML = `<label for="rfi">${tx("Satu aksi kecil yang akan kulakukan untuk menjaga bumi adalah…", "One small action I will take to care for the Earth is…")}</label><textarea id="rfi" maxlength="200"></textarea><button type="button">${tx("Simpan", "Save")}</button><small></small>`;
    const ta = q("textarea", f), sm = q("small", f);
    ta.value = ld("eco-commit", "");
    q("button", f).onclick = () => { sv("eco-commit", ta.value.trim()); sm.textContent = tx("Pertahankan! 💚", "Keep it up! 💚"); };
    q(".in>p", sec).after(f);
  }

  /* ---------- sorting game (inserted before chat slide) ---------- */
  const GI = [
    ["🧴", ["Botol plastik", "Plastic bottle"], "p"], ["🥤", ["Gelas plastik", "Plastic cup"], "p"],
    ["📰", ["Koran", "Newspaper"], "k"], ["📦", ["Kardus", "Cardboard"], "k"],
    ["🍌", ["Kulit pisang", "Banana peel"], "o"], ["🍂", ["Daun kering", "Dry leaves"], "o"],
  ];
  const GB = { p: ["Plastik", "Plastic"], k: ["Kertas", "Paper"], o: ["Organik", "Organic"] };
  let g = null;
  const gnew = () => (g = { sel: -1, left: GI.map((_, k) => k), score: 0, miss: {}, msg: "" });
  function gdraw(root) {
    if (!g) gnew();
    if (!g.left.length) {
      const good = g.score >= 5;
      root.innerHTML = `<div class="sc2">${tx("Skor", "Score")}: ${g.score}/${GI.length}</div><p>${good ? tx("Hebat! ", "Great job! ") : tx("Tidak apa-apa, belajar itu proses. ", "That’s okay, learning takes practice. ")}${tx("Memilah plastik, kertas, dan sampah organik memudahkan daur ulang dan pengolahan.", "Sorting plastic, paper, and organic waste makes recycling and composting easier.")}</p><div class="gr"><button data-r>${tx("Main lagi", "Play again")}</button></div>`;
      return;
    }
    root.innerHTML = `<div class="sc2">${tx("Skor", "Score")}: ${g.score}/${GI.length}</div><div class="gi">${g.left.map((k) => `<button data-i="${k}" aria-pressed="${g.sel == k}" aria-label="${GI[k][1][L]}">${GI[k][0]}<small>${GI[k][1][L]}</small></button>`).join("")}</div><div class="gmsg" aria-live="polite">${g.msg || tx("Ketuk benda, lalu pilih tempat sampahnya.", "Tap an item, then choose its bin.")}</div><div class="gb">${Object.keys(GB).map((b) => `<button data-b="${b}">${GB[b][L]}</button>`).join("")}</div>`;
  }
  function game(sec) {
    const root = document.createElement("div");
    root.className = "gm";
    q(".in>p", sec).after(root);
    gdraw(root);
    root.onclick = (e) => {
      const it = e.target.closest("[data-i]"), bn = e.target.closest("[data-b]");
      if (e.target.closest("[data-r]")) gnew();
      else if (it) { g.sel = +it.dataset.i; g.msg = ""; }
      else if (bn && g.sel >= 0) {
        const k = g.sel;
        if (GI[k][2] == bn.dataset.b) {
          if (!g.miss[k]) g.score++;
          g.msg = `✓ ${GI[k][1][L]} → ${GB[bn.dataset.b][L]}`;
          g.left = g.left.filter((x) => x != k); g.sel = -1;
        } else { g.miss[k] = 1; g.msg = tx("Hmm, coba tempat sampah lain ya.", "Hmm, try another bin."); }
      } else if (bn) g.msg = tx("Pilih bendanya dulu ya.", "Pick an item first.");
      gdraw(root);
    };
  }

  /* ---------- chat helpers ---------- */
  const QS = [
    ["Bagaimana cara mengurangi sampah plastik?", "How can I reduce plastic waste?"],
    ["Apa arti kasih universal?", "What does universal love mean?"],
    ["Aksi kecil apa yang bisa kulakukan?", "What small actions can I take?"],
    ["Bisa jelaskan eksperimen ini?", "Can you explain this experiment?"],
    ["Bagaimana aku bisa membantu lingkungan?", "How can I help the environment?"],
  ];
  const qs = document.createElement("div");
  qs.id = "qs";
  $("cf").before(qs);
  qs.onclick = (e) => {
    const b = e.target.closest("button");
    if (!b || busy) return;
    $("ci").value = QS[+b.dataset.k][L];
    $("cf").requestSubmit();
  };
  const cc = document.createElement("button");
  cc.id = "cc";
  cc.textContent = "🗑";
  q(".cb-hd").append(cc);
  cc.onclick = () => { $("msgs").innerHTML = ""; addMsg(GREET[L], "bot"); };
  new MutationObserver(() => {
    qa(".m.bot:not(.err)", $("msgs")).forEach((m) => {
      if (m.querySelector(".cp,.dotz") || !m.textContent.trim()) return;
      const t = m.textContent, b = document.createElement("button");
      b.className = "cp"; b.textContent = "⧉ " + tx("Salin", "Copy");
      b.onclick = async () => { try { await navigator.clipboard.writeText(t); toast(tx("Tersalin", "Copied")); } catch {} };
      m.append(b);
    });
  }).observe($("msgs"), { childList: true, subtree: true });

  /* ---------- hook into existing render/go ---------- */
  function labels() {
    $("mn").setAttribute("aria-label", tx("Daftar bab", "Chapters"));
    muIcon();
    cc.setAttribute("aria-label", tx("Hapus percakapan", "Clear conversation"));
    cm.innerHTML = `<div role="dialog" aria-label="${tx("Daftar bab", "Chapters")}">${S.map((s, k) => `<button data-k="${k}">${k + 1}. ${s.h[L]}</button>`).join("")}</div>`;
    qs.innerHTML = QS.map((s, k) => `<button data-k="${k}">${s[L]}</button>`).join("");
  }
  const _render = render, _go = go;
  render = function () {
    _render();
    labels();
    const secs = qa("#tr .s");
    checklist(secs[9]);
    reflection(secs[10]);
    game(secs[11]);
    mark();
  };
  go = function (n) {
    _go(n);
    mark();
  };

  if (S.length == 12)
    S.splice(11, 0, {
      h: ["Tantangan Pilah Sampah", "Plastic Sorting Challenge"],
      p: ["Bantu memilah sampah ke tempat yang tepat.", "Help sort each item into the right bin."],
    });
  render();
})();