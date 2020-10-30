import { FormInput, FormLoginContainer } from './FormLoginElements'

const FormLogin = ({ type, placeholder, onChange, value }) => {
  return (
    <>
      <FormLoginContainer>
        <FormInput
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </FormLoginContainer>
    </>
  )
}

export default FormLogin
