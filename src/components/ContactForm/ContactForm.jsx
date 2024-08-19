import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operetions';

function ContactForm() {
    const dispatch = useDispatch();
    const registerSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Name must be more than 3 chars!')
      .max(50, 'Name must be less than 50 chars'),    
    number: Yup.string()
      .required('This field is required!')
      .min(3, 'Number must be more than 3 chars!')
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in format 333-333-3333')
    });

    const initialValues = {
    name: '',
    number: '',    
  };
    
    const handleSubmit = (values, actions) => {      
      const newContact = {        
        name: values.name,
        number: values.number,
      };      
      dispatch(addContactThunk(newContact));
      actions.resetForm();
  };

    return (
      <div className={s.formWrapper}>  
        <Formik validationSchema={registerSchema} initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
                <label className={s.label}>
                  <span>Name:</span>
                  <Field className={s.input} name='name' />
                  <ErrorMessage name='name' component='span' className={s.error} />
                </label>
                <label className={s.label}>
                  <span>Number:</span>
                  <Field className={s.input} name='number' placeholder='111-11-11' />
                  <ErrorMessage name='number' component='span' className={s.error} />
                </label>    
                <button type="submit">Add contact</button>
            </Form>  
        </Formik>
        </div>    
  )
}

export default ContactForm;