import { NavLink } from "react-router-dom"


const Lost = () => {
    return (
        <div className='container d-flex'>
            <h1>Lose</h1>
            <NavLink to="/game" className="btn">Play</NavLink>
        </div>
    )
}

export default  Lost