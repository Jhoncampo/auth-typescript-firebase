import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../config/firebase"
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

export interface FormValues {
    email: string;
    password: string;
}
const initialValues: FormValues = {
    email: "",
    password: "",
};

const Login = () => {

    const navigate = useNavigate()

    const onSubmit = async({ email, password }: FormValues) => {
        console.log("Login", email, password);
        try {const credential = await login({email, password})
        console.log(credential)
        } catch (error) {
          console.log(error)
        }
    };

    const { stateUser} = useUserContext()
    console.log(stateUser)

    useEffect(()=>{
        if(stateUser){
            navigate("/todo")
        }
    },[stateUser])

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit, handleChange, values }) => (
                    <form
                        className="container w-50 mt-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
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
                                onChange={handleChange}
                                value={values.password}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                        <Link
                            className="link-underline-light d-flex justify-content-center mt-2"
                            to="/register"
                        >
                            You do not have an account? Sign up
                        </Link>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Login;
