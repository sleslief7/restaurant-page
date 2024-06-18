export default function homeContent() {
  const div = document.createElement("div");
  div.id = "home-container";

  const h1 = document.createElement("h1");
  h1.textContent = "Birthday Restaurant";
  const p = document.createElement("p");
  p.textContent = "Best dominican restaurant in New York!";

  div.appendChild(h1);
  div.appendChild(p);
  return div;
}

export function createCard() {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  return cardDiv;
}
