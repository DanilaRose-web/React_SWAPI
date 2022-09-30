import ItemList from "../ItemList/ItemList"
import ItemListHOC from "../../HOCcomponents/ItemListHOC"
import SwapiService from "../../api/SwapiService"

const swapiApi = new SwapiService()

const PlanetList = ItemListHOC(ItemList, swapiApi.getAllPlanets)

const PersonList = ItemListHOC(ItemList, swapiApi.getAllPeople)

const StarshipList = ItemListHOC(ItemList, swapiApi.getAllStarships)

export {
   PlanetList,
   PersonList,
   StarshipList
}