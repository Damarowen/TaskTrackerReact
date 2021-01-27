
import PropTypes from 'prop-types'
import Button from './Button'


//* const Header = (props) => {
const Header = ({ title, onAdd, lihat}) => {


    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={lihat ? 'red' : 'green'}
            text={lihat ? 'Close' : 'Add'}
               onClick={onAdd} />
        </header>
    )
}


//* set props default




Header.defaultProps = {
    title: 'Task Tracker'
}



//* proptypes

Header.propTypes = {
    title: PropTypes.string
}

export default Header
