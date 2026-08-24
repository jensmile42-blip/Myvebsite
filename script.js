function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleMore(id) {
  const box = document.getElementById(id);
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function checkQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const result = document.getElementById("quizResult");

  if (!q1 || !q2 || !q3) {
    result.innerHTML = "❗ ກະລຸນາຕອບທຸກຄຳຖາມກ່ອນ";
    result.style.color = "#f39c12";
    return;
  }

  const score = parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value);

  const messages = [
    "😅 ຄະແນນ 0/3 — ພະຍາຍາມຕໍ່ໄປ ເຮັດອີກຄັ້ງ!",
    "🙂 ຄະແນນ 1/3 — ລອງອ່ານເນື້ອຫາເພີ່ມ",
    "😊 ດີຫຼາຍ! ຄະແນນ 2/3",
    "🎉 ເກັ່ງຫຼາຍ! ຄະແນນ 3/3 ເຕັມ!"
  ];
  const colors = ["#e74c3c", "#e67e22", "#f39c12", "#2ecc71"];

  result.innerHTML = messages[score];
  result.style.color = colors[score];
}

function resetQuiz() {
  document.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
  const result = document.getElementById("quizResult");
  result.innerHTML = "";
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.display = "none";
}

window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  btn.style.display = window.scrollY > 500 ? "block" : "none";
});

document.querySelectorAll(".zoomable").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightboxImg").src = img.src;
  });
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function runCounter() {
  document.querySelectorAll(".counter").forEach(counter => {
    const target = parseFloat(counter.getAttribute("data-target"));
    let current = 0;
    const increment = target / 80;

    const update = () => {
      current += increment;

      if (current >= target) {
        counter.innerText = target;
      } else {
        counter.innerText = current.toFixed(1);
        requestAnimationFrame(update);
      }
    };
    update();
  });
}

let counterStarted = false;
window.addEventListener("scroll", () => {
  const stats = document.getElementById("stats");

  if (stats && stats.getBoundingClientRect().top < window.innerHeight && !counterStarted) {
    counterStarted = true;
    runCounter();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".btn-theme").innerHTML =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}