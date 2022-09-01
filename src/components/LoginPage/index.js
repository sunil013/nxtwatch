import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'

import {
  LoginSection,
  FormContainer,
  LoginImageLogo,
  FormElement,
  LabelElement,
  InputElement,
  CheckBox,
  ShowPasswordLabel,
  CheckBoxContainer,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {
      username,
      password,
      showPassword,
      errorMsg,
      showSubmitError,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <LoginSection darkTheme={darkTheme}>
              <FormContainer darkTheme={darkTheme}>
                <LoginImageLogo
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormElement onSubmit={this.onSubmitForm}>
                  <LabelElement htmlFor="username">USERNAME</LabelElement>
                  <InputElement
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <LabelElement htmlFor="password">PASSWORD</LabelElement>
                  <InputElement
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <CheckBoxContainer>
                    <CheckBox
                      type="checkbox"
                      id="showPass"
                      onChange={this.onToggleShowPassword}
                    />
                    <ShowPasswordLabel htmlFor="showPass" darkTheme={darkTheme}>
                      Show Password
                    </ShowPasswordLabel>
                  </CheckBoxContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMessage>{errorMsg}</ErrorMessage>}
                </FormElement>
              </FormContainer>
            </LoginSection>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default LoginPage
