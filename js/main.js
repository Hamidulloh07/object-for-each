let elSiteForm = document.querySelector(".form");
let elSiteNameInput = document.querySelector(".name");
let elSiteFirstNameInput = document.querySelector(".first-name");
let elSiteOld = document.querySelector(".old");
let elSiteStudyInput = document.querySelector(".study");
let elSiteListInput = document.querySelector(".list");
let elAllInput = document.querySelector("input");
let elBtnReset = document.querySelector(".btn-reset")

let elSiteNameInputValue = elSiteNameInput.value;
let elAllInputValue = elAllInput.value;

let contactArr = [];

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let person = {
    name: elSiteNameInput.value,
    Surname: elSiteFirstNameInput.value,
    age: elSiteOld.value,
    study: elSiteStudyInput.value
  };

  contactArr.push(person);
  elSiteListInput.innerHTML = "";

  contactArr.forEach(element => {

    let elTextName = document.createElement("p");
    let elTextSurName = document.createElement("p");
    let elTextOldName = document.createElement("p");
    let elTextStudy = document.createElement("p");

    elTextName.style.fontSize = "25px"
    elTextSurName.style.fontSize = "25px"
    elTextOldName.style.fontSize = "25px"
    elTextStudy.style.fontSize = "25px"


    elTextName.textContent = `Foydalanuvchi ismi, ${element.name}`;
    elTextSurName.textContent = `Foydalanuvchi familiyasi, ${element.Surname}`;
    elTextOldName.textContent = `Foydalanuvchi yoshi, ${element.age}`;
    elTextStudy.textContent = `Foydalanuvchi o'qishi, ${element.study}`;
    elSiteListInput.append(elTextName, elTextSurName, elTextOldName, elTextStudy);




    console.log(person);
    console.log(contactArr);
  });

  elSiteNameInput.value = "";
  elSiteFirstNameInput.value = "";
  elSiteOld.value = "";
  elSiteStudyInput.value = "";
});

elBtnReset.addEventListener("click", function () {
})