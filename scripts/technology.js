export function technology(data) {
  console.log("Technology Data:", data)

  const menu = document.querySelectorAll(".technology__nav-link")

  const name = document.getElementById("technology__name")
  const description = document.getElementById("technology__description")
  const image = document.getElementById("technology__image")

  let imageType = "portrait"

  if (window.matchMedia("(max-width: 760px)").matches) {
    // mobile view
    imageType = "portrait"
  } else if (window.matchMedia("(max-width: 1200px)").matches) {
    // tablet view
    imageType = "landscape"
  } else {
    // Código para desktop
    imageType = "portrait"
  }

  let currentIndex = 0
  function updateTechnology(index) {
    // Remove active class from all menu items
    menu.forEach((el) => el.classList.remove("technology__nav-link--active"))

    // Add active class to the current menu item
    menu[index].classList.add("technology__nav-link--active")
    const technology = data[index]

    name.innerHTML = technology.name
    description.innerHTML = technology.description
    image.src = `../${technology.images[imageType]}`
  }

  menu.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Update the current index
      currentIndex = index

      // Update the technology details in the UI
      updateTechnology(index)
    })
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + data.length) % data.length
      updateTechnology(currentIndex)
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % data.length
      updateTechnology(currentIndex)
    }
  })
}
