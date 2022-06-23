import * as yup from 'yup'

const expensesRecordValidationSchema = yup.object().shape({
    recordedDate: yup.string()
        .matches(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, 'Date format must be MM/dd/yyyy')
        .required('Recorded date is required!'),
    totalPrice: yup.string().required('Total price is required'),
    description: yup.string().required('Description is required'),
})

export default expensesRecordValidationSchema