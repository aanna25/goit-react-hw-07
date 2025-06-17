import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          Name
          <Field type="text" name="name" className={style.input} />
          <ErrorMessage name="name" component="div" className={style.error} />
        </label>
        <label className={style.label}>
          Number
          <Field type="tel" name="number" className={style.input} />
          <ErrorMessage name="number" component="div" className={style.error} />
        </label>
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
