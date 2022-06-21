import * as yup from 'yup'

const registerValidationSchema = yup.object().shape({
    emailAddress: yup.string().email().required('Email is required!'),
    confirmEmailAddress: yup.string()
        .oneOf([yup.ref('emailAddress')], 'Email addresses do not match')
        .required('Confirm email address is required'),
    password: yup.string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
})

export default registerValidationSchema