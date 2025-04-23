document.addEventListener("DOMContentLoaded", () => {
    const circulos = document.querySelectorAll(".circulo");

    circulos.forEach(circulo => {
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
    });
});