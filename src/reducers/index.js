import { combineReducers } from 'redux'
import todo from './todos'

export default combineReducers({
  todo
})

export const initialState = {
  todo: [
    {id: 1, parentId: 0, title: 'one'},
    {id: 2, parentId: 0, title: 'one'},
    {id: 3, parentId: 2, title: 'two'},
    {id: 4, parentId: 0, title: 'one'},
    {id: 5, parentId: 4, title: 'two'},
    {id: 6, parentId: 4, title: 'three'},
    {id: 7, parentId: 0, title: 'one'},
    {id: 8, parentId: 7, title: 'two'},
    {id: 9, parentId: 7, title: 'three'},
    {id: 10, parentId: 7, title: 'four'}
  ]
}
