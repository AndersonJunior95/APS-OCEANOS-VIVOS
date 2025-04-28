// Função para animar os círculos quando aparecem na tela
function animarCirculos() {
    const circulos = document.querySelectorAll(".circulo");
    circulos.forEach(circulo => {
        if (circulo.dataset.animado) return; // Evita animar duas vezes o mesmo círculo
        const rect = circulo.getBoundingClientRect();
        // Verifica se o círculo está visível na tela
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            circulo.dataset.animado = "true"; // Marca como animado
            let final = parseFloat(circulo.getAttribute("data-valor")); // Valor final a ser animado
            let count = 0;
            let unit = circulo.textContent.includes("°") ? "°C" : "%"; // Define a unidade
            let interval = setInterval(() => {
                count += unit === "%" ? 1 : 0.1; // Incrementa de acordo com a unidade
                if (count >= final) {
                    count = final; // Garante que não passe do valor final
                    clearInterval(interval); // Para a animação
                }
                // Atualiza o texto do círculo com o valor animado e a unidade
                circulo.textContent = unit === "%" ? `${Math.round(count)}%` : `${count.toFixed(1)}°C`;
            }, 30);
        }
    });
}

// Executa quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", animarCirculos); // Anima ao rolar a página
    animarCirculos(); // Anima caso já esteja visível ao carregar
});

// Seleciona todos os itens e a mensagem final
const itens = document.querySelectorAll('.item');
const mensagem = document.getElementById('mensagemFinal');

// Adiciona evento de clique para cada item
itens.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('selecionado'); // Alterna a seleção do item
        const checkbox = item.querySelector('.checkbox');
        // Mostra ou esconde o check conforme selecionado
        checkbox.textContent = item.classList.contains('selecionado') ? '✓' : '';

        // Verifica se todos os itens foram selecionados
        const todosSelecionados = [...itens].every(i => i.classList.contains('selecionado'));
        // Mostra a mensagem final se todos estiverem selecionados
        mensagem.style.display = todosSelecionados ? 'block' : 'none';
    });
});