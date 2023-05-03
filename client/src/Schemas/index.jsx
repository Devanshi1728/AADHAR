import * as Yup from "yup";
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

export const userSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  homeAddress: Yup.string().min(5).required("Please enter your address"),
  phoneNumber: Yup.string()
    .matches(phoneRegex, "Invalid Phone")
    .required("Please enter mobile number"),
});
