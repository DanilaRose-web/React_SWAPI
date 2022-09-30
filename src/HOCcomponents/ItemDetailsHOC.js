import React from "react"

const ItemDetailsHOC = (Component) => {

   return class extends React.Component {

      state = {
         data: null,
         loading: true,
         error: false,
         startMessage: false
      }

      componentDidMount() {
         if (this.props.itemId) 
            this.getItemDetails()
          else 
            this.setState({
               loading: false,
               startMessage: true
            })
            
      }

      componentDidUpdate(prevProps) {
         if (this.props.itemId !== prevProps.itemId) {
            this.setState({
               loading: true,
               startMessage: false,
               error: false
            })
            this.getItemDetails()
         }

      }

      getItemDetails = () => {
         const { swapiApi, getData} = this.props

         swapiApi[getData](this.props.itemId)
            .then(data => {
               this.setState({
                  data,
                  loading: false,
                  error: false,
                  startMessage: false
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
         const { data, loading, error, startMessage } = this.state

         return (
            <Component startMessage={startMessage} data={data} error={error} loading={loading} {...this.props} />
         )
      }
   }
}

export default ItemDetailsHOC