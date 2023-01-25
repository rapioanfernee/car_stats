import * as yup from "yup";

const dashboardConfigurationValidationSchema = yup.object().shape({
  recordedDate: yup
    .string()
    .required("Total price is required") 
    .required("Recorded date is required!"),
  totalPrice: yup.string().required("Total price is required"),
  description: yup.string().required("Description is required"),
});

export default dashboardConfigurationValidationSchema;
