import Mangu from "./images/mangu.jpeg";
import Locrio from "./images/locrio.jpeg";
import TresLeches from "./images/tresleches.jpeg";

export default function menuContent() {
  const div = document.createElement("div");
  div.id = "menu-container";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  h1.id = "menu-h1";

  const manguCard = createCardWithImg(
    "Mangu",
    15,
    "Traditional Dominican breakfast dish, featuring mashed plantains, crispy fried cheese, fried salami, avocado, and sautéed onions. "
  );
  const locrioCard = createCardWithImg(
    "Locrio",
    18,
    "Tasty dish of yellow rice with Dominican sausage, avocado and maduros."
  );
  const tresLechesCard = createCardWithImg(
    "Tres Leches",
    6,
    "An ultra light cake soaked in a sweet milk mixture and topped with fresh dominican merengue and cinnamon. "
  );

  div.appendChild(h1);
  div.appendChild(manguCard);
  div.appendChild(locrioCard);
  div.appendChild(tresLechesCard);
  return div;
}

function createCardWithImg(food, price, description) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  const h3 = document.createElement("h3");
  h3.textContent = food;
  const img = document.createElement("img");

  let foodChanged = food.trim().toLowerCase();
  let imgSrc =
    foodChanged === "mangu"
      ? Mangu
      : foodChanged === "locrio"
      ? Locrio
      : TresLeches;
  img.src = imgSrc;

  const descriptionP = document.createElement("p");
  descriptionP.textContent = description;
  const priceP = document.createElement("p");
  priceP.textContent = `$${price}.99`;
  priceP.className = "price";

  cardDiv.appendChild(h3);
  cardDiv.appendChild(img);
  cardDiv.appendChild(descriptionP);
  cardDiv.appendChild(priceP);

  return cardDiv;
}
