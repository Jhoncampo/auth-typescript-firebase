import { Link } from "react-router-dom";
import{Formik} from "formik"
import { FormValues } from "./Login";
import { register } from "../config/firebase";

const initialValues: FormValues = {
  email: "",
  password: "",
};

const Register = () => {

  const onSubmit = async({email, password}: FormValues) =>{
    try {
      await register({email, password})
      console.log("User register")
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {
            ({values, handleChange, handleSubmit})=>(
              <form onSubmit={handleSubmit} className="container w-50 mt-5" >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>
                <Link
                    className="link-underline-light d-flex justify-content-center mt-2"
                    to="/login"
                >
                    Do you already have an account? Log in
                </Link>
            </form>
            )
          }
        </Formik>
        </>
    );
};

export default Register;
