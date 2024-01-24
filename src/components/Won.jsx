import { NavLink } from "react-router-dom"


const Won = () => {
    return (
        <div className='container d-flex'>
            <h1>YOU Won</h1>
            <NavLink to="/game" className="btn">Play</NavLink>
        </div>
    )
}

export default  Won