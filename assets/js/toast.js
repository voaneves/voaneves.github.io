const msgs = [
  {
    id: "seb",
    title: "SEBRAE",
    legend: "AGENTE LOCAL DE INOVAÇÃO",
    message:
      "Ofereço respostas às demandas do negócio de MPEs, com mudanças que geram impacto direto na gestão empresarial, na melhoria de produtos, processos e na identificação de novos nichos de mercado para os seus produtos e serviços. Especialista em Produtividade e Transformação Digital.",
    link: null,
  },
  {
    id: "pro",
    title: "PROGRAMADOR / CONSULTOR",
    legend: "FREELANCE",
    message:
      "Participei na criação de diversos sites empresarias e no terceiro setor, com foco na satisfação do cliente e otimização de ROI. Os sites que fiz incluíram a Identidade Visual, campanha MKT e em alguns casos até o Google Ads. Exemplos:<br /><a class='different' href='https://boasobras.org'  target='_blank' aria-label='Link para o site do Boas Obras'>boasobras.org</a><br /><a class='different' href='https://mte.org.br'  target='_blank' aria-label='Link para o site do MTE'>mte.org.br</a><br /><a class='different' href='https://voaneves.com'  target='_blank' aria-label='Link para o site do Victor Neves (meu site)'>voaneves.com</a><br /><a class='different' href='https://motagodinho.com.br' target='_blank' aria-label='Link para o site Mota & Godinho'>motagodinho.com.br</a><br /><a class='different' href='https://www.instagram.com/mariaflorestetica' target='_blank' aria-label='Link para o site do Maria Flor'>maria flor</a>",
    link: null,
  },
  {
    id: "ibm",
    title: "IBM",
    legend: "CIENTISTA DE DADOS",
    message:
      "Curso realizado no Coursera, aprendi bastante desde python até modelos modernos de AI (inteligência artificial). Foi uma boa introdução para a curiosidade necessária a um Data Scientist mais a parte de Hard Skills, como programação, modelos de dados e AI. Projetos hands-on em todos os tópicos, o que facilita o entendimento. <strong>Carga horária</strong>: 300 horas.",
    link: null,
  },
  {
    id: "dam",
    title: "DAMASIO EDUCACIONAL",
    legend: "GESTOR DE CARTEIRAS",
    message:
      "Meu foco foi a Transformação Digital desta franquia, com Dashboards e Power BI para relatórios. Planejei as campanhas de MKT, com foco em satisfação do cliente. Fiz a gestão da unidadealém de promover treinamentos, modelo de gestão que foi reconhecido pela matriz do Damásio.",
    link: null,
  },
  {
    id: "coc2",
    title: "COCA-COLA FEMSA",
    legend: "TRAINEE DE PLANEJAMENTO ESTRATÉGICO",
    message:
      "Ajudei na transformação digital da companhia, com relatórios e dashboards usando o PowerBI, além de apresentações no PowerPoint. Tive proximidade a executivos C-level, ao traduzir ideias complexas em conceitos fáceis de aplicar, obtendo resultados rápidos e inovação.",
    link: null,
  },
  {
    id: "kro",
    title: "KRONES AG",
    legend: "SUMMER INTERN",
    message:
      "Na Alemanha, participei das operações no setor de manufatura das máquinas de etiquetagem e inspeção, bem como tive contato com vendas, qualidade e times de gestão. Conheci a cultural local e pude ter contato com um novo idioma.",
    link: null,
  },
  {
    id: "coc",
    title: "ESTAGIÁRIO DE MANUTENÇÃO",
    legend: "COCA-COLA FEMSA",
    message:
      "Liderei 2 DMAIC (Six Sigma) em melhoria contínua, reduzindo odowntime em 4,5% e a conta de energia em 13%. Trabalhei comanálise de falhas e participei de projetos de RCM, além daimplementação de 5S na indústria. Criei dashboards para osindicadores da manutenção.",
    link: null,
  },
  {
    id: "mte",
    title: "GESTOR DE MARKETING",
    legend: "MTE",
    message:
      "Iniciei a área de Marketing e liderei campanhas, duplicando aquantidade de eventos e aumentando o público-médio de 15 para 53pessoas. Aderi a Google Cloud platform e lá também participei dainternalização da Feira Talento, maior feira universitária daAmérica Latina.",
    link: null,
  },
  {
    id: "cnp",
    title: "BOLSISTA DE INICIAÇÃO CIENTÍFICA",
    legend: "CNPQ",
    message:
      "A Iniciação Científica foi em Nanotubos de Titânio para aplicaçõesbiomédicas com o professor Rubens Caram, do<aclass='different'href='http://www.fem.unicamp.br/~labmet/'data-cursor='pointer'target='_blank'aria-label='Site do Laboratório de Materiais da Unicamp'>Labmet</a>. Bolsista CNPq e apresentei o projeto no congresso PIBIC naUNICAMP.",
    link: null,
  },
  {
    id: "uni",
    title: "ENGENHARIA MECÂNICA",
    legend: "UNICAMP",
    message:
      "Me graduar foi uma experiência rica, pois o ecossistema universitário possibilitou conhecer novas áreas, inovar,empreender e a liberdade de escolha me permitiram ter uma das melhores experiências que já tive. 3600 horas.",
    link: null,
  },
  {
    id: "caa",
    title: "REFORMULAÇÂO e MANUTENÇÃO",
    legend: "CAATO",
    message:
      "<span class='highlight'>Upgrade no tema, core e plugins</span>, mudanças de layout, estabeleci redirecionamentos e encurtei URLs, além de fazer o SEO.<span class='highlight'>Otimizei a velocidade de acesso ao site</span>, com score no lighthouse saindo de 43/100 para 92/100. Verifiquei spam enviado para as caixas de e-mail. Conforme anecessidade,<span class='highlight'>prestei serviços de manutenção e criação</span>. Tema baseado no Wordpress.",
    link: "https://caato.com.br",
  },
  {
    id: "boa",
    title: "CRIAÇÃO DO 0",
    legend: "BOAS OBRAS",
    message:
      "<span class='highlight'>Website criado do 0 </span>feito noGitHub pages usando um tema (Jekyll e Hugo). Conteúdo criadopara a ONG, focado para mobile. O intuito era divulgar para possíveis interessados as ações.<span class='highlight'>Atualizações, manutenções, identidade visual e otimizaçãode SEO</span>. O projeto está pausado, porém caso alguém tenha interesse em ajudar, fale comigo!",
    link: "https://boasobras.org",
  },
  {
    id: "mtep",
    title: "CRIAÇÃO DO 0",
    legend: "MTE",
    message:
      "Alterações no layout enquanto o CMS era o Drupal.<span class='highlight'>Desenvolvimento do website para mobile. </span>Criação de conteúdo, redesign, criação de formulários,<span class='highlight'> otimização de SEO</span>. Acompanhamento de desenvolvimento posteriores.Remodelação do framework utilizado para CSS. Participação na criação e design da <span class='highlight'>feira TALENTO</span>, maior feira de recrutamento daAmérica Latina.",
    link: "https://mte.org.br",
  },
  {
    id: "mot",
    title: "REFORMULAÇÂO / SEO / MANUTENÇÃO",
    legend: "MOTA & GODINHO",
    message:
      "Foquei no<span class='highlight'> SEO do website</span>, além de atualizar core, plugins e etc.<span class='highlight'> Aceleração de carregamento do site</span>, através de plugins do wordpress, com score lighthouse saindo do 62 para o 91. Mudanças de layout, além de mudançasde conteúdo.<span class='highlight'> Otimização mobile-friendly. </span>Modificações e aprimoramento do footer/header. Site baseado no Wordpress.",
    link: "https://motagodinho.com.br",
  },
  {
    id: "flu",
    title: "FLUTTER / REACT / VUE / PWA / JAVASCRIPT",
    legend: "CRIAÇÃO DE APPS",
    message:
      "<p class='text'>Criação de 10+ apps para clientes,<span class='highlight'>com design responsivo, focado na experiência do usuário e acessibilidade. </span>Para alguns, fiz marketing de conteúdo e também pesquisa de mercado, além de criação de artes e criação de calendários de Marketing para acelerar estas empresas.<br /><br />Tecnologias utilizadas foram:<span class='highlight'>React Native, Flutter, Javascript, PWA. </span>Objetivo dos apps é a exploração do<span class='highlight'>omnichannel e satisfação do cliente.</span><br /><br />Serviços oferecidos: Mockup/Design de Interfacede usuário, apps para Android, apps para iPhone, Web Apps.Os aplicativos que criei variam desde coloridos e cheio devida até o design mínimo.<span class='highlight'>Conversão de Website para App, notificações por push, GCM,integração com Google, Facebook, Instagram, Github eAPI.</span>",
  },
  {
    id: "pwb",
    title: "POWERBI / EXCEL / PYTHON",
    legend: "DESENVOLVIMENTO DE DASHBOARDS",
    message:
      "Dashboards inteligentes focados na necessidade docliente, com fontes de dados diversas, desde Excelaté SQL/Hadoop. A criação parte da análise denecessidades quais indicadores são necessários equal história quer descobrir-se mais. Gosto dedesenvolver dashboards e no meus trabalhos naCoca-Cola, Damásio e SEBRAE estou sempredesenvolvendo estes para empresas.",
  },
  {
    id: "rep",
    title: "PYTHON / HTML / CSS / JS / ETC",
    legend: "GITHUB REPOS",
    message:
      "No GitHub tenho vários repositórios testes de várias linguagens e teconologia. Os principais são o jogo da cobrinha encapsulado como um agente do OpenAI gym, além de testes com vários algoritmos de Reinforcement Learning (como DQN, ACER, RAINBOW, etc). Além disso, tenho alguns sites, outras coisas feitas em python, react e flutter.",
    link: "https://github.com/voaneves",
  },
];

