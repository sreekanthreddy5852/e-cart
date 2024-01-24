import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    name: '',
    password: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {name, password} = this.state
    const userDetails = {name, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderName() {
    const {name} = this.state
    return (
      <>
        <label className="label-text" htmlFor="name">
          USERNAME
        </label>
        <input
          type="text"
          className="input-text"
          id="name"
          placeholder="Username"
          value={name}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  renderPassword() {
    const {password} = this.state
    return (
      <>
        <label className="label-text" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          className="input-text"
          id="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website logoin"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="input-container">{this.renderName()}</div>
          <div className="input-container">{this.renderPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
