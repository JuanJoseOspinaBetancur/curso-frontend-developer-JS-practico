const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");

const product_detail = document.querySelector(".product-detail");
const carrito_Ayuda = document.querySelector(".carrito_Ayuda");

const mobile_menu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

const atras_product_detail = document.querySelector(".atras-product-detail");

const cards_container = document.querySelector(".cards-container");
const main_container=document.querySelector(".main-container")

atras_product_detail.addEventListener("click", () => {
  product_detail.classList.add("inactive");
});

menu.addEventListener("click", () => {
  if (
    product_detail
      .getAttribute("class")
      .split(" ")
      .find((s) => s === "inactive")
  ) {
    if (
      mobile_menu
        .getAttribute("class")
        .split(" ")
        .find((s) => s === "inactive")
    ) {
      mobile_menu.classList.remove("inactive");
    } else {
      mobile_menu.classList.add("inactive");
    }
  } else {
    product_detail.classList.add("inactive");
    mobile_menu.classList.remove("inactive");
  }
});

navbar_email.addEventListener("click", () => {
  if (
    product_detail
      .getAttribute("class")
      .split(" ")
      .find((s) => s === "inactive")
  ) {
    if (
      desktop_menu
        .getAttribute("class")
        .split(" ")
        .find((s) => s === "inactive")
    ) {
      desktop_menu.classList.remove("inactive");
    } else {
      desktop_menu.classList.add("inactive");
    }
  } else {
    product_detail.classList.add("inactive");
    desktop_menu.classList.remove("inactive");
  }
});

carrito_Ayuda.addEventListener("click", () => {
  if (
    desktop_menu
      .getAttribute("class")
      .split(" ")
      .find((s) => s === "inactive") &&
    mobile_menu
      .getAttribute("class")
      .split(" ")
      .find((s) => s === "inactive")
  ) {
    if (
      product_detail
        .getAttribute("class")
        .split(" ")
        .find((s) => s === "inactive")
    ) {
      product_detail.classList.remove("inactive");
      main_container.classList.add("inactive");
    } else {
      product_detail.classList.add("inactive");
      main_container.classList.remove("inactive");
    }
  } else {
    desktop_menu.classList.add("inactive");
    mobile_menu.classList.add("inactive");
    product_detail.classList.remove("inactive");
    
  }
});

const productList = [
  {
    name: "Bike",
    price: 120,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pantalla",
    price: 800,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Computador",
    price: 1200,
    imagen:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];


productList.map((producto) => {
  const divP = document.createElement("div");
  divP.classList.add("product-card")
  const img = document.createElement("img");
  const divI = document.createElement("div");
  divI.classList.add("product-info")
  const divII = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const figure = document.createElement("figure");
  const imgF = document.createElement("img");

  img.src = producto.imagen;

  p1.textContent = producto.name;
  p2.textContent = producto.price;
  imgF.src = "./icons/bt_add_to_cart.svg";
  figure.appendChild(imgF);
  divII.append(p1, p2);
  divI.append(divII, figure);
  divP.append(img, divI);
  cards_container.append(divP);
});
