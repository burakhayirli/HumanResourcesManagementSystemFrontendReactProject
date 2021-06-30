import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { values } from 'lodash';
import { Icon, Label, Input, Form, Checkbox, Button } from 'semantic-ui-react'

export default function Login() {
    return (
        <div className="container">
            <div className="brand-box">
                <h1>Hrms</h1>
                <p>İnsan Kaynakları Yönetim Sistemi</p>
            </div>

            <div className="magic-form">

                <Formik initialValues={{
                    name: "",
                    email: "",
                    agree: false,
                    favoriteColor: ""
                }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("isim boş bırakılamaz."),
                        email: Yup.string().email("Lütfen formata uygun bir e-posta adresi giriniz").required("Email boş bırakılamaz"),
                        agree: Yup.boolean().required("Koşulları kabul etmelisiniz."),
                        favoriteColor: Yup.string().required("Lütfen bir renk seçiniz")
                            .oneOf(["red", "blue", "gree"])

                    })}
                >
                    {({ values, errors, handleChange, handleSubmit, hangleReset, dirty, isSubmitting }) => (
                        <Form>
                            <h3>Kaydol</h3>
                            <Label icon="friends" htmlFor="name">İsim</Label>
                            <Input id="name" type="text" placeholder="Burak..." className="input" value={values.name} onChange={handleChange} />

                            <Label htmlFor="name">E-Posta</Label>
                            <Input id="email" type="email" placeholder="burak@burak.com" className="input" value={values.email} onChange={handleChange} />

                            <Label htmlFor="favoriteColor" className="topMargin">Favori Renk</Label>
                            <select id="favoriteColor" value={values.favoriteColor} onChange={handleChange} >

                                <option value="" label="Renk Seç" />
                                <option value="red" label="Kırmızı" />
                                <option value="blue" label="Mavi" />
                                <option value="green" label="Gri" />

                            </select>
                        </Form>


                    )
                    }

                </Formik>


                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>

        </div>
    )
}
