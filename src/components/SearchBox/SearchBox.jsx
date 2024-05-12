import { Formik, Form, Field} from "formik";
import css from "./SearchBox.module.css"
import { useId, useState } from "react";




export default function SearchBox({ onFilter, value }) {
    const fieldId = useId();

   
    return (
        <div className={css.fieldContainer}>
            <label htmlFor={fieldId}>Find contacts by name</label>
            <input type="text" name="username" id={fieldId} onChange={e => onFilter(e.target.value)} className={css.field} value={value} />
        </div>
    );
}
   