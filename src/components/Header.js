
import PropTypes from 'prop-types'
import Button from './Button'


// const Header = (props) => {
const Header = ({ title }) => {

const onClick= () => {
    console.log('frome header')
}

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello' 
               onClick={onClick} />
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
