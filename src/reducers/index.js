import { combineReducers } from 'redux'
import todo from './todos'

export default combineReducers({
  todo
})

export const initialState = {
  todos: [
    {title: 'one'},
    {title: 'one', subtitle: 'three'},
    {title: 'two'}
  ]
}
