import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'

class ProjectForm extends React.Component {
 constructor(props) {
   super(props)
   this.state = {column_name: '', column_value: ''}
 }

 handleChange(e) {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 getTasks(state) {
   return (state)
 }

 render() {
   return (
     <div>
       <label>Column Name
       <input type="text" name="column_name" value={this.state.column_name} onChange={this.handleChange.bind(this)}/></label>
       <br/>
       <label>Column Value
       <input type="text" name="column_value" value={this.state.column_value} onChange={this.handleChange.bind(this)}/></label>
       <br/>
       <button onClick={() => this.props.dispatch(actions.addProject(this.state))}>Create Board</button>
     </div>

   )
 }

}


ProjectForm = connect()(ProjectForm)

export default ProjectForm
