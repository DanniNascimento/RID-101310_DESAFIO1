// Conteúdo das seções
const secoes = {
    carreira: "💼 Tenho experiência como Desenvolvedor Full Stack, atuando com projetos web, APIs e automações.",
    projetos: "🚀 Desenvolvi sistemas para empresas, bots automatizados e plataformas web responsivas.",
    contato: "📩 Para entrar em contato, use o formulário abaixo ou envie um e-mail para: dev@danninascimento.com"
};

// Função para trocar conteúdo
function showSection(secao) {
    document.getElementById("conteudo-dinamico").innerHTML = `<p>${secoes[secao]}</p>`;
}

// Contagem regressiva para lançamento
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 15); // 15 dias a partir de hoje

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("timer").textContent = "🚀 Já está no ar!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);