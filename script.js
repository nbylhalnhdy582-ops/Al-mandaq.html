function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('show');
}

function showWelcome() {
  const box = document.getElementById("welcomeBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function startSite() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

function startSite() {
  const startScreen = document.getElementById("startScreen");
  const mainContent = document.getElementById("mainContent");
  
  startScreen.classList.add("fade-out"); // إضافة الكلاس للاختفاء تدريجيًا
  
  // بعد انتهاء الانتقال (0.8 ثانية)، نخفي العنصر نهائيًا
  setTimeout(() => {
    startScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 800); // نفس مدة transition
}
