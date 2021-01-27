
import PropTypes from 'prop-types'
import Button from './Button'

//* display none add close button when in about page
import { useLocation } from 'react-router-dom'



//* const Header = (props) => {
const Header = ({ title, onAdd, lihat }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            { location.pathname === '/' &&
                <Button
                    color={lihat ? 'red' : 'green'}
                    text={lihat ? 'Close' : 'Add'}
                    onClick={onAdd} />
            }
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
