import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/addTask'

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: props.columns,
      task: {
        project_id: props.project_id,
      }
    }
  }
  inputTaskDetails(e) {
    console.log(e.target.value);
    let task = this.state.task
    task[e.target.name] = e.target.value
    this.setState({task})
  }
  submitTask(e) {
    e.preventDefault()
    console.log("submitting task", this.state.task);
    this.props.dispatch(addTask(this.state.task))
  }
  componentWillReceiveProps(nextProps) {
    let task = this.state.task
    task.project_id = nextProps.project_id
    this.setState({columns:nextProps.columns, task})
  }
  renderColumnOptions(columns) {
    return (
      <select name="completionStatus" onChange={(e) => this.inputTaskDetails(e)}>
        <option selected disabled>Pick a column</option>
        {columns.map((column) => this.renderColumnOption(column))}
      </select>
    )
  }
  renderColumnOption(column) {
    return <option value={column.column_value}>{column.column_name}</option>
  }
  render() {
    return (
      <form className="AddTaskForm" onSubmit={(e) => this.submitTask(e)}>
        <label>Task Name
          <input name="taskName" onChange={(e) => this.inputTaskDetails(e)}></input>
        </label>
        <label>Task Description
          <input name="description" onChange={(e) => this.inputTaskDetails(e)}></input>
        </label>
        <label>Complexity (0-100)
          <input name="complexity" onChange={(e) => this.inputTaskDetails(e)}></input>
        </label>
        <label>Display Name
          <input name="userName" onChange={(e) => this.inputTaskDetails(e)}></input>
        </label>
        {this.renderColumnOptions(this.state.columns)}
        <input type="submit" value="Add Task"/>
      </form>
    )
  }
}





function mapStateToProps(state) {
  console.log("state", state.projectInfo);
  return {
    columns: state.projectInfo.columns,
    project_id: state.projectInfo.project_id
  }
}

export default connect(mapStateToProps)(AddTask)