class MessageBox {
  constructor(option) {
    // Initialize the MessageBox, and specify the option passed
    this.option = option;

    // Create an area to contain the MessageBox
    this.msgBoxArea = document.querySelector("#msgbox-area");

    // If no element exists with the #msgbox-area ID, create it and append it
    // to document.body
    if (!this.msgBoxArea) {
      this.msgBoxArea = document.createElement("DIV");
      this.msgBoxArea.setAttribute("id", "msgbox-area");
      this.msgBoxArea.classList.add("msgbox-area");
      document.body.appendChild(this.msgBoxArea);
    }
  }

  // Show the MessageBox
  show(msg, title, legend, link, callback, closeLabel = "Close") {
    // Make sure that a message is specified
    if (!msg) throw "Message is empty or not defined.";

    // Store the option passed
    const option = this.option;

    // Create the element which will contain the MessageBox
    const msgboxBox = document.createElement("DIV");

    // Create two additional container elements for the content and command of the MessageBox
    const msgboxContent = document.createElement("DIV");
    const msgboxCommand = document.createElement("DIV");

    // Create a close element for the MessageBox
    const msgboxClose = document.createElement("A");

    // Create two other elements for the title and legend of the MessageBox
    const msgboxTitle = document.createElement("h5");
    const msgboxLegend = document.createElement("h2");

    // Set the appropriate classes and content of the title and legend
    msgboxTitle.classList.add("msgbox-title");
    msgboxTitle.innerText = title;
    msgboxLegend.classList.add("msgbox-legend");
    msgboxLegend.innerText = legend;

    // Set the class name and inner HTML of the content element
    msgboxContent.classList.add("msgbox-content");
    msgboxContent.innerHTML = msg;

    // Set the class name and close label of the close command
    msgboxCommand.classList.add("msgbox-command");
    msgboxClose.classList.add("msgbox-close");
    msgboxClose.setAttribute("href", "#");
    msgboxClose.innerText = closeLabel;

    // Create an optional 'Explore' command
    if (link) {
      const msgboxExplore = document.createElement("A");
      msgboxExplore.classList.add("msgbox-close");
      msgboxExplore.setAttribute("href", link);
      msgboxExplore.setAttribute("target", "_blank");
      msgboxExplore.innerText = "Explore";
      msgboxCommand.appendChild(msgboxExplore);
    }

    // Append all the necessary elements to the main container
    msgboxBox.classList.add("msgbox-box");
    msgboxBox.appendChild(msgboxTitle);
    msgboxBox.appendChild(msgboxLegend);
    msgboxBox.appendChild(msgboxContent);
    msgboxCommand.appendChild(msgboxClose);
    msgboxBox.appendChild(msgboxCommand);
    this.msgBoxArea.appendChild(msgboxBox);

    // Add an event listener to the close command
    msgboxClose.onclick = (evt) => {
      evt.preventDefault();
      // Return early if the box is already hidden
      if (msgboxBox.classList.contains("msgbox-box-hide")) return;
      // Call the `hide` method and pass the callback
      this.hide(msgboxBox, callback);
    };

    // Set a timeout for the message box to be hidden with the given time
    if (option.closeTime > 0) {
      setTimeout(() => {
        this.hide(msgboxBox, callback);
      }, option.closeTime);
    }
  }

  // Function to hide message box and then remove it from the DOM
  hideMessageBox(msgboxBox) {
    return new Promise((resolve) => {
      // Call a function when the "hide" transition is finished
      msgboxBox.ontransitionend = () => {
        resolve();
      };
    });
  }

  async hide(msgboxBox, callback) {
    // Check if child is present to hide
    if (msgboxBox !== null) msgboxBox.classList.add("msgbox-box-hide");
    // Wait for hide transition to finish
    await this.hideMessageBox(msgboxBox);
    // Remove msgbox from the DOM
    this.msgBoxArea.removeChild(msgboxBox);
    // Call the passed in callback if it is a function
    if (typeof callback === "function") callback();
  }
}

const msgbox = new MessageBox({
  closeTime: 10000,
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", function () {
    const s = msgs.find((d) => d.id === this.dataset.toast);
    msgbox.show(s.message, s.title, s.legend, s.link);
  });
});
