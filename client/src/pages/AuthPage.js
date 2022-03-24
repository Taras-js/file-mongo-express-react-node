import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        message(error)
        clearError()
    },[error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log('form:', form)
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('data:', data)
            setForm({
                email: '',
                password: ''
            })

        } catch (e) {
        }

    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }
    return (
        <div>
            {auth.isAuthenticated
            ?<h5>Вы зарегистрированы! для входа введите емайд и пароль и нажмите кнопку войти</h5>
            :<h5>Для авторизации введите емайл и пароль и нажмите кнопку зарегистрироваться</h5>
            }

            <form className="form-registration" name="simple form" autoComplete="on" noValidate>
                <fieldset className="fieldset">
                    <legend className="legend"> Авторизация пользователя </legend>
                <input
                    id="email"
                    type="text"
                    placeholder="Введите email"
                    name="email"
                    className="yellow-input"
                    value={form.email}
                    onChange={changeHandler}
                    autoFocus
                />
                    <label htmlFor="email">Email</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="yellow-input"
                    placeholder="Введите пароль"
                    onChange={changeHandler}
                    value={form.password}
                />

                    <label htmlFor="password">Password</label>
                    <div className="card-action">
                    <button className="button"
                            disabled={loading}
                            onClick={loginHandler}

                    >Войти</button>
                    <button className="button"
                            onClick={registerHandler}
                            disabled={loading}
                    >Зарегистрироваться</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}