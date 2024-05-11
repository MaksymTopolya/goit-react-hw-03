import { Formik, Form, Field} from "formik";
import css from "./SearchBox.module.css"
import { useId, useState } from "react";




export default function SearchBox({ valueInField }) {
    const fieldId = useId();

    const handleChange = (event) => {
        const value = event.target.value;
        valueInField(value);
    };

    return (
        <div className={css.fieldContainer}>
            <label htmlFor={fieldId}>Find contacts by name</label>
            <input type="text" name="username" id={fieldId} onChange={handleChange} className={css.field} />
        </div>
    );
}
   