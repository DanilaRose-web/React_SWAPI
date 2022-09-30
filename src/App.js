import React, { Component } from "react";
import './App.scss'
import Container from './components/Container/Container'
import RandomPlanet from './components/RandomPlanet/RandomPlanet'
import { ItemDetailsFieldsView } from "./components/ItemDetails/ItemDetails";
import { PlanetList } from "./components/sw-components/ItemListCommon";
import { PlanetDetails } from "./components/sw-components/ItemDeatailsCommon";
import { SwapiServiceProvider } from "./Context/SwapiServiceContext";
import SwapiService from "./api/SwapiService";

export default class App extends Component {

   swapiApi = new SwapiService()

   state = {
      itemId: null
   }

   onSelectItem = (id) => {
      this.setState({ itemId: id })
   }

   render() {
      return (
         <SwapiServiceProvider value={this.swapiApi}>
            <div className="App">
               <RandomPlanet />
               <Container>
                  <PlanetList onSelectItem={this.onSelectItem}/>
                  <PlanetDetails getData='getPlanet' itemId={this.state.itemId}>
                     <ItemDetailsFieldsView fieldName="Diameter" fieldValue="diameter" />
                     <ItemDetailsFieldsView fieldName="Orbital period" fieldValue="orbitalPeriod" />
                     <ItemDetailsFieldsView fieldName="Rotation period" fieldValue="rotationPeriod" />
                     <ItemDetailsFieldsView fieldName="Terrain" fieldValue="terrain" />
                     <ItemDetailsFieldsView fieldName="Climate" fieldValue="climate" />
                     <ItemDetailsFieldsView fieldName="Population" fieldValue="population" />
                  </PlanetDetails>
               </Container>
            </div>
         </SwapiServiceProvider>
      )
   }
}