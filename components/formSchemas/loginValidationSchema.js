import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    emailAddress: yup.string().email().required('Email is required!'),
    password: yup.string().required('Password is required'),
})

export default loginValidationSchema