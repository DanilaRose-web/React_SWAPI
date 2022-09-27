import './Error.scss'
import errorIcon from '../../error.png'

const ErrorMessage = () => {
   return (
      <div className='ErrorMessage'>
         <div className='img'><img src={errorIcon} alt='Error' /></div>
         <p className='message'>
            <span>Oops...</span> <br />
            Something terribly went wrong. But we already sent droids to fix it.
         </p>
      </div>
   )
}

export default ErrorMessage