import React from "react";
import './ItemDetails.scss'
import GlassContainer from '../GlassContainer/GlassContainer'
import List from "../List/List";
import Preloader from "../Preloader/Preloader";
import SwapiService from "../../api/SwapiService";
import ErrorMessage from "../Error/Error";
import ItemDetailsHOC from "../../HOCcomponents/ItemDetailsHOC";

const ItemDetails = (props) => {
   const { data, loading, error, startMessage, children } = props

   let startMessageView = startMessage ? <NoItemSelectedMessage /> : null
   let preloader = loading ? <Preloader /> : null
   let errorMessage = error ? <ErrorMessage /> : null
   let itemDetails = data && !(loading || error) ? <ItemDetailsView children={children} data={data} /> : null

   return (
      <GlassContainer htmlClass={'ItemDetails'}>
         {preloader}
         {startMessageView}
         {itemDetails}
         {errorMessage}
      </GlassContainer>
   )
}

const ItemDetailsView = ({ children, data }) => {
   console.log(children);

   const { id, name, diameter, orbitalPeriod, rotationPeriod, terrain, climate, population } = data

   return (
      <React.Fragment>
         <div className="item-img"><img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Earth" /></div>
         <div className="item-info">
            <h2 className="item-name">{name}</h2>
            <List>
               <li>Terrain: <span>{terrain}</span></li>
               <li>Climate: <span>{climate}</span></li>
               <li>Population: <span>{population}</span></li>
               {/* {children} */}
            </List>
         </div>
      </React.Fragment>
   )
}

const NoItemSelectedMessage = () => {
   return (
      <span className="NoItemSelectedMessage">Select an item from the list on the left</span>
   )
}

const ItemDetailsFieldsView = (item, fieldName, fieldValue) => {
   return (
      <li>{fieldName}: <span>{fieldValue}</span></li>
   )
}

export { ItemDetailsFieldsView }



const swapiApi = new SwapiService()
export default ItemDetailsHOC(ItemDetails, swapiApi.getPlanet)