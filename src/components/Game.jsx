import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const Game = props => {
  const navigate = useNavigate()
  useEffect(() => {
    if (props.mistakes >= props.totalMistakes){
      navigate("/lost")
    }

    for (const tr of props.matrix) {
        if (tr.includes(0)) {
          return
        }

    }

    
    props.nextLevel()
    navigate("/won")

    if (level = 5){
      navigate("/win")
    }

  }, [props, navigate] ) 

  const matrix = props.matrix.map((tr, trIndex) => {
    return (
      <tr key={trIndex}>
        {
          tr.map((td, tdIndex) => {
            return (
              <td key={tdIndex}
                onClick={() => props.changeCoords(trIndex, tdIndex)}
                className={
                  trIndex === props.coords[0] && tdIndex === props.coords[1]
                    ?
                    "ceil active-ceil"
                    :
                    "ceil"
                }>
                {td || ""}
              </td>
            )
          })
        }
      </tr>
    )
  })
  const values = props.values.map(value => {
    return (
      <li
        key={value}
        className="ceil"
        onClick={() => props.changeValue(value)}>
        {value}
      </li>
    )
  })
  return (
    <div className='container d-flex'>
      <div className='container d-flex'>
        <table className='sudoku'>
          <tbody>
            {matrix}
          </tbody>
        </table>
        <ul className="d-flex">
          {values}
        </ul>
        <div className='mistakes'>Mistakes: {props.mistakes}/ {props.totalMistakes}</div>
      </div>
    </div>

  )
}

export default Game