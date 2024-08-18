import { Field, Form, Formik } from "formik";
import s from './LoginPage.module.css';
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const initialValues = {
      email: '',
      password: '',
    };
    const dispath = useDispatch();
    const handleSubmit = (values, options) => {
      dispath(loginThunk(values));
      console.log(values);
      options.resetForm();
    };
  if (isLoggedIn) {
    return <Navigate to='/' />;
    }

    return (
    <div className={s.formWrapper}>        
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <label className={s.label}>
              <span>Email:</span>
              <Field className={s.input} name='email' placeholder='Enter your email' />
            </label>
            <label className={s.label}>
              <span>Email:</span>
              <Field className={s.input} name='password' type='password' placeholder='Enter your password' />
            </label>
            <button type="submit">Log In</button>

            <p>
              You don`t have account?<Link to='/register' > Sign up</Link>
            </p>
          </Form>
        </Formik>      
    </div>
    );
};

export default LoginPage;