import './GlassContainer.scss'

const GlassContainer = (props) => {

   return (
      <div className={`GlassContainer ${props.htmlClass ? props.htmlClass : ''}`}>
         { props.children }
      </div>
   )
}

export default GlassContainer