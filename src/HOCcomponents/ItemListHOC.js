import React from "react"
import Preloader from "../components/Preloader/Preloader"
import GlassContainer from "../components/GlassContainer/GlassContainer"

const ItemListHOC = (Component, getData) => {

   return class extends React.Component {

      state = {
         data: null,
      }

      componentDidMount() {
         this.getRequestData()
      }

      getRequestData = () => {
         getData()
            .then(data => {
               this.setState({ 
                  data,
                  loading: false
               })
            })
      }

      render() {
         const { data } = this.state

         if (!data) 
            return (
               <GlassContainer htmlClass={'ItemList'}>
                  <Preloader />
               </GlassContainer>
            )

         return <Component data={data} {...this.props} />
      }
   }
}

export default ItemListHOC