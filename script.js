const C = {
  raka: { n: "Albert", skin: "#F2C29B", hair: "#2B2118", shirt: "#3E8EDE" },
  dimas: {
    n: "Ruben",
    skin: "#E8B088",
    hair: "#1E1E1E",
    shirt: "#FF7A6B",
  },
  bima: { n: "Weillsun", skin: "#D9A073", hair: "#3A2A1A", shirt: "#3FAE6E" },
  sari: {
    n: "Evelyn",
    skin: "#F2C29B",
    hair: "#2A1B14",
    shirt: "#B58CE0",
    f: 1,
  },
  joko: {
    n: "Pak Joko",
    skin: "#C98F63",
    hair: "#666",
    shirt: "#F4A000",
    hat: 1,
    st: 1,
  },
  mhs: {
    n: "Mahasiswa",
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
  return `<svg class="ch" viewBox="0 0 100 130" role="img" aria-label="${c.n}">${c.f ? `<rect x="17" y="44" width="15" height="44" rx="7" fill="${c.hair}"/><rect x="68" y="44" width="15" height="44" rx="7" fill="${c.hair}"/>` : ""}<ellipse cx="50" cy="126" rx="28" ry="4" fill="#0002"/><path d="M20 128v-22a30 24 0 0 1 60 0v22z" fill="${c.shirt}"/><circle cx="50" cy="54" r="31" fill="${c.skin}"/>${c.hat ? '<path d="M18 48a32 28 0 0 1 64 0z" fill="#F4A000"/><rect x="13" y="46" width="74" height="7" rx="3.5" fill="#F4A000"/>' : `<path d="M19 54a31 31 0 0 1 62 0c-10-13-22-16-31-16S29 41 19 54z" fill="${c.hair}"/>`}<circle cx="39" cy="57" r="5" fill="#222"/><circle cx="61" cy="57" r="5" fill="#222"/><circle cx="40.5" cy="55.5" r="1.8" fill="#fff"/><circle cx="62.5" cy="55.5" r="1.8" fill="#fff"/><ellipse cx="30" cy="68" rx="5" ry="3" fill="#FF7A6B" opacity=".5"/><ellipse cx="70" cy="68" rx="5" ry="3" fill="#FF7A6B" opacity=".5"/>${c.st ? '<path d="M39 63q11-6 22 0q-11 5-22 0z" fill="#555"/>' : ""}${mouth}</svg>`;
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
          "Aku Albert. Aku suka bertanya.",
          "I’m Albert. I love asking questions.",
        ],
      ],
      [
        "dimas",
        [
          "Aku Ruben. Siap jadi “pelaku” eksperimen!",
          "I’m Ruben. Ready to be the “culprit”!",
        ],
      ],
      [
        "bima",
        [
          "Aku Weillsun. Tukang catat dan foto.",
          "I’m Weillsun. I take notes and photos.",
        ],
      ],
      [
        "sari",
        [
          "Aku Evelyn. Aku peduli pada alam.",
          "I’m Evelyn. I care about nature.",
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
      "Ruben sengaja menjatuhkan sebotol plastik di jalur kampus. Tiga temannya mengamati dari jauh selama satu jam.",
      "Ruben will drop a plastic bottle on a busy campus path. His three friends will watch from afar for one hour.",
    ],
    l: [
      ["Ruben menjatuhkan botol", "Ruben drops the bottle"],
      ["Weillsun mencatat dan memotret", "Weillsun records and takes photos"],
      ["Albert dan Evelyn mengamati", "Albert and Evelyn observe"],
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
];
const TH = {
  d: ["#8fd8f5", "#e9fbff", "#FFE27A", "#a6e0a2", "#86d68f", "#6fc57f"],
  s: ["#ff9e7a", "#ffe3a3", "#fff3b0", "#d9a36b", "#b7935b", "#8fb36a"],
};
const M = "ddpppppswkd";
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
  return `<svg class="bgs" viewBox="0 0 800 500" preserveAspectRatio="${P ? "xMidYMax meet" : "xMidYMax slice"}" aria-hidden="true"><defs><linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="330"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect x="-1000" y="-1500" width="2800" height="2000" fill="url(#${g})"/><circle cx="${sx}" cy="${sy}" r="72" fill="${c[2]}" opacity=".4"/><circle cx="${sx}" cy="${sy}" r="46" fill="${c[2]}"/><g transform="translate(${P ? "-20 -50" : "-100 130"})" fill="${t == "s" ? "#ffd0b8" : "#fff"}" opacity=".85"><ellipse cx="300" cy="80" rx="60" ry="20"/><ellipse cx="340" cy="68" rx="40" ry="18"/><ellipse cx="560" cy="140" rx="70" ry="20"/><ellipse cx="600" cy="128" rx="40" ry="16"/></g><path d="M0 330Q150 250 300 320T600 300T800 320V500H0z" fill="${c[3]}"/><path d="M0 380Q200 320 420 370T800 350V500H0z" fill="${c[4]}"/>${bld}${low}</svg>`;
};
const $ = (id) => document.getElementById(id);
let L = 0,
  i = 0;
const lit = (n) =>
  `<div class="lit">${Array.from({ length: n }, (_, k) => `<span style="transform:rotate(${((k * 47) % 60) - 30}deg)">${k % 2 ? BAG : BOT}</span>`).join("")}</div>`;
function render() {
  document.documentElement.lang = L ? "en" : "id";
  $("lg").textContent = L ? "ID" : "EN";
  $("tr").innerHTML = S.map(
    (s, n) =>
      `<section class="s ${[0, 1, 10].includes(n) ? "up " : ""}${[2, 3, 5, 6, 7].includes(n) ? "bl" : ""}">${scene(n)}<div class="sc"><div class="in"><h1>${s.h[L]}</h1>${s.p ? `<p>${s.p[L]}</p>` : ""}${s.w ? `<div class="st" style="--n:${s.w.length};--r:${s.w.some((x) => x[1]) ? s.w.length + 1 : 1}">${s.w.map(([k, t, m], j) => `${t ? `<div class="b" style="--d:${j + 1};--j:${j + 1};--c:${C[k].shirt}"><b class="bn">${C[k].n}</b>${t[L]}</div>` : ""}<div class="av" style="--j:${j + 1}">${ch(k, m)}<span class="nm">${C[k].n}</span></div>`).join("")}</div>` : ""}${s.l ? `<ul>${s.l.map((t) => `<li>${t[L]}</li>`).join("")}</ul>` : ""}${s.d ? `<div class="dm">${s.d.map(([c, t, x]) => `<div style="--c:${c}"><h2>${t[L]}</h2><p>${x[L]}</p></div>`).join("")}</div>` : ""}${s.lit ? lit(s.lit) : ""}${s.n ? `<small>${s.n[L]}</small>` : ""}</div></div></section>`,
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
matchMedia("(orientation:portrait)").onchange = render;
render();

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
//   $("sb").focus();
