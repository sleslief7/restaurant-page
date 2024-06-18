import pageLoad from "./pageLoad.js";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";
import "./style.css";

pageLoad();

const contentDiv = document.getElementById("content");
const navItems = document.querySelectorAll(".nav-btn");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    const el = e.currentTarget;
    setCurrentNavBtn(el.id);
    contentDiv.innerHTML = "";
    contentDiv.appendChild(getContentByName(el));
  });
});

function setCurrentNavBtn(navBtnId) {
  const currentNavItem = document.getElementById(navBtnId);
  navItems.forEach((x) => x.classList.toggle("current", false));
  currentNavItem.classList.add("current");
}

function getContentByName(el) {
  return el.name === "home"
    ? homeContent()
    : el.name === "menu"
    ? menuContent()
    : aboutContent();
}
