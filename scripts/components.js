export function toggleMenu() {
  const menu = document.querySelector(".header__nav")
  const navOpen = document.querySelector(".header__nav-open")
  const navClose = document.querySelector(".header__nav-close")

  navOpen.addEventListener("click", () => {
    menu.classList.add("header__nav--open")
  })
  navClose.addEventListener("click", () => {
    menu.classList.remove("header__nav--open")
  })
}
