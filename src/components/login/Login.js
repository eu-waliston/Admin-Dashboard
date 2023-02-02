import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    return (
        <div className="form__control">
            <div className="form__itens">
                <div className="form__item_1">
                    <h1>Bem Vindo!</h1>
                    <div className="form_camps">
                        <label>Email : &nbsp;&nbsp;</label>
                        <input type={"email"} class="form-control" required sugestion />
                        <br />
                        <label>Senha: &nbsp;&nbsp; </label>
                        <input type={"password"} class="form-control" required />
                    </div>

                    <button className="btn btn-primary" type="submit">
                        <Link to={"/app"} className="link__style" type={"submit"}>
                            Login
                        </Link>
                    </button>

                    <Link to={"/register"} className="itens__flex">
                        Criar uma conta
                    </Link>

                    <Link to={"/recover"} className="itens__flex">
                        Recuperar senha.
                    </Link>
                </div>
                <div className="form__item_2">
                    <h1>Admin Dashboard</h1>
                    <h4>By Tree Chart Tech</h4>
                    <img src={require("../assets/logo.png")}  alt="fundo" className="logo"/>
                </div>        
            </div>
        </div>
    );
};

export default Login;
