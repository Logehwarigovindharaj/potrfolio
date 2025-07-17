const skill = {
  name: "JavaScript",
  description: "Experienced with ES6+, DOM manipulation, and modern JS frameworks."
};

const container = document.getElementById("skills-container");

for (let i = 0; i < 6; i++) {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
    <h3>${skill.name}</h3>
    <p>${skill.description}</p>
  `;
  container.appendChild(card);
}
