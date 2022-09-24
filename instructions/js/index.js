let today = new Date();

let thisYear = today.getFullYear();

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
let messageForm = document.querySelector('[name="leave_message"]');
let messageCount = 0;
messageForm.addEventListener("submit", (e) => {
  let name = e.target.name.value;
  let email = e.target.email.value;
  let message = e.target.message.value;
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("message: " + message);
  e.preventDefault();
  let messageSection = document.querySelector("#messages");
  let messageHeader = document.querySelector("#messages_header");
  messageHeader.innerHTML = "Messages";
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> `;
  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";
  removeButton.addEventListener("click", (e) => {
    messageCount--;
    let entry = removeButton.parentNode;
    entry.remove();
    if (messageCount == 0) {
      messageHeader.remove();
    }
  });

  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
  messageCount++;
  editButton.addEventListener("click", (e) => {
    e.target.name.value = name;
    console.log(name);
  });
});
