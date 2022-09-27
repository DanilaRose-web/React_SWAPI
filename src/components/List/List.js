import './List.scss'

const List = (props) => {
   return <ul className={`List ${props.htmlClass ? props.htmlClass : ''}`}> {props.children} </ul>
}

export default List