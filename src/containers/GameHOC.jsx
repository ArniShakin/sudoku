import { useState } from "react"
import Game from "../components/Game"
import data from "../store/data"
import Win from "../components/Win"

const GameHOC = () => {
  const [state, changeState] = useState({
    coords: [0, 0],
    mistakes: data.mistakes,
    matrix: JSON.parse(JSON.stringify(data.matrix[data.level][1]))
  })
  const changeCoords = (trIndex, tdIndex) => {
    changeState({
      ...state,
      coords:[trIndex, tdIndex]
    })
  }
  const changeValue = value => {
  
    if (state.matrix[state.coords[0]][state.coords[1]] !== 0) {
      return
    }
    const newState = JSON.parse(JSON.stringify(state))
    if (data.matrix[data.level][0][state.coords[0]][state.coords[1]] === +value) {
      newState.matrix[state.coords[0]][state.coords[1]] = +value
    } else {
      newState.mistakes++
      
    }
    changeState(newState)
}

const nextLevel =() => {
  data.level = (data.level + 1) % data.matrix.length

}
  return <Game
    coords={state.coords}
    changeValue={changeValue}
    changeCoords={changeCoords}
    matrix={state.matrix}
    values={data.values}
    mistakes={state.mistakes}
    totalMistakes={data.totalMistakes}
    nextLevel={nextLevel} />
}


export default GameHOC