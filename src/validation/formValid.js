import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\+?\d+$/, "Phone number must be valid") // Allow `+` for country code
    .min(11, "Phone number must be at least 11 digits"), // Adjust based on country
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
}).required();
