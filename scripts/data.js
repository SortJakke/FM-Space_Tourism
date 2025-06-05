export async function fetchData() {
  try {
    const response = await fetch("../scripts/data.json")
    if (!response.ok) {
      throw new Error("Error loading JSON file")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erro:", error)
  }
}
