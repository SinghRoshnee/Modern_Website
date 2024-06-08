const sun_color = document.querySelector("#toggledark");
sun_color.onclick = function () {
  document.body.classList.toggle("lighttheme");
  if (document.body.classList.contains("lighttheme")) {
    sun_color.classList.remove("fa-sharp", "fa-regular", "fa-sun");
    sun_color.classList.add("fa-solid", "fa-moon");
  } else {
    sun_color.classList.remove("fa-solid", "fa-moon");
    sun_color.classList.add("fa-sharp", "fa-regular", "fa-sun");
  }
};
