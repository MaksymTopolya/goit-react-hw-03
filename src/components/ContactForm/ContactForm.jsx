import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css"
import * as Yup from "yup";

export default function ContactForm({ onAddNewUser }) {
  const fieldId = useId()

    const handleSubmit = (value, action) => {
        action.resetForm();
        onAddNewUser(value);
    }

    const UserSchema = Yup.object().shape({
  username: Yup.string()
            .min(3, "Too short")
            .max(15, "Too long")    
    .required("Required"),
  phone: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers")
      .min(7, "Too short")
      .max(14, "Too long")
      .required("Required")
});

  
    return (
        <Formik initialValues={{
            username: "",
            phone: "",
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}> 
            <Form className={css.form}>
                <div className={css.fieldContainer}>
                    <label htmlFor={`${fieldId}-username`}>Name</label>
                    <Field type="text" name="username" id={`${fieldId}-username`} className={css.field}></Field>
                      <ErrorMessage className={css.error} name="username" component="span"/>
                </div>

                 <div className={css.fieldContainer}>
                    <label htmlFor={`${fieldId}-number`}>Number</label>
                    <Field type="phone" name="phone" id={`${fieldId}-number`} className={css.field}></Field>
                    <ErrorMessage className={css.error} name="phone" component="span"/>
                </div>

                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}
