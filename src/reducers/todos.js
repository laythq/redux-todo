const todo = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        parentId: action.parentId,
        title: action.title,

      }
    ]
    default:
      return state
  }
}

export default todo
