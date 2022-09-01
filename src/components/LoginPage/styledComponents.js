import styled from 'styled-components'

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
`
export const FormContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-top: 40px;
  padding-bottom: 40px;
`
export const LoginImageLogo = styled.img`
  width: 80px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 110px;
  }
`
export const FormElement = styled.form`
  width: 90%;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#475569')};
`
export const InputElement = styled.input`
  height: 40px;
  border-radius: 3px;
  width: 100%;
  outline: none;
  border: #94a3b8 solid 1px;
  font-family: 'Roboto';
  background-color: transparent;
  color: #64748b;
  padding-left: 10px;
  margin-top: 6px;
  margin-bottom: 16px;
`
export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 15px;
  border-radius: 8px;
  height: 38px;
  width: 100%;
  margin-top: 30px;
  cursor: pointer;
  outline: none;
`
export const ErrorMessage = styled.p`
  //   align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
