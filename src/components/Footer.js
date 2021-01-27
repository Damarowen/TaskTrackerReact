//* link supaya web ga reload
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <footer>
            <p> &copy; 2021</p>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>

        </footer>
    )
}

export default Footer
