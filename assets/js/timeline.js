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
  {
    year: 2012,
    month_name: "Janeiro 2012",
    title: "Entrei na UNICAMP",
  },
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
  {
    year: 2022,
    month_name: "Setembro 2022",
    title: "Virei ALI do SEBRAE",
  },
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
let playingTheme = false;
let currentIndex = -1;
let currentPipe;
let int1;

// click handler
const pipeHandler = (event) => {
  clearInterval(int1);
  document.getElementById("info").style.display = "none";

  // clear old
  !currentPipe || currentPipe.classList.remove("active");

  // get index
  const index = parseInt(event.currentTarget.dataset.index);

  // walk
  const xpos = -100 - index * 150 - 25;
  const curXpos = -100 - currentIndex * 150 - 25;
  const distance = curXpos - xpos;
  const duration = Math.abs(distance) * 3;
  eventsContainer.style.transitionDuration = `${duration}ms`;
  eventsContainer.style.transform = `translateX(${xpos}px)`;
  ground.style.transitionDuration = `${duration}ms`;
  ground.style.backgroundPosition = `${xpos}px 32px`;
  grass.style.transitionDuration = `${duration}ms`;
  grass.style.backgroundPosition = `${xpos}px 0`;

  // walk style
  const dir = distance < 0 ? "left" : "right";
  mario.classList.remove(
    "idle",
    "walk-left",
    "walk-right",
    "search-left",
    "search-right"
  );
  mario.classList.add(`walk-${dir}`);
  int1 = setTimeout(
    (dir, target) => {
      mario.classList.remove(`walk-${dir}`);
      mario.classList.add(`search-${dir}`);
      target.classList.add("active");
      playSfx("pipe");
    },
    duration,
    dir,
    event.currentTarget
  );

  if (playingTheme === false) {
    playSfx("theme", true);
    playingTheme = true;
  }

  // store position
  currentIndex = index;
  currentPipe = event.currentTarget;
};

// setup timeline
timeline.forEach((event, index) => {
  const eventElement = document.createElement("li");
  eventElement.classList.add(event.title.includes("Peach") ? "peach" : "event");
  eventElement.dataset.index = index;
  eventElement.dataset.title = event.title;
  eventElement.dataset.month = event.month_name;
  eventsContainer.appendChild(eventElement);
  eventElement.addEventListener("click", pipeHandler);
});

// Audio handling
let canAudio = "AudioContext" in window || "webkitAudioContext" in window;
let audioContext;
let gainNode;
let audioBuffers = {};

if (canAudio) {
  audioContext = new AudioContext();
  gainNode = audioContext.createGain();
  gainNode.gain.value = 1;
}

const playSfx = (id, loop = false) => {
  if (!canAudio || !audioBuffers.hasOwnProperty(id)) return;
  const buffer = audioBuffers[id];
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
  source.loop = loop;
};

const loadAudio = (urls, ids) => {
  let audioUrls = typeof urls == "string" ? [urls] : urls;
  let audioIds = typeof ids == "string" ? [ids] : ids;

  audioUrls.forEach((url, index) => {
    window
      .fetch(url)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) =>
        audioContext.decodeAudioData(
          arrayBuffer,
          (audioBuffer) => {
            audioBuffers[audioIds[index]] = audioBuffer;
          },
          (error) => console.log(error)
        )
      );
  });
};

loadAudio(
  ["assets/audio/pipe.mp3", "assets/audio/theme.mp3"],
  ["pipe", "theme"]
);
