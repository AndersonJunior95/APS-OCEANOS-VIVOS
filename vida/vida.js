/**
 * Rola o elemento do carrossel horizontalmente na direção especificada.
 *
 * @param {number} direction - A direção para rolar: use 1 para a direita, -1 para a esquerda.
 *
 * A função calcula a quantidade de rolagem como 80% da largura visível do carrossel,
 * então rola o carrossel suavemente na direção informada.
 */
function scrollCarrossel(direction) {
    const carrossel = document.getElementById("carrossel");
    const scrollAmount = carrossel.clientWidth * 0.8;
    carrossel.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: 'smooth' 
    });
}

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
    });

      $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1500);
        return false;
    });
});