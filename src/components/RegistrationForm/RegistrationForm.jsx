import { Field, Form, Formik } from "formik";
import s from './RegistrationForm.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {   
  const dispath = useDispatch();
  const initialValues = {
      name: '',
      email: '',
      password: '',
    };
    const handleSubmit = (values, options) => {
      console.log(values);
      dispath(registerThunk(values));
      options.resetForm();
    };
        
    return (
    <div className={s.formWrapper}>        
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name:</span>
              <Field className={s.input} name='name' placeholder='Enter your name' />
            </label> 
            <label className={s.label}>
              <span>Email:</span>
              <Field className={s.input} name='email' placeholder='Enter your email' />
            </label>
            <label className={s.label}>
              <span>Email:</span>
              <Field className={s.input} name='password' type='password' placeholder='Enter your password' />
            </label>
            <button type="submit">Register</button>
             
            <p>
              You already have account?<Link to='/login' > Sign in</Link>
            </p>
          </Form>
        </Formik>      
    </div>
    );
};

export default RegistrationForm;