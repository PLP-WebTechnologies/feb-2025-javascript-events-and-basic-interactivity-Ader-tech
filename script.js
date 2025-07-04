

document.getElementById("clickMe").addEventListener("click", () => {
  alert("You clicked the button!");
});

document.getElementById("hoverText").addEventListener("mouseover", () => {
  document.getElementById("hoverText").innerText = "Hovered!";
});

document.getElementById("keyInput").addEventListener("keyup", (e) => {
  document.getElementById("keyOutput").textContent = `You typed: ${e.key}`;
});

let timer;
const secretBtn = document.getElementById("secretAction");

secretBtn.addEventListener("dblclick", () => {
  alert("Double click secret activated!");
});

secretBtn.addEventListener("mousedown", () => {
  timer = setTimeout(() => {
    alert("Long press secret activated!");
  }, 1000);
});

secretBtn.addEventListener("mouseup", () => clearTimeout(timer));


document.getElementById("colorChanger").addEventListener("click", () => {
  document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 85%)`;
});


const images = [
  "/image/box.png",
  "/image/bead.png",
  "/image/case.png"
];
let current = 0;

document.getElementById("nextSlide").addEventListener("click", () => {
  current = (current + 1) % images.length;
  document.getElementById("slideImage").src = images[current];
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contents.forEach((c) => c.classList.remove("active"));
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});



const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
  const feedback = document.getElementById("emailFeedback");
  if (!emailInput.value.includes("@")) {
    feedback.textContent = "Invalid email format.";
  } else {
    feedback.textContent = "";
  }
});

passInput.addEventListener("input", () => {
  const feedback = document.getElementById("passFeedback");
  if (passInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value;
  const pass = passInput.value;
  const message = document.getElementById("formMessage");

  if (!email.includes("@") || pass.length < 8) {
    message.textContent = "Please fix the errors above.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});
