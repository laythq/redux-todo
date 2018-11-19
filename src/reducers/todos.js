const todo = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        title: action.title,
      }
    ]
    default:
      return state
  }
}

export default todo
