// 1. Menu Mobile
const botaoMenu = document.getElementById("botao-menu");
const navegacao = document.getElementById("navegacao");

if (botaoMenu && navegacao) {
    botaoMenu.addEventListener("click", () => {
        const aberto = navegacao.classList.toggle("ativa");
        botaoMenu.setAttribute("aria-expanded", aberto);
    });

    navegacao.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navegacao.classList.remove("ativa");
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });
}

// 2. Filtros Dinâmicos do Cardápio
const filtros = document.querySelectorAll(".filtro");
const pratos = document.querySelectorAll(".prato-card");

filtros.forEach((filtro) => {
    filtro.addEventListener("click", () => {
        const categoriaSelecionada = filtro.dataset.categoria;

        filtros.forEach((botao) => {
            const selecionado = botao === filtro;
            botao.classList.toggle("ativo", selecionado);
            botao.setAttribute("aria-pressed", selecionado);
        });

        pratos.forEach((prato) => {
            const corresponde =
                categoriaSelecionada === "todos" ||
                prato.dataset.categoria === categoriaSelecionada;

            prato.hidden = !corresponde;
        });
    });
});