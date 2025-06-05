import { toggleMenu } from "./components.js"

document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle functionality
  toggleMenu()
})

import { fetchData } from "./data.js"
import { destinations } from "./destination.js"
import { crew } from "./crew.js"
import { technology } from "./technology.js"

document.addEventListener("DOMContentLoaded", async () => {
  // Get the current path
  const path = window.location.pathname
  console.log("Current Path:", path)

  if (!path.endsWith("index.html")) {
    // Fetch and log data
    const data = await fetchData()
    // console.log("Fetched Data:", data)

    if (path.endsWith("destinations.html")) {
      destinations(data.destinations)
    }
    if (path.endsWith("crew.html")) {
      crew(data.crew)
    }
    if (path.endsWith("technology.html")) {
      technology(data.technology)
    }
  }

  // Add any other initialization code here
  console.log("Space Tourism script loaded and ready.")
})
