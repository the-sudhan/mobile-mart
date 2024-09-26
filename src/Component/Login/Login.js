import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { state } = useContext(Context);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (data.email === state.myData.email && data.password === state.myData.password) {
            navigate("/home");
        } else {
            alert("Incorrect Email or Password");
        }
    };

    return (
        <>
        <div className="bb"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="reg">
                <div className="form">
                    <h1>Classy Cell Studio</h1>
                    <div className="rrow">
                        <div className="rcol">
                            <input className="nameinput" placeholder="Email" {...register("email", { required: { value: true, message: "Please enter your Email." }, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Not Valid" } })} />
                            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                            <input name="password" className="inp" placeholder="Password" type="password" {...register("password", { required: { value: true, message: "Please enter Password." }, minLength: { value: 8, message: "Minimum Length is 8" } })} />
                            {errors.password && <p className="errorMsg">{errors.password.message}</p>}
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
