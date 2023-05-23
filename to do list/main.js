`use strict`;
const stylesheet = document.styleSheets[0];
const bodyTaskCard = document.querySelector(".task-cards_task");
const cardTask = document.querySelector(".list-container_body__task-cards");
const btnAddTask = document.querySelector(".conteiner-input_btn-add");
const btnCleanAll = document.querySelector(".conteiner-input_btn-clean");
const inputTaskAdd = document.querySelector(".conteiner-input_input");
const listContainerBody = document.querySelector(".list-container_body");
const containerTask = [];
let arr = localStorage.getItem("arr");

btnCleanAll.addEventListener("click", deleteAllCard);
function deleteAllCard() {
  listContainerBody.innerHTML = "";
  containerTask.splice(0, containerTask.length);
}
function createCardInArray(listContainerBody) {
  containerTask.push({
    id: containerTask.length + 1,
    text: inputTaskAdd.value,
  });
  const cards = containerTask
    .map((card) => {
      return generateCardDOM(containerTask.indexOf(card) + 1, card.text);
    })
    .join("");
  listContainerBody.innerHTML = cards;
  inputTaskAdd.value = "";
}

const generateCardDOM = (id, text) => {
  return `
    <div class = "list-container_body__task-cards">
    <button class = "task-cards_btn-done">ok</button>
    <p>${id}. ${text}</p>
    <button class = "task-cards_btn-clean">x</button>
    </div>
  `;
};

function deleteCard(elemDelete) {
  let id = parseInt(elemDelete.querySelector(`p`).innerHTML);
  let indexElementArr = containerTask.indexOf(
    containerTask.find((el) => el.id === id)
  );
  containerTask.splice(indexElementArr, 1);
  elemDelete.remove();
  const cards = containerTask
    .map((card) => {
      return generateCardDOM(containerTask.indexOf(card) + 1, card.text);
    })
    .join("");
  listContainerBody.innerHTML = cards;
}

function isDoneCard(elementDone) {
  elementDone.classList.toggle("task-cards_btn-done1");
  elementDone.querySelector(`p`).classList.toggle("task-cards_task-done");
}

listContainerBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-cards_btn-clean")) {
    deleteCard(e.target.parentElement);
  }
  if (e.target.classList.contains("task-cards_btn-done")) {
    isDoneCard(e.target.parentElement);
  }
});
btnAddTask.addEventListener("click", () => {
  createCardInArray(listContainerBody);
  localStorage.setItem("arr", containerTask);
  console.log(arr);
});
