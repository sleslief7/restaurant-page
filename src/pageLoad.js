import homeContent from "./home.js";

export default function pageLoad() {
  const navBar = document.querySelector("nav");
  const content = document.getElementById("content");

  navBar.id = "nav-bar";

  const navItems = ["Home", "Menu", "About"];

  navItems.forEach((item) => {
    navBar.appendChild(createBtn(item));
  });

  const homeBtn = document.getElementById("home-nav-btn");
  homeBtn.classList.add("current");
  content.appendChild(homeContent());
}

function createBtn(btnName) {
  const btn = document.createElement("button");
  btn.id = `${btnName.toLowerCase()}-nav-btn`;
  btn.name = btnName.toLowerCase();
  btn.className = `nav-btn`;
  btn.textContent = `${btnName}`;
  return btn;
}
