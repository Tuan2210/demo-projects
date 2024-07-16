import * as yup from "yup";
import { EMAIL_REGEX } from "./regexValidate";

const schema = yup.object().shape({
  emailFrom: yup
    .string()
    .required("Email is required")
    .test(
      "is-email",
      "Invalid email! Example: user@example.com",
      function (value) {
        return yup
          .string()
          .matches(EMAIL_REGEX, {
            excludeEmptyString: true,
          })
          .isValidSync(value);
      }
    ),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export default schema;
