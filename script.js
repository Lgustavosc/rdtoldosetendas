function enviarWhatsapp() {
    const fone = "5567992942289";
    const texto = "Olá! Vim pelo site da RD Toldos e Tendas e gostaria de solicitar um orçamento.";
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(texto)}`, "_blank");
}

function moveSlide(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const images = carousel.querySelectorAll("img");
    let index = [...images].findIndex(img => img.classList.contains("active"));

    images[index].classList.remove("active");
    index = (index + direction + images.length) % images.length;
    images[index].classList.add("active");
}