export function destinations(data) {
  console.log("Destinations Data:", data)

  const menu = document.querySelectorAll(".destinations__nav-link")

  const name = document.getElementById("destinations__name")
  const description = document.getElementById("destinations__description")
  const image = document.getElementById("destinations__image")
  const distance = document.getElementById("destinations__distance")
  const travelTime = document.getElementById("destinations__travel-time")

  let currentIndex = 0
  function updateDestination(index) {
    // Remove active class from all menu items
    menu.forEach((el) => el.classList.remove("destinations__nav-link--active"))

    // Add active class to the current menu item
    menu[index].classList.add("destinations__nav-link--active")
    const destination = data[index]

    name.innerHTML = destination.name
    description.innerHTML = destination.description
    distance.innerHTML = destination.distance
    travelTime.innerHTML = destination.travel
    image.src = `../${destination.images.png}`
  }

  menu.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Update the current index
      currentIndex = index

      // Update the destination details in the UI
      updateDestination(index)
    })
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + 4) % 4
      updateDestination(currentIndex)
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % 4
      updateDestination(currentIndex)
    }
  })
}
