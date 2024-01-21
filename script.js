let year = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerText = `Copyright \u00A9 ${year} Norton Andres Perez. All Rights Reserved.`;

function shineIcons() {
  /* make icons, buttons, and maybe a tags shine (should be random range(1min,5min))*/
}

const button = document.getElementById("colorMode");
button.addEventListener("click", changeBackground);

let localS = localStorage.getItem("colorMode");
localS === "light"
  ? document.documentElement.setAttribute("theme", "light")
  : document.documentElement.setAttribute("theme", "dark");

function changeBackground() {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute("theme"),
    newTheme;
  if (dataTheme == "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }
  rootElem.setAttribute("theme", newTheme);
  localStorage.setItem("colorMode", newTheme);
  console.log(newTheme);
}
