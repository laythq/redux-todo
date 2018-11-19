var nextId = 10

export const addTodo = (parentId, title) => ({
  type: 'ADD_TODO',
  id: nextId++,
  parentId: parentId,
  title
})
