import * as yup from 'yup'

const fuelEfficiencyRecordValidationSchema = yup.object().shape({
    distanceTraveled: yup.string().required('Distance traveled is required!'),
    fuelRefilled: yup.string().required('Fuel refiled is required'),
})

export default fuelEfficiencyRecordValidationSchema