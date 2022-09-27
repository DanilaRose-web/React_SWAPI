import React  from "react";
import './ItemList.scss'
import GlassContainer from "../GlassContainer/GlassContainer";
import SwapiService from "../../api/SwapiService";
import ItemListHOC from "../../HOCcomponents/ItemListHOC";


const ItemList = (props) => {

   const { data, onSelectItem } = props

   let renderItems = (arr) => {
      if (arr) {
         return (
            arr.map(({ id, name }) => {
               return (
                  <li key={id} onClick={() => onSelectItem(id)}> {name} </li>
               )
            })
         )
      }
   }

   const elements = renderItems(data)

   return (
      <GlassContainer htmlClass={'ItemList'}>
         <ul>
            {elements}
         </ul>
      </GlassContainer>
   )
}

const swapi = new SwapiService();
export default ItemListHOC(ItemList, swapi.getAllPlanets)