import {combineReducers} from 'redux'

import tasks from './tasks'
import projects from './projects'
import projectInfo from './projectInfo'
import login from './loginAuth'

export default combineReducers({
  tasks,
  projects,
  projectInfo,
  login
})
