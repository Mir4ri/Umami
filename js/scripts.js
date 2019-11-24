// add to cart

btnToCart = document.getElementsByClassName("addToCart");
notification = document.getElementById("notification");
// optionValue = document.getElementsByTagName("option").value;
sushiItem = document.getElementsByClassName("sushi");

for (var i = 0; i < btnToCart.length; i++) {
  btnToCart[i].addEventListener("click", function() {
    notification.classList.add("active");
    setTimeout(() => notification.classList.remove("active"), 790);
  });
}

const kindsOfSushi = [
  {
    id: 0,
    name: 'ФУТОМАКІ'
  },
  {
    id: 1,
    name: 'УРАМАКІ'
  },
  {
    id: 2,
    name: 'ХОСОМАКІ'
  },
  {
    id: 3,
    name: 'ГУНКАН'
  },
  {
    id: 4,
    name: 'НІГІРІ'
  },
  {
    id: 5,
    name: 'САЛАТИ'
  },
  {
    id: 6,
    name: 'МІСО СУП'
  },
  {
    id: 7,
    name: 'САШИМІ'
  },
  {
    id: 8,
    name: 'НАПОЇ'
  }
]

// dropdown

const dropdownIcon = () => {
  const dropdown = document.createElement('span');
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
}

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
  placeholder.classList.add('placeholder')

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
    const {
      id,
      name
    } = kindOfSushi;
    const option = document.createElement("div");
    
    option.addEventListener("click", () => {
      selectOption(name)
      // render menu
      for (var i = 0; i < sushiItem.length; i++) {
        id === i ? sushiItem[i].classList.add("activeKind") : sushiItem[i].classList.remove("activeKind");
      }
      // fin render menu
    });
    option.setAttribute("id", id);

    const n = document.createElement("h5");
    n.style.fontFamily = "Exo 2", "sans-serif";
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

const selectOption = (name) => {
  const text = document.querySelector('.placeholder');
  text.textContent = name;
  text.classList.add('input__selected')
  toggleDropdown();
};

dropdown();


// fin dropdown

// render kind of sushi

