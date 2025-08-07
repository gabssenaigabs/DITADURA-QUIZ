const questions = [
    {
        question: "Você acha certo o governo restringir liberdades em nome da segurança nacional?",
        answers: ["Sim, segurança vem primeiro", "Só em casos extremos", "Não, isso é inaceitável"]
    },
    {
        question: "Jornalistas criticando o governo devem ser...",
        answers: ["Punidos com rigor", "Monitorados com atenção", "Livres e respeitados ao expressar suas opiniões"]
    },
    {
        question: "Movimentos estudantis nas ruas representam...",
        answers: ["Ameaça à ordem", "Preocupação legítima", "Expressão democrática importante"]
    },
    {
        question: "Sobre censura em músicas, filmes e jornais...",
        answers: ["Apoio totalmente", "Depende do conteúdo", "Sou totalmente contra"]
    },
    {
        question: "Você aceitaria intervenção militar para controlar crises políticas?",
        answers: ["Sim, sem pensar duas vezes", "Talvez, em último caso", "Jamais"]
    },
    {
        question: "O governo deve prender opositores políticos?",
        answers: ["Se forem perigosos, sim", "É uma linha tênue", "Nunca é justificável"]
    },
    {
        question: "A economia deve ser controlada pelo Estado com mão forte?",
        answers: ["Sim, com disciplina", "Só em alguns setores", "Não, o livre mercado deve prevalecer"]
    },
    {
        question: "Você aceitaria viver em um país sem eleições livres por estabilidade?",
        answers: ["Sim, se funcionar melhor", "Difícil dizer", "Nunca"]
    },
    {
        question: "Você acha que tortura pode ser usada para obter informações?",
        answers: ["Sim, em casos extremos", "Tenho dúvidas", "Nunca se justifica"]
    },
    {
        question: "Qual é o papel ideal das Forças Armadas hoje?",
        answers: ["Ser guardiãs do poder", "Estar sempre atentas", "Defender a democracia e não intervir"]
    }
];

const figures = [
    {
        nome: "Humberto de Alencar Castello Branco",
        imagem: "img/humberto.jpg",
        descricao: "Primeiro presidente do regime militar brasileiro (1964-1967).",
        posicaoPolitica: "Apoiador do golpe de 1964, implementou os primeiros Atos Institucionais e iniciou a repressão. Defendia uma transição controlada para a democracia."
    },
    {
        nome: "Artur da Costa e Silva",
        imagem: "img/artur.jpg",
        descricao: "Segundo presidente do regime militar brasileiro (1967-1969).",
        posicaoPolitica: "Endureceu o regime com o AI-5, restringindo liberdades civis e instaurando censura. Repressivo e autoritário."
    },
    {
        nome: "Emílio Garrastazu Médici",
        imagem: "img/medici.webp",
        descricao: "Terceiro presidente do regime militar brasileiro (1969-1974).",
        posicaoPolitica: "Conduziu o período mais repressivo da ditadura, marcado por torturas, censura, perseguições políticas e o 'milagre econômico'."
    },
    {
        nome: "Ernesto Geisel",
        imagem: "img/geisel.webp",
        descricao: "Quarto presidente do regime militar brasileiro (1974-1979).",
        posicaoPolitica: "Iniciou a abertura política de forma lenta e gradual. Enfrentou resistência de militares linha-dura e reduziu a repressão."
    },
    {
        nome: "João Baptista de Oliveira Figueiredo",
        imagem: "img/joao.jpg",
        descricao: "Último presidente do regime militar brasileiro (1979-1985).",
        posicaoPolitica: "Deu continuidade à abertura, sancionou a Lei da Anistia e conduziu o país à redemocratização, apesar de resistências iniciais."
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");

function showQuestion() {
    const q = questions[currentQuestion];
    questionContainer.innerHTML = `<h2>${q.question}</h2>`;
    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.classList.add("answer-button");
        btn.onclick = () => selectAnswer(index);
        questionContainer.appendChild(btn);
    });
}

function selectAnswer(index) {
    score += index;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.innerHTML = "";
    let perfil;
    if (score <= 8) perfil = figures[0];
    else if (score <= 12) perfil = figures[1];
    else if (score <= 16) perfil = figures[2];
    else if (score <= 20) perfil = figures[3];
    else perfil = figures[4];

    questionContainer.innerHTML = `
        <img class="result-img" src="${perfil.imagem}" alt="${perfil.nome}" />
        <h2>${perfil.nome}</h2>
        <p class="result-descricao">${perfil.descricao}</p>
        <p class="result-posicao">${perfil.posicaoPolitica}</p>
    `;
}

showQuestion();
