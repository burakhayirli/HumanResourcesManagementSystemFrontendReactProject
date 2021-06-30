import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'
import React from 'react'

export default function CustomTextInput() {
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <input {...field} {...props} />
                {meta.touched && !!meta.error ? (
                    <Label pointing basic color="red" content={meta.error}></Label>
                ) : null}
            </FormField>
        </div>
    )
}
