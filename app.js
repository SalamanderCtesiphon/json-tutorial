async function populate() {
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
  const request = new Request(requestURL)
  
  const response = await fetch(request)
  const superheroes = await response.json()

  populateHeader(superheroes)
  populateHeroes(superheroes)
}