export default function homeContent() {
  const div = document.createElement("div");
  div.id = "home-container";

  const h1 = document.createElement("h1");
  h1.textContent = "Birthday Restaurant";
  const p = document.createElement("p");
  p.textContent = "Best dominican restaurant in New York!";

  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(hoursCard());
  div.appendChild(locationCard());

  return div;
}

function createCard() {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  return cardDiv;
}

function hoursCard() {
  const hoursCard = createCard();
  const hoursH3 = document.createElement("h3");
  hoursH3.textContent = "Hours";
  const weekDaysP = document.createElement("p");
  weekDaysP.textContent = "Mon-Fri 12:00PM - 12:00AM";
  const weekEndsP = document.createElement("p");
  weekEndsP.textContent = "Sat-Sun 12:00PM - 3:00AM";

  hoursCard.appendChild(hoursH3);
  hoursCard.appendChild(weekDaysP);
  hoursCard.appendChild(weekEndsP);

  return hoursCard;
}
function locationCard() {
  const locationCard = createCard();
  const hoursH3 = document.createElement("h3");
  hoursH3.textContent = "Location";
  const weekDaysP = document.createElement("p");
  weekDaysP.textContent = "9807 July St., NY, NY, 09010";

  locationCard.appendChild(hoursH3);
  locationCard.appendChild(weekDaysP);

  return locationCard;
}
