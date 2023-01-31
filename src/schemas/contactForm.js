import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(2, "Must be at least 2 characters"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  message: Yup.string(),
});

export default contactFormSchema;
