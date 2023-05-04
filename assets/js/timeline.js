const timeline = [
  {
    year: 1994,
    month_name: "Setembro 1994",
    title: "Ano que nasci, em Araguaina/TO",
  },
  {
    year: 2005,
    month_name: "Janeiro 2005",
    title: "Fiz o meu primeiro blog, Ponto Interativo",
  },
  {
    year: 2011,
    month_name: "Dezembro 2011",
    title: "Terminei o ensino médio",
  },
  { year: 2012, month_name: "Janeiro 2012", title: "Entrei na UNICAMP" },
  {
    year: 2012,
    month_name: "Julho 2012",
    title: "Comecei a desenvolver sites para ONGs",
  },
  {
    year: 2012,
    month_name: "Dezembro 2012",
    title: "Minha iniciação científica em nanotubos de titânio",
  },
  {
    year: 2014,
    month_name: "Julho 2014",
    title: "Entrei na empresa Jr. MTE, na UNICAMP",
  },
  {
    year: 2017,
    month_name: "Janeiro 2017",
    title: "Comecei a trabalhar na Coca-Cola FEMSA",
  },
  {
    year: 2018,
    month_name: "Julho 2018",
    title: "Viajei para a Alemanha para um estágio na KRONES/AG",
  },
  {
    year: 2019,
    month_name: "Janeiro 2019",
    title: "Virei Trainee na Coca-Cola FEMSA",
  },
  {
    year: 2019,
    month_name: "Outubro 2019",
    title: "Voltei pro Tocantins e comecei a trabalhar no Damásio",
  },
  {
    year: 2021,
    month_name: "Junho 2021",
    title: "Aprofundei meus conhecimentos em Ciências de Dados na IBM",
  },
  {
    year: 2022,
    month_name: "Janeiro de 2022",
    title: "Comecei a desenvolver sites e criar apps profissionalmente",
  },
  { year: 2022, month_name: "Setembro 2022", title: "Virei ALI do SEBRAE" },
  {
    year: 2022,
    month_name: "Setembro 2022",
    title: "Casei com a minha Peach...",
  },
];

const mario = document.getElementById("mario");
const ground = document.getElementById("ground");
const grass = document.getElementById("grass");
const eventsContainer = document.getElementById("events");
let currentPipe;
let int1;
let playingTheme = false;
let currentIndex = -1;

const pipeHandler = (e) => {
  clearInterval(int1);
  document.getElementById("info").style.display = "none";
  if (currentPipe) {
    currentPipe.classList.remove("active");
  }
  const t = parseInt(e.currentTarget.dataset.index);
  const a = -100 - 150 * t - 25;
  const n = -100 - 150 * currentIndex - 25;
  const i = n - a;
  const o = 3 * Math.abs(i);
  eventsContainer.style.transitionDuration = `${o}ms`;
  eventsContainer.style.transform = `translateX(${a}px)`;
  ground.style.transitionDuration = `${o}ms`;
  ground.style.backgroundPosition = `${a}px 32px`;
  grass.style.transitionDuration = `${o}ms`;
  grass.style.backgroundPosition = `${a}px 0`;
  const r = i < 0 ? "left" : "right";
  mario.classList.remove(
    "idle",
    "walk-left",
    "walk-right",
    "search-left",
    "search-right"
  );
  mario.classList.add(`walk-${r}`);
  int1 = setTimeout(
    (e, t) => {
      mario.classList.remove(`walk-${e}`);
      mario.classList.add(`search-${e}`);
      t.classList.add("active");
      playSfx("pipe");
    },
    o,
    r,
    e.currentTarget
  );
  playingTheme = playingTheme || false;
  if (!playingTheme) {
    playSfx("theme", true);
    playingTheme = true;
  }
  currentIndex = t;
  currentPipe = e.currentTarget;
};

const fragment = document.createDocumentFragment();
timeline.forEach((e, t) => {
  const a = document.createElement("li");
  a.classList.add(e.title.includes("Peach") ? "peach" : "event");
  a.dataset.index = t;
  a.dataset.title = e.title;
  a.dataset.month = e.month_name;
  fragment.appendChild(a);
  a.addEventListener("click", pipeHandler);
});
eventsContainer.appendChild(fragment);

let audioContext;
let gainNode;
const canAudio = "AudioContext" in window || "webkitAudioContext" in window;
const audioBuffers = {};

const playSfx = (id, loop = false) => {
  if (!canAudio || !audioBuffers.hasOwnProperty(id)) return;

  // Create a new AudioContext on the first call
  if (!audioContext) {
    audioContext = new AudioContext();
    gainNode = audioContext.createGain();
    gainNode.gain.value = 1;
  }

  // Resume the AudioContext if it's in a suspended state
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const buffer = audioBuffers[id];
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
  source.loop = loop;
};

const loadAudio = async (urls, keys) => {
  const audioPromises = urls.map((url, i) =>
    window
      .fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) =>
        audioContext.decodeAudioData(arrayBuffer).then((buffer) => {
          audioBuffers[keys[i]] = buffer;
        })
      )
      .catch((error) => console.error(error))
  );
  await Promise.all(audioPromises);
};

loadAudio(
  ["assets/audio/pipe.mp3", "assets/audio/theme.mp3"],
  ["pipe", "theme"]
);
