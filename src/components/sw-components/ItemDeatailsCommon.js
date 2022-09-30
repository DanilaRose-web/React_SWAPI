
import ItemDetailsHOC from "../../HOCcomponents/ItemDetailsHOC"
import ItemDetails from "../ItemDetails/ItemDetails"
import SwapiServiceHOC from "../../HOCcomponents/SwapiServiceHOC"


const PlanetDetails = SwapiServiceHOC(ItemDetailsHOC(ItemDetails))

const PersonDetails = SwapiServiceHOC(ItemDetailsHOC(ItemDetails))

const StarshipDetails = SwapiServiceHOC(ItemDetailsHOC(ItemDetails))

export {
   PlanetDetails,
   PersonDetails,
   StarshipDetails
}