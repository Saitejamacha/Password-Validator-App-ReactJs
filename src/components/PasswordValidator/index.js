import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Para,
  Input,
} from './styledComponents'

// Sai Tej's Code

const PasswordValidator = () => {
  const [isValidPassword, passwordStatus] = useState('')

  const onChangeInput = event => {
    const password = event.target.value

    passwordStatus(password)
    console.log(isValidPassword.length)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input
          onChange={onChangeInput}
          value={isValidPassword}
          type="password"
        />
        {isValidPassword.length < 8 ? (
          <Para errorText>Your password must be at least 8 characters</Para>
        ) : null}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
