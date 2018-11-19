import {connect} from 'react-redux'
import {addTodo} from '../actions'
import AddChild from '../components/AddChild'

const mapDispatchToProps = dispatch => ({
  onSubmit: (parentId, title) => dispatch(addTodo(parentId, title))
})

export default connect(
  null,
  mapDispatchToProps
)(AddChild)
