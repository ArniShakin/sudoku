
import { NavLink } from "react-router-dom"


const Win = () => {
    return (
        <div className='container d-flex'>
            <h1>YOU WIn !!!!!!</h1>
            <NavLink to="/game" className="btn">Next</NavLink>
        </div>
    )
}

export default  Win