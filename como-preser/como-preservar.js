function animarCirculos() {
    const circulos = document.querySelectorAll(".circulo");
    circulos.forEach(circulo => {
        if (circulo.dataset.animado) return; // Evita animar duas vezes
        const rect = circulo.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            circulo.dataset.animado = "true";
            let final = parseFloat(circulo.getAttribute("data-valor"));
            let count = 0;
            let unit = circulo.textContent.includes("°") ? "°C" : "%";
            let interval = setInterval(() => {
                count += unit === "%" ? 1 : 0.1;
                if (count >= final) {
                    count = final;
                    clearInterval(interval);
                }
                circulo.textContent = unit === "%" ? `${Math.round(count)}%` : `${count.toFixed(1)}°C`;
            }, 30);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", animarCirculos);
    animarCirculos(); // Para caso já esteja visível ao carregar
});

    const itens = document.querySelectorAll('.item');
    const mensagem = document.getElementById('mensagemFinal');

    itens.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('selecionado');
        const checkbox = item.querySelector('.checkbox');
        checkbox.textContent = item.classList.contains('selecionado') ? '✓' : '';

        const todosSelecionados = [...itens].every(i => i.classList.contains('selecionado'));
        mensagem.style.display = todosSelecionados ? 'block' : 'none';
      });
    });