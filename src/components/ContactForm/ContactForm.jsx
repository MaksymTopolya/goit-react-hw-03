import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css"
import * as Yup from "yup";

export default function ContactForm({ onAddNewContact }) {
  const fieldId = useId()

    const handleSubmit = (value, action) => {
        action.resetForm();
        onAddNewContact(value);
    }

    const UserSchema = Yup.object().shape({
  name: Yup.string()
            .min(3, "Too short")
            .max(15, "Too long")    
    .required("Required"),
  number: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers")
      .min(7, "Too short")
      .max(14, "Too long")
      .required("Required")
});

  
    return (
        <Formik initialValues={{
            name: "",
            number: "",
        }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}> 
            <Form className={css.form}>
                <div className={css.fieldContainer}>
                    <label htmlFor={`${fieldId}-name`}>Name</label>
                    <Field type="text" name="name" id={`${fieldId}-name`} className={css.field}></Field>
                      <ErrorMessage className={css.error} name="name" component="span"/>
                </div>

                 <div className={css.fieldContainer}>
                    <label htmlFor={`${fieldId}-number`}>Number</label>
                    <Field type="phone" name="number" id={`${fieldId}-number`} className={css.field}></Field>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>

                <button type="submit" className={css.btn}>Add contact</button>
            </Form>
        </Formik>
    )
}
