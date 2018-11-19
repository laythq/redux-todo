import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TreeNode from '../components/TreeNode'

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}


const mapDispatchToProps = dispatch => ({
  onSubmit: (title) => dispatch(addTodo(title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeNode)
