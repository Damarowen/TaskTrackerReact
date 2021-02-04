//* link supaya web ga reload
import { Link } from 'react-router-dom'


function About() {
    return (
        <div>
            <h4> Version 1</h4> 
            {/* <a href="/">Back</a> */}
          <Link to="/TaskTrackerReact">Back</Link>
        </div>
    )
}

export default About
