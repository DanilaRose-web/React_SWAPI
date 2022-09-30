import React  from "react";
import './ItemList.scss'
import GlassContainer from "../GlassContainer/GlassContainer";


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

export default ItemList