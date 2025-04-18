import { combineReducers } from "redux"
import songsReducer from "./songsSlices"

const rootReducer = combineReducers({
  songs: songsReducer,
})

export default rootReducer
