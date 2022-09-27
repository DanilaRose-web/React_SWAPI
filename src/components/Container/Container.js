import './Container.scss'

const Container = (props) => {

   return (
      <div className={`Container ${props.htmlClass ? props.htmlClass : ''}`}>
         { props.children }
      </div>
   )
}

export default Container