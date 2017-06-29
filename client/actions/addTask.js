import request from 'superagent'

export const addTaskAction = (task) => {
  return {
    type: 'ADD_TASK',
    task
  }
}

export const addTask = (task) => {
  return (dispatch) => {
    console.log({task});
    request
      .post('/api/tasks')
      .send(task)
      .end((err, res) => {
        if (err) console.log(err);
        else console.log({res: res.body});
        dispatch(addTaskAction(res.body))
        window.location.assign(`http://localhost:3000/#/projects/${task.project_id}`)
      })
  }
}
