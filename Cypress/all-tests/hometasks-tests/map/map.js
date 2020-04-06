let planets = [
    {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
    {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
    {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
    {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
    {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
    {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
    {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
    {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
]

it('Maps', () => {

    let planetsMap = new Map();
    planets.forEach(pl => planetsMap.set(pl.planet, {
        radius: pl.radius,
        density: pl.density,
        distance: pl.distance
    }))

    let printPlanetMap = (planets) => {
        planets.forEach((value, key) => {
            cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
        })
    }

    cy.log(planetsMap.get('Saturn'))
    cy.log(planetsMap.size)

    let set = new Set();
    set.add('Mercury')
    set.add('Not Mercury')

    set.forEach((planet) => {
        cy.log(planet + ': ' + planetsMap.has(planet))
    })

    planetsMap.delete('Uranus')
    printPlanetMap(planetsMap)

    let somePlanetsMap = new Map()
    somePlanetsMap.set("Q-78", {radius: 60456, density: 7.24, distance: 15.214})
    somePlanetsMap.set("W-54", {radius: 55255, density: 15.44, distance: 25.121})
    somePlanetsMap.set("E-82", {radius: 21355, density: 53.54, distance: 54.122})
    somePlanetsMap.set("R-65", {radius: 65456, density: 43.21, distance: 65.656})

    let mergedMaps = new Map([...planetsMap, ...somePlanetsMap])
    cy.log("merged")
    printPlanetMap(mergedMaps)
})

it('Object', () => {
    planets.forEach(planet => {
        for (let key in planet) {
            cy.log(key + ': ' + planet[key])//как сделать вывод в одну строку??
        }
    })
})



