import React, { Component } from "react";
import './RandomPlanet.scss'
import SwapiService from "../../api/SwapiService";
import GlassContainer from "../GlassContainer/GlassContainer";
import List from "../List/List";
import Preloader from "../Preloader/Preloader";
import ErrorMess from '../Error/Error'

export default class RandomPlanet extends Component {

   swapiApi = new SwapiService()

   state = {
      planet: null,
      loading: true,
      error: false
   }

   componentDidMount() {
      this.getRandomPlanet()
   }

   getRandomPlanet = () => {
      let id = Math.floor(Math.random() * 18 + 2)
      this.swapiApi.getPlanet(id)
         .then(planet => {
            this.setState({
               planet,
               loading: false,
               error: false
            })
         })
         .catch(this.onError)
   }

   onError = () => {
      this.setState({
         error: true,
         loading: false
      })
   }

   render() {
      const { planet, loading, error } = this.state

      let loadingView = loading ? <Preloader /> : null
      let errorView = error ? <ErrorMess /> : null
      let randomPlanetView = planet && !(loading || error) ? <RandomPlanetView planet={planet} /> : null

      return (
         <GlassContainer htmlClass={'RandomPlanet'}>
            { loadingView }
            { randomPlanetView }
            { errorView }
         </GlassContainer>
      )
   }
}


const RandomPlanetView = ({ planet }) => {

   const { name, image, population, diameter, rotationPeriod, climate, terrain } = planet

   return (
      <React.Fragment>
         <div div className="img"> <img src={image} alt={name} /></div >
         <div className="planet-info">
            <h2 className="planet-name">{name}</h2>
            <List htmlClass={'random-planet-list'}>
               <li>Population: <span>{population}</span></li>
               <li>Rotation period: <span>{rotationPeriod}</span></li>
               <li>Diameter: <span>{diameter}</span></li>
               <li>Climate: <span>{climate}</span></li>
               <li>Terrain: <span>{terrain}</span></li>
            </List>
         </div>
      </React.Fragment>
   )
}