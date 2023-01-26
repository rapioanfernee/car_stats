import * as yup from "yup";

const dashboardConfigurationValidationSchema = yup.object().shape({
  make: yup.string().required("Make is required"),
  model: yup.string().required("Model is required"),
  year: yup.string().required("Year is required"),
  displacement: yup.string(),
  variant: yup.string(),
  transmission: yup.string()
});

export default dashboardConfigurationValidationSchema;
