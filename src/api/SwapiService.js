export default class SwapiService {
   _apiBaseUrl = 'https://swapi.dev/api/';

   getSwapiResourse = async (url) => {
      const res = await fetch(`${this._apiBaseUrl}${url}`)

      if (!res.ok)
         throw new Error(`При выполнении запроса произошла ошибка ${res.status}. Но мы уже отправили дроидов, что бы ее ликвидировать`)

      return res.json()
   }


   getAllPlanets = async () => {
      const res = await this.getSwapiResourse('planets/')
      return res.results.map(this._transformPlanet)
   }

   getPlanet = async (id) => {
      const res = await this.getSwapiResourse(`planets/${id}`)
      return this._transformPlanet(res)
   }

   getAllPeople = async () => {
      const res = await this.getSwapiResourse('people/')
      return res.results.map(item => this._transformPerson(item))
   }

   getPerson = async (id) => {
      const res = await this.getSwapiResourse(`people/${id}`)
      return this._transformPerson(res)
   }

   getAllStarships = async () => {
      const res = await this.getSwapiResourse('starships/')
      return res.results.map(this._transformStarship)
   }

   getStarship = async (id) => {
      const res = await this.getSwapiResourse(`starships/${id}`)
      return this._transformStarship(res)
   }



   _extractId = (id) => {
      let idRegex = /\/([0-9]*)\/$/
      return id.match(idRegex)[1]
   }

   _transformPlanet = (planet) => {
      return {
         id: this._extractId(planet.url),
         name: planet.name,
         climate: planet.climate,
         diameter: planet.diameter,
         orbitalPeriod: planet.orbital_period,
         population: planet.population,
         rotationPeriod: planet.rotation_period,
         terrain: planet.terrain
      }
   }

   _transformPerson = (person) => {
      return {
         id: this._extractId(person.url),
         name: person.name,
         gender: person.gender,
         hairColor: person.hair_color,
         mass: person.mass,
         height: person.height,
         skinColor: person.skin_color,
      }
   }

   _transformStarship = (starship) => {
      return {
         id: this._extractId(starship.url),
         name: starship.name,
         model: starship.model,
         length: starship.length,
         crew: starship.crew,
         costInCredits: starship.cost_in_credits,
         consumables: starship.consumables,
         passengers: starship.passengers, 
      }
   }
}