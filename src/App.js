import React, { Component } from "react";
import './App.scss'
import Container from './components/Container/Container'
import RandomPlanet from './components/RandomPlanet/RandomPlanet'
import ItemList from './components/ItemList/ItemList'
import ItemDetails, { ItemDetailsFieldsView } from "./components/ItemDetails/ItemDetails";

export default class App extends Component {

   state = {
      itemId: null
   }

   onSelectItem = (id) => {
      this.setState({ itemId: id })
   }

   render() {
      return (
         <div className="App">
            <RandomPlanet />
            <Container>
               <ItemList onSelectItem={this.onSelectItem}/>
               <ItemDetails itemId={this.state.itemId}>
                  <ItemDetailsFieldsView fieldName="name" fieldValue="name" />
               </ItemDetails>
            </Container>
         </div>
      )
   }
}