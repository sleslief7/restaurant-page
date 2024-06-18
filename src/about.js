export default function aboutContent() {
  const div = document.createElement("div");
  div.id = "about-container";

  const h1 = document.createElement("h1");
  h1.textContent = "About Birthday Restaurant";

  const p = document.createElement("p");
  p.textContent = `We are a Dominican Restaurant created in 1998. 
  Our mission is to deliver delicious Dominican food to every customer 
  that visits us. Located on 9807 July St., NY, NY, 09010 since it was 
  created. Owned by a dominican family: Leonel and Altagracia. Come visit!
  You won't regret it.`;

  div.appendChild(h1);
  div.appendChild(p);
  return div;
}
