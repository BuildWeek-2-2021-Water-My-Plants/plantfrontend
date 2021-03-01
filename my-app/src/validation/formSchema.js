import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required("Please enter your username.").nullable(),
  password: yup.string().required("Please enter your password.").nullable(),
});

export default formSchema;
