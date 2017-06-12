import React from 'react'
import {connect} from 'react-redux'
import {attemptLogin} from '../actions/login'

class LoginForm extends React.Component {


  constructor(props) {
      super(props)
      this.state = {
        name: '',
        password: ''
      }
    }

    componentWillMount() {
      console.log(this.props);

      // if (this.props.login.isAuthenticated) this.props.history.push('/')
    }

    handleClick(e) {
      e.preventDefault()
      this.props.dispatch(attemptLogin(this.state.name, this.state.password, () => {
        this.props.history.push('/')
      }))
    }

    handleChange (e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }



  render() {
    console.log(this.props);
    return (
      <div className="loginForm">
        <label>User Name
          <input name="name" onChange={(e) => this.handleChange(e)}></input>
        </label>
        <label>Password
          <input name="password" onChange={(e) => this.handleChange(e)}></input>
        </label>

        <button onClick={(e) => this.handleClick(e)}>Login</button>
      </div>
    )
  }
}


LoginForm = connect()(LoginForm)
export default LoginForm
