import { SwapiServiceConsumer } from "../Context/SwapiServiceContext";

const SwapiServiceHOC = (Component) => {

   return (props) => {
      return (
         <SwapiServiceConsumer>
            {
               (swapiApi) => {
                  return <Component {...props} swapiApi={swapiApi} />
               }
            }
         </SwapiServiceConsumer>
      )
   }
}

export default SwapiServiceHOC