let index = 0;
const slides = document.querySelectorAll(".carousel img");

const isMobile = () => window.innerWidth <= 768;

const showSlide = () => {
  slides.forEach(s => s.classList.remove("active"));

  // sempre mostra a atual
  slides[index].classList.add("active");

  // desktop mostra 2
  if (!isMobile()) {
    const second = (index + 1) % slides.length;
    slides[second].classList.add("active");
  }

  index = (index + 1) % slides.length;
};

// autoplay
setInterval(showSlide, 3000);

// inicia
showSlide();

// atualiza se mudar tamanho da tela
window.addEventListener("resize", showSlide);

/* BOTÃO */
document.querySelectorAll(".btn").forEach(btn => {
  btn.onclick = () => {
    window.location.href = "https://pay.cakto.com.br/3fk9ybd_860619";
  };
});