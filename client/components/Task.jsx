import React from 'react'
import {connect} from 'react-redux'
import {selectTaskAction} from '../actions/selectTask'
import {updateStatus} from '../actions'


const Task = ({task, dispatch, selected}) => (
  <div className='single-task' onClick={(e) => dispatch(selectTaskAction(task))}>
    <li>
      <h5><span className="taskName">{task.taskName}</span>
        <span className="userName">{task.userName}</span>
      </h5>
    </li>
    <li>
      <span className="description">{task.description}</span>
    </li>
    {selected
      ? <li>
        <div className="flexrow">
          <div className="leftarrow" onClick={() => dispatch(updateStatus(task, -1))}>🡰</div>
          {task.complexity}<img className="complexity-img" src="banana.png" alt="banana"></img>
          <div className="rightarrow" onClick={() => dispatch(updateStatus(task, 1))}>🡲</div>
        </div>
      </li>
      : ' '
    }

  </div>
)


export default connect()(Task)
