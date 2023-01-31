import { useFormik } from "formik";
import contactFormSchema from "../schemas/contactForm";

function ContactForm() {
  const contactFormInitialValues = { fullName: "", email: "", message: "" };
  const formik = useFormik({
    initialValues: contactFormInitialValues,
    validationSchema: contactFormSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        console.log(values);
        alert("Form Submitted Successfully");
        resetForm();
      } catch (error) {
        console.log(error.message);
      }
      setSubmitting(false);
    },
  });

  const {
    errors,
    handleSubmit,
    touched,
    isSubmitting,
    isValid,
    getFieldProps,
  } = formik;
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="fullName">Full Name</label>
      <input id="fullName" type="text" {...getFieldProps("fullName")} />
      {touched.fullName && errors.fullName ? (
        <div className="error">{errors.fullName}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input id="email" type="email" {...getFieldProps("email")} />
      {touched.email && errors.email ? (
        <div className="error">{errors.email}</div>
      ) : null}

      <label htmlFor="message">Message</label>
      <textarea id="message" type="textarea" {...getFieldProps("message")} />
      {touched.message && errors.message ? (
        <div className="error">{errors.message}</div>
      ) : null}

      <button type="submit" disabled={isSubmitting || !isValid}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
