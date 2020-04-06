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


it('Arrays', () => {
    let printPlanets = (planets) => {
        planets.forEach(planet => {
            cy.log(JSON.stringify(planet));
        })
    }

    planets = planets.map(planet => {
        planet.solarSystem = true;
        return planet
    })

    planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})

    let initialValue = 0;
    let sumOfRad = (planets) => {
        return planets.reduce((sum, planet) => sum + planet.radius, initialValue)
    };

    cy.log(sumOfRad(planets))

    function getPlanetsWithDistance(planets, number) {
        let planetsWithDistanceMoreThenNumber = planets.filter(planet => planet.distance > number)
        return planetsWithDistanceMoreThenNumber;
    }

    cy.log("====Planets with distance > 5 ====")
    printPlanets(getPlanetsWithDistance(planets, 5))
    printPlanets(planets)

    let index = planets.map(function (planet) {
        return planet.planet
    }).indexOf('SomeNewPlanet')

    cy.log(index)
    planets.splice(index, 1)

    planets.sort(function (o1, o2) {
        return o1.radius - o2.radius
    })

    printPlanets(planets)

    planets.sort(function (o1, o2) {
        return o1.planet.localeCompare(o2.planet)
    })
    cy.log(planets.length)
})





