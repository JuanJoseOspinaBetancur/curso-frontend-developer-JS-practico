const navbar_email = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");

navbar_email.addEventListener("click", () => {
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
  /*  toggleDesktop(); */
});

const toggleDesktop = () => {
  desktop_menu.classList.toggle("inactive");
};
