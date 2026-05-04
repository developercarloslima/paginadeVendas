let index = 0;
const slides = document.querySelectorAll(".carousel img");

const showSlide = () => {
  slides.forEach(s => s.classList.remove("active"));

  const first = index;
  const second = (index + 1) % slides.length;

  slides[first].classList.add("active");
  slides[second].classList.add("active");

  index = (index + 1) % slides.length;
};


setInterval(showSlide, 3000);
showSlide();

// BOTÃO
document.querySelectorAll(".btn").forEach(btn => {
  btn.onclick = () => {
    window.location.href = "https://pay.cakto.com.br/3fk9ybd_860619"; // coloca checkout aqui
  };
});