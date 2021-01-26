
import PropTypes from 'prop-types'

// const Button = (props) => {

const Button = ({ color, text, onClick}) => {


return <button onClick={onClick}
 style={{backgroundColor: color}} className='btn'>{text}
 </button>

}

//* default props

Button.defaultProps = {
    color: 'steelBlue'
}

//* proptypes

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    //* click is a function
    onClick: PropTypes.func
}

export default Button