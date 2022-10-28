let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `© Mariela Tinoco Rojas ${thisYear}`;
footer.appendChild(copyright);

let skills = ["HTML", "JavaScript", "CSS"];

let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");
skillsList.classList.add("skills-list");

for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name="leave_message"]');
let messageCount = 0;

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value;
  let email = e.target.email.value;
  let message = e.target.message.value;
  console.log("name: " + name);
  console.log("email: " + email);
  console.log("message: " + message);

  let messageSection = document.querySelector("#messages");
  let messageHeader = document.querySelector("#messages_header");
  messageHeader.style.visibility = "visible";
  messageSection.style.visibility = "hidden";
  messageHeader.innerHTML = "Messages";
  let messageList = messageSection.querySelector("ul");

  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span> `;
  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  let editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.innerText = "edit";
  editButton.type = "button";
  removeButton.addEventListener("click", (e) => {
    messageCount--;
    let entry = removeButton.parentNode;
    entry.remove();
    if (messageCount == 0) {
      messageHeader.style.visibility = "hidden";
      messageSection.style.visibility = "hidden";
    }
  });

  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
  messageSection.style.visibility = "visible";
  messageCount++;
  editButton.addEventListener("click", (e) => {
    e.preventDefault();
    newMessage.remove();
    messageCount--;
    if (messageCount == 0) {
      messageHeader.style.visibility = "hidden";
      messageSection.style.visibility = "hidden";
    }

    messageForm.name.value = name;
    messageForm.email.value = email;
    messageForm.message.value = message;
  });
});

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/mariela-t/repos");
githubRequest.send();
//githubRequest.addEventListener("load", (e) => {});
let projectSection = document.querySelector("#projects");
githubRequest.onreadystatechange = () => {
  if (
    githubRequest.readyState === XMLHttpRequest.DONE &&
    githubRequest.status == 200
  ) {
    // document.getElementById("demo").innerHTML = this.responseText;
    let response = JSON.parse(githubRequest.responseText);
    for (i = 0; i < response.length; i++) {
      let name = response[i].name;
      let project = document.createElement("li");
      project.innerHTML = `<a href= "https://github.com/Mariela-t/${name}" target="_blank">${name} </a>`;
      // let details = document.createElement("ul");
      // let description = document.createElement("li");
      // description.innerHTML = response[i].description;
      // details.appendChild(description);
      // let date = document.createElement("li");
      // date.innerHTML = response[i].created_at;
      // details.appendChild(date);
      // project.appendChild(details);
      projectSection.appendChild(project);
    }
  } else if (githubRequest.readyState === XMLHttpRequest.DONE) {
    console.log(githubRequest.status);
  }
};
