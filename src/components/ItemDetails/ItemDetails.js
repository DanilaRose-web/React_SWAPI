import React from "react";
import './ItemDetails.scss'
import GlassContainer from '../GlassContainer/GlassContainer'
import List from "../List/List";
import Preloader from "../Preloader/Preloader";
import ErrorMessage from "../Error/Error";

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

   const { name, image } = data

   return (
      <React.Fragment>
         <div className="item-img"><img src={image} alt="Earth" /></div>
         <div className="item-info">
            <h2 className="item-name">{name}</h2>
            <List>
               {
                  React.Children.map(children, (child) => {
                     return React.cloneElement(child, {data})
                  })
               }
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

const ItemDetailsFieldsView = ({data, fieldName, fieldValue}) => {
   
   return ( 
      <li>{fieldName}: <span>{data[fieldValue]}</span></li>
   )
}

export { ItemDetailsFieldsView }

export default ItemDetails