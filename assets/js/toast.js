class MessageBox {
  constructor(option) {
    this.option = option;

    this.msgBoxArea = document.querySelector("#msgbox-area");

    if (this.msgBoxArea === null) {
      this.msgBoxArea = document.createElement("DIV");
      this.msgBoxArea.setAttribute("id", "msgbox-area");
      this.msgBoxArea.classList.add("msgbox-area");

      document.body.appendChild(this.msgBoxArea);
    }
  }

  show(msg, title, legend, link, callback, closeLabel) {
    if (msg === "" || msg === undefined || msg === null)
      throw "Message is empty or not defined.";
    if (closeLabel === undefined || closeLabel === null) closeLabel = "Close";

    const option = this.option;
    const msgboxBox = document.createElement("DIV");
    const msgboxContent = document.createElement("DIV");
    const msgboxCommand = document.createElement("DIV");
    const msgboxClose = document.createElement("A");
    const msgboxTitle = document.createElement("h5");
    const msgboxLegend = document.createElement("h2");

    msgboxTitle.classList.add("msgbox-title");
    msgboxTitle.innerText = title;
    msgboxLegend.classList.add("msgbox-legend");
    msgboxLegend.innerText = legend;
    msgboxContent.classList.add("msgbox-content");
    msgboxContent.innerHTML = msg;
    msgboxCommand.classList.add("msgbox-command");
    msgboxClose.classList.add("msgbox-close");
    msgboxClose.setAttribute("href", "#");
    msgboxClose.innerText = closeLabel;
    msgboxBox.classList.add("msgbox-box");
    msgboxBox.appendChild(msgboxTitle);
    msgboxBox.appendChild(msgboxLegend);
    msgboxBox.appendChild(msgboxContent);
    msgboxCommand.appendChild(msgboxClose);

    if (link != undefined || link != null) {
      const msgboxExplore = document.createElement("A");
      msgboxExplore.classList.add("msgbox-close");
      msgboxExplore.setAttribute("href", link);
      msgboxExplore.setAttribute("target", "_blank");
      msgboxExplore.innerText = "Explore";
      msgboxCommand.appendChild(msgboxExplore);
    }

    msgboxBox.appendChild(msgboxCommand);

    this.msgBoxArea.appendChild(msgboxBox);
    msgboxClose.onclick = (evt) => {
      evt.preventDefault();
      if (msgboxBox.classList.contains("msgbox-box-hide")) return;
      this.msgboxTimeout = null;
      this.hide(msgboxBox, callback);
    };

    if (option.closeTime > 0) {
      wait(option.closeTime).then(() => {
        this.hide(msgboxBox, callback);
      });
    }
  }

  hideMessageBox(msgboxBox) {
    return new Promise((resolve) => {
      msgboxBox.ontransitionend = () => {
        resolve();
      };
    });
  }

  async hide(msgboxBox, callback) {
    if (msgboxBox !== null) msgboxBox.classList.add("msgbox-box-hide");
    await this.hideMessageBox(msgboxBox);
    this.msgBoxArea.removeChild(msgboxBox);
    if (typeof callback === "function") callback();
  }
}

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const msgbox = new MessageBox({
  closeTime: 10000,
});

const msgs = [
  {
    id: "seb",
    title: "SEBRAE",
    legend: "AGENTE LOCAL DE INOVA????O",
    message:
      "Ofere??o respostas ??s demandas do neg??cio de MPEs, com mudan??as que geram impacto direto na gest??o empresarial, na melhoria de produtos, processos e na identifica????o de novos nichos de mercado para os seus produtos e servi??os. Especialista em Produtividade e Transforma????o Digital.",
    link: null,
  },
  {
    id: "pro",
    title: "PROGRAMADOR / CONSULTOR",
    legend: "FREELANCE",
    message:
      "Participei na cria????o de diversos sites empresarias e no terceiro setor, com foco na satisfa????o do cliente e otimiza????o de ROI. Os sites que fiz inclu??ram a Identidade Visual, campanha MKT e em alguns casos at?? o Google Ads. Exemplos:<br /><a class='different' href='https://boasobras.org'  target='_blank' aria-label='Link para o site do Boas Obras'>boasobras.org</a><br /><a class='different' href='https://mte.org.br'  target='_blank' aria-label='Link para o site do MTE'>mte.org.br</a><br /><a class='different' href='https://voaneves.com'  target='_blank' aria-label='Link para o site do Victor Neves (meu site)'>voaneves.com</a><br /><a class='different' href='https://motagodinho.com.br' target='_blank' aria-label='Link para o site Mota & Godinho'>motagodinho.com.br</a><br /><a class='different' href='https://www.instagram.com/mariaflorestetica' target='_blank' aria-label='Link para o site do Maria Flor'>maria flor</a>",
    link: null,
  },
  {
    id: "ibm",
    title: "IBM",
    legend: "CIENTISTA DE DADOS",
    message:
      "Curso realizado no Coursera, aprendi bastante desde python at?? modelos modernos de AI (intelig??ncia artificial). Foi uma boa introdu????o para a curiosidade necess??ria a um Data Scientist mais a parte de Hard Skills, como programa????o, modelos de dados e AI. Projetos hands-on em todos os t??picos, o que facilita o entendimento. <strong>Carga hor??ria</strong>: 300 horas.",
    link: null,
  },
  {
    id: "dam",
    title: "DAMASIO EDUCACIONAL",
    legend: "GESTOR DE CARTEIRAS",
    message:
      "Meu foco foi a Transforma????o Digital desta franquia, com Dashboards e Power BI para relat??rios. Planejei as campanhas de MKT, com foco em satisfa????o do cliente. Fiz a gest??o da unidadeal??m de promover treinamentos, modelo de gest??o que foi reconhecido pela matriz do Dam??sio.",
    link: null,
  },
  {
    id: "coc2",
    title: "COCA-COLA FEMSA",
    legend: "TRAINEE DE PLANEJAMENTO ESTRAT??GICO",
    message:
      "Ajudei na transforma????o digital da companhia, com relat??rios e dashboards usando o PowerBI, al??m de apresenta????es no PowerPoint. Tive proximidade a executivos C-level, ao traduzir ideias complexas em conceitos f??ceis de aplicar, obtendo resultados r??pidos e inova????o.",
    link: null,
  },
  {
    id: "kro",
    title: "KRONES AG",
    legend: "SUMMER INTERN",
    message:
      "Na Alemanha, participei das opera????es no setor de manufatura das m??quinas de etiquetagem e inspe????o, bem como tive contato com vendas, qualidade e times de gest??o. Conheci a cultural local e pude ter contato com um novo idioma.",
    link: null,
  },
  {
    id: "coc",
    title: "ESTAGI??RIO DE MANUTEN????O",
    legend: "COCA-COLA FEMSA",
    message:
      "Liderei 2 DMAIC (Six Sigma) em melhoria cont??nua, reduzindo odowntime em 4,5% e a conta de energia em 13%. Trabalhei coman??lise de falhas e participei de projetos de RCM, al??m daimplementa????o de 5S na ind??stria. Criei dashboards para osindicadores da manuten????o.",
    link: null,
  },
  {
    id: "mte",
    title: "GESTOR DE MARKETING",
    legend: "MTE",
    message:
      "Iniciei a ??rea de Marketing e liderei campanhas, duplicando aquantidade de eventos e aumentando o p??blico-m??dio de 15 para 53pessoas. Aderi a Google Cloud platform e l?? tamb??m participei dainternaliza????o da Feira Talento, maior feira universit??ria daAm??rica Latina.",
    link: null,
  },
  {
    id: "cnp",
    title: "BOLSISTA DE INICIA????O CIENT??FICA",
    legend: "CNPQ",
    message:
      "A Inicia????o Cient??fica foi em Nanotubos de Tit??nio para aplica????esbiom??dicas com o professor Rubens Caram, do<aclass='different'href='http://www.fem.unicamp.br/~labmet/'data-cursor='pointer'target='_blank'aria-label='Site do Laborat??rio de Materiais da Unicamp'>Labmet</a>. Bolsista CNPq e apresentei o projeto no congresso PIBIC naUNICAMP.",
    link: null,
  },
  {
    id: "uni",
    title: "ENGENHARIA MEC??NICA",
    legend: "UNICAMP",
    message:
      "Me graduar foi uma experi??ncia rica, pois o ecossistema universit??rio possibilitou conhecer novas ??reas, inovar,empreender e a liberdade de escolha me permitiram ter uma das melhores experi??ncias que j?? tive. 3600 horas.",
    link: null,
  },
  {
    id: "caa",
    title: "REFORMULA????O e MANUTEN????O",
    legend: "CAATO",
    message:
      "<span class='highlight'>Upgrade no tema, core e plugins</span>, mudan??as de layout, estabeleci redirecionamentos e encurtei URLs, al??m de fazer o SEO.<span class='highlight'>Otimizei a velocidade de acesso ao site</span>, com score no lighthouse saindo de 43/100 para 92/100. Verifiquei spam enviado para as caixas de e-mail. Conforme anecessidade,<span class='highlight'>prestei servi??os de manuten????o e cria????o</span>. Tema baseado no Wordpress.",
    link: "https://caato.com.br",
  },
  {
    id: "boa",
    title: "CRIA????O DO 0",
    legend: "BOAS OBRAS",
    message:
      "<span class='highlight'>Website criado do 0 </span>feito noGitHub pages usando um tema (Jekyll e Hugo). Conte??do criadopara a ONG, focado para mobile. O intuito era divulgar para poss??veis interessados as a????es.<span class='highlight'>Atualiza????es, manuten????es, identidade visual e otimiza????ode SEO</span>. O projeto est?? pausado, por??m caso algu??m tenha interesse em ajudar, fale comigo!",
    link: "https://boasobras.org",
  },
  {
    id: "mtep",
    title: "CRIA????O DO 0",
    legend: "MTE",
    message:
      "Altera????es no layout enquanto o CMS era o Drupal.<span class='highlight'>Desenvolvimento do website para mobile. </span>Cria????o de conte??do, redesign, cria????o de formul??rios,<span class='highlight'> otimiza????o de SEO</span>. Acompanhamento de desenvolvimento posteriores.Remodela????o do framework utilizado para CSS. Participa????o na cria????o e design da <span class='highlight'>feira TALENTO</span>, maior feira de recrutamento daAm??rica Latina.",
    link: "https://mte.org.br",
  },
  {
    id: "mot",
    title: "REFORMULA????O / SEO / MANUTEN????O",
    legend: "MOTA & GODINHO",
    message:
      "Foquei no<span class='highlight'> SEO do website</span>, al??m de atualizar core, plugins e etc.<span class='highlight'> Acelera????o de carregamento do site</span>, atrav??s de plugins do wordpress, com score lighthouse saindo do 62 para o 91. Mudan??as de layout, al??m de mudan??asde conte??do.<span class='highlight'> Otimiza????o mobile-friendly. </span>Modifica????es e aprimoramento do footer/header. Site baseado no Wordpress.",
    link: "https://motagodinho.com.br",
  },
  {
    id: "flu",
    title: "FLUTTER / REACT / VUE / PWA / JAVASCRIPT",
    legend: "CRIA????O DE APPS",
    message:
      "<p class='text'>Cria????o de 10+ apps para clientes,<span class='highlight'>com design responsivo, focado na experi??ncia do usu??rio e acessibilidade. </span>Para alguns, fiz marketing de conte??do e tamb??m pesquisa de mercado, al??m de cria????o de artes e cria????o de calend??rios de Marketing para acelerar estas empresas.<br /><br />Tecnologias utilizadas foram:<span class='highlight'>React Native, Flutter, Javascript, PWA. </span>Objetivo dos apps ?? a explora????o do<span class='highlight'>omnichannel e satisfa????o do cliente.</span><br /><br />Servi??os oferecidos: Mockup/Design de Interfacede usu??rio, apps para Android, apps para iPhone, Web Apps.Os aplicativos que criei variam desde coloridos e cheio devida at?? o design m??nimo.<span class='highlight'>Convers??o de Website para App, notifica????es por push, GCM,integra????o com Google, Facebook, Instagram, Github eAPI.</span>",
  },
  {
    id: "pwb",
    title: "POWERBI / EXCEL / PYTHON",
    legend: "DESENVOLVIMENTO DE DASHBOARDS",
    message:
      "Dashboards inteligentes focados na necessidade docliente, com fontes de dados diversas, desde Excelat?? SQL/Hadoop. A cria????o parte da an??lise denecessidades quais indicadores s??o necess??rios equal hist??ria quer descobrir-se mais. Gosto dedesenvolver dashboards e no meus trabalhos naCoca-Cola, Dam??sio e SEBRAE estou sempredesenvolvendo estes para empresas.",
  },
  {
    id: "rep",
    title: "PYTHON / HTML / CSS / JS / ETC",
    legend: "GITHUB REPOS",
    message:
      "No GitHub tenho v??rios reposit??rios testes de v??rias linguagens e teconologia. Os principais s??o o jogo da cobrinha encapsulado como um agente do OpenAI gym, al??m de testes com v??rios algoritmos de Reinforcement Learning (como DQN, ACER, RAINBOW, etc). Al??m disso, tenho alguns sites, outras coisas feitas em python, react e flutter.",
    link: "https://github.com/voaneves",
  },
];

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", function () {
    let s = msgs.filter((d) => d.id === this.dataset.toast)[0];
    msgbox.show(s.message, s.title, s.legend, s.link);
  });
});
