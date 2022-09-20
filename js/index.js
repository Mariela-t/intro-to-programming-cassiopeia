let today = new Date();

let thisYear = today.getFullYear();

console.log(thisYear);

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = `Mariela ${thisYear}`;
footer.appendChild(copyright);

let skills = ["HTML", "JavaScript", "CSS"];

let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
