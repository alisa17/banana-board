import request from 'superagent'

export function sendLoginRequest (name, password, callback) {
  request
    .post('/login')
    .send({
      name,
      password
    })
    .end(callback)
}

export function sendLogoutRequest (callback) {
  request
    .get('/logout')
    .end(callback)
}



export const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
    isAuthenticated: false,
    isFetching: true
  }
}

export const loginSuccess = (id) => {
  return {
    type: 'LOGIN_SUCCESS',
    isAuthenticated: true,
    isFetching: false,
    userToken: id
  }
}

export const loginFail = (msg) => {
  return {
    type: 'LOGIN_FAIL',
    isAuthenticated: false,
    isFetching: false,
    message: msg
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
  }
}

export const clearError = () => {
  return {
    type: 'CLEAR_MESSAGE',
    message: ''
  }
}

export function attemptLogin (name, password, callback) {
  return (dispatch) => {
    sendLoginRequest(name, password, (err, res) => {
      if (!err) {
        dispatch(loginSuccess(res.body.token))
        localStorage.setItem("user_token", res.body.token)
        callback()
      }
    })
  }
}

export function attemptLogout (callback) {
  return (dispatch) => {
    sendLogoutRequest((err, res) => {
      if (err) { console.log(err) }
      else {
        dispatch(logoutSuccess())
        localStorage.removeItem("user_token")
        callback()
      }
    })
  }
}
