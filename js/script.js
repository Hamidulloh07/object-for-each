let breadTypes = ["Yupqa", "O'rtacha", "Qalin"];
let sizes = [25, 30, 35];
let toppings = ["Pomidor", "Tuzlangan bodring", "Kurka go'shti", "Qo'ziqorin", "Zaytun", "Qazi"];
let addls = ["Achchiq", "Sosiskali"];

let orderToppings = [];
let orderAddls = [];

let elPizzaForm = document.querySelector(".js-pizza-form");
let elBreadSelect = elPizzaForm.querySelector(".js-bread-select");
let elSizeRadioWrapper = elPizzaForm.querySelector(".js-size-radio-wrapper");
let elToppingsWrapper = elPizzaForm.querySelector(".js-toppings-wrapper");
let elAddlsWrapper = elPizzaForm.querySelector(".js-addl-wrapper");

let elOrderState = document.querySelector(".js-order-state");
let elOrderBread = elOrderState.querySelector(".js-order-bread");
let elOrderSize = elOrderState.querySelector(".js-order-size");
let elOrderToppings = elOrderState.querySelector(".js-order-toppings");
let elOrderAddl = elOrderState.querySelector(".js-order-addl");

let elHiddenOption = document.createElement("option");
elHiddenOption.textContent = "tanlang";
elBreadSelect.appendChild(elHiddenOption);
elHiddenOption.setAttribute("selected", "selected");
elHiddenOption.setAttribute("hidden", "hidden");
elHiddenOption.setAttribute("value", "");



for (let i = 0; i < breadTypes.length; i++) {
  let elBreadOption = document.createElement("option");
  elBreadOption.value = breadTypes[i];
  elBreadOption.textContent = breadTypes[i];

  elBreadSelect.appendChild(elBreadOption);
}

for (let i = 0; i < sizes.length; i++) {
  let elSizeLabel = document.createElement("label");
  let elSizeInput = document.createElement("input");
  let elSizeSpan = document.createElement("span");



  elSizeInput.classList.add("size-radio", "js-size-radio");
  elSizeInput.type = "radio";
  elSizeInput.name = "sizes";
  elSizeInput.value = sizes[i];

  elSizeSpan.textContent = `${sizes[i]} sm`;

  elSizeInput.addEventListener("change", function () {
    elOrderSize.textContent = this.value
  });

  elSizeLabel.append(elSizeInput, elSizeSpan);
  elSizeRadioWrapper.appendChild(elSizeLabel);
}

let updateBreadType = function () {
  elOrderBread.textContent = elBreadSelect.value;
}



elBreadSelect.addEventListener("change", updateBreadType);


let addAddl = function () {

  elOrderAddl.innerHTML = ""

  for (let i = 0; i < orderAddls.length; i++) {
    let elNewOrderLi = document.createElement("li")
    elNewOrderLi.textContent = orderAddls[i]

    elOrderAddl.appendChild(elNewOrderLi)
  }
}



for (let i = 0; i < addls.length; i++) {
  let elAddlLabel = document.createElement("label");
  let elAddlInput = document.createElement("input");
  let elAddlSpan = document.createElement("span");

  elAddlLabel.className = "me-3"

  elAddlInput.className = "addl-ingredient js-addl-ingredient";
  elAddlInput.type = "checkbox";
  elAddlInput.name = "qoshimcha";
  elAddlInput.value = addls[i];

  elAddlSpan.className = "ms-1";
  elAddlSpan.textContent = addls[i];

  elAddlInput.addEventListener("change", function () {
    if (orderAddls.includes(this.value)) {
      let addlIndex = orderAddls.indexOf(this.value)
      orderAddls.splice(addlIndex, 1)
    } else {
      orderAddls.push(this.value)
    }

    addAddl();
  })

  elAddlLabel.append(elAddlInput, elAddlSpan);

  elAddlsWrapper.appendChild(elAddlLabel);
}

let addToppings = function () {

  elOrderToppings.innerHTML = ""

  for (let i = 0; i < orderToppings.length; i++) {
    let elNewOrderLi = document.createElement("li")
    elNewOrderLi.textContent = orderToppings[i]

    elOrderToppings.appendChild(elNewOrderLi)
  }
}
for (let i = 0; i < toppings.length; i++) {
  let elToppingLabel = document.createElement("label");
  let elToppingInput = document.createElement("input");
  let elToppingSpan = document.createElement("span");

  elToppingLabel.className = "me-3"

  elToppingInput.className = "topping-checkbox js-topping-checkbox";
  elToppingInput.type = "checkbox";
  elToppingInput.name = "topping";
  elToppingInput.value = toppings[i];

  elToppingSpan.className = "ms-1";
  elToppingSpan.textContent = toppings[i];


  elToppingInput.addEventListener("change", function () {
    if (orderToppings.includes(this.value)) {
      let toppingIndex = orderToppings.indexOf(this.value)
      orderToppings.splice(toppingIndex, 1)
    } else {
      orderToppings.push(this.value)
    }

    addToppings();
  })

  elToppingLabel.append(elToppingInput, elToppingSpan);

  elToppingsWrapper.appendChild(elToppingLabel);
};








