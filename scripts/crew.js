export function crew(data) {
  console.log("Crew Data:", data)

  const menu = document.querySelectorAll(".crew__nav-btn")

  const role = document.getElementById("crew__role")
  const name = document.getElementById("crew__name")
  const description = document.getElementById("crew__description")
  const image = document.getElementById("crew__image")

  let currentIndex = 0
  function updateCrew(index) {
    // Remove active class from all menu items
    menu.forEach((el) => el.classList.remove("crew__nav-btn--active"))

    // Add active class to the current menu item
    menu[index].classList.add("crew__nav-btn--active")
    const crew = data[index]

    role.innerHTML = crew.role
    name.innerHTML = crew.name
    description.innerHTML = crew.bio
    image.src = `../${crew.images.png}`
  }

  menu.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Update the current index
      currentIndex = index

      // Update the crew details in the UI
      updateCrew(index)
    })
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + data.length) % data.length
      updateCrew(currentIndex)
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % data.length
      updateCrew(currentIndex)
    }
  })
}
