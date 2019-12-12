notification = document.getElementById("notification");
btnToCart = document.getElementsByClassName("addToCart");
sushiName = document.getElementsByClassName("menuItem__top__name");
sushiPrice = document.getElementsByClassName("menuItem__top__price");
sushiItem = document.getElementsByClassName("sushi");
setsContainer = document.getElementsByClassName("sets")[0];
sushiContainer = document.getElementById("menu");
btnPopup = document.getElementById("cart-js");
popup = document.getElementById("activeCart-js");

const kindsOfSushi = [
  {
    id: 0,
    name: "ФУТОМАКІ"
  },
  {
    id: 1,
    name: "УРАМАКІ"
  },
  {
    id: 2,
    name: "ХОСОМАКІ"
  },
  {
    id: 3,
    name: "ГУНКАН"
  },
  {
    id: 4,
    name: "НІГІРІ"
  },
  {
    id: 5,
    name: "САЛАТИ"
  },
  {
    id: 6,
    name: "МІСО СУП"
  },
  {
    id: 7,
    name: "САШИМІ"
  }
];

// dropdown

const dropdownIcon = () => {
  const dropdown = document.createElement("span");
  dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
        <g id="Group-4" transform="translate(1360.000000, 29.000000)">
            <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
        </g>
    </g>
    </g>
</svg>`;
  return dropdown;
};

const printArea = document.querySelector("#content");

const dropdown = () => {
  const component = document.createElement("div");

  const input = createInput();
  const dropdown = showDropdown();

  component.appendChild(input);
  component.appendChild(dropdown);
  printArea.appendChild(component);
};

const createInput = () => {
  // Creates the input outline
  const input = document.createElement("div");
  input.classList = "input";
  input.addEventListener("click", toggleDropdown);

  // Creates the input placeholder content
  const inputPlaceholder = document.createElement("div");
  inputPlaceholder.classList = "input__placeholder";

  const placeholder = document.createElement("p");
  placeholder.style.fontWeight = 300;
  placeholder.textContent = "Оберіть тип суш";
  placeholder.classList.add("placeholder");

  // Appends the placeholder and chevron
  inputPlaceholder.appendChild(placeholder);
  inputPlaceholder.appendChild(dropdownIcon());
  input.appendChild(inputPlaceholder);

  return input;
};

const showDropdown = () => {
  const structure = document.createElement("div");
  structure.classList.add("structure", "hide");

  kindsOfSushi.forEach(kindOfSushi => {
    const { id, name } = kindOfSushi;
    const option = document.createElement("div");

    option.addEventListener("click", () => {
      selectOption(name);
      // render menu
      for (var i = 0; i < sushiItem.length; i++) {
        id === i
          ? sushiItem[i].classList.add("activeKind")
          : sushiItem[i].classList.remove("activeKind");
      }
      // fin render menu
    });
    option.setAttribute("id", id);

    const n = document.createElement("h5");
    (n.style.fontFamily = "Exo 2"), "sans-serif";
    n.style.fontWeight = 300;
    n.style.letterSpacing = "0.15em";
    n.textContent = name;

    option.appendChild(n);
    structure.appendChild(option);
  });

  return structure;
};

const toggleDropdown = () => {
  const dropdown = document.querySelector(".structure");
  dropdown.classList.toggle("hide");
  // add class index when dropdown
  for (var i = 0; i < sushiItem.length; i++) {
    document.getElementsByClassName("sushi")[i].classList.toggle("index");
  }

  const input = document.querySelector(".input");
  input.classList.toggle("input__active");
};

const selectOption = name => {
  const text = document.querySelector(".placeholder");
  text.textContent = name;
  text.classList.add("input__selected");
  toggleDropdown();
};

dropdown();

// fin dropdown

// add to cart
document.getElementById("localLength").innerHTML = localStorage.length;

// sushi

sushiContainer.onclick = function(event) {
  btnCart = event.target.closest(".addToCart");
  if (!btnCart) return;
  notification.classList.add("active");
  console.log();
  localStorage.setItem(
    event.target.closest(".sushi").querySelector(".itemTitle__name")
      .textContent +
      " " +
      event.target
        .closest(".menuItem__top")
        .querySelector(".menuItem__top__name").textContent,
    event.target.parentNode.closest("span").textContent
  );
  document.getElementById("localLength").innerHTML = localStorage.length;
  setTimeout(() => notification.classList.remove("active"), 790);
};

// sets

setsContainer.onclick = function(event) {
  btnCart = event.target.closest(".addToCart");
  if (!btnCart) return;
  notification.classList.add("active");
  localStorage.setItem(
    event.target.closest(".setItem__top").querySelector(".setItem__top__name")
      .textContent,
    event.target
      .closest(".setItem")
      .querySelector(".setItem__description__price").textContent
  );

  document.getElementById("localLength").innerHTML = localStorage.length;
  setTimeout(() => notification.classList.remove("active"), 790);
};

// fin add to cart

// cart pop-up
function fillCart() {
  var t = "";
  var sum = 0;
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var item = JSON.parse(localStorage.getItem(key));
    t += '<tr class="cartRow">';
    t += '<td class="nameSushi">' + key + "</td>";
    t += '<td class="priceSushi">' + item + "₴" + "</td>";
    t += "</tr>";
    sum += item;
  }
  document.getElementById("fillTable-js").innerHTML = t;
  document.getElementById("sum-js").innerHTML = "Сума: " + sum + "₴";
}

clearCart = document.getElementById("clearCart-js");

clearCart.onclick = () => {
  localStorage.clear();
  document.getElementById("localLength").innerHTML = localStorage.length;
  fillCart();
};

btnPopup.onclick = function() {
  document.querySelector("html").style.overflow = "hidden";
  popup.style.display = "block";
  document
    .getElementById("cartContainer-js")
    .scrollIntoView({ behavior: "smooth", block: "center" });
  fillCart();
};

window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
    document.querySelector("html").style.overflowY = "scroll";
  }
};

function cartLog() {
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    keys.push(key);
  }
  return keys;
}

function checkValue() {
  var FormValue =
    "Ім'я: " +
    document.querySelector("#formName").value +
    " Телефон: " +
    document.querySelector("#formPhone").value +
    " Вулиця: " +
    document.querySelector("#formStreet").value +
    " Будинок: " +
    document.querySelector("#formHouse").value +
    " Квартира: " +
    document.querySelector("#formKv").value +
    " Примітка: " +
    document.querySelector("#describe").value +
    " Замовлення: ";
  return FormValue;
}

readyMail = () => {
  return checkValue() + cartLog();
};

// send mail

function sendMail() {
  if (!localStorage.length == "0") {
    Email.send({
      SecureToken: "c9ce6b12-bf13-4138-9f8e-b0871268bcb1",
      To: "leobuchko@gmail.com",
      From: "gtasanbuchko@gmail.com",
      Subject: "Замовлення",
      Body: readyMail()
    }).then(message => alert(message));
  }
}
