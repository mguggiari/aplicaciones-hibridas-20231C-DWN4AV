import { useNavigate } from 'react-router-dom'
import { useState, useCallback } from 'react'
import './LoginPage.css'
import authService from '../services/auth.service'

function LoginPage(){
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onChangeUserName = useCallback((event) => {
        setUserName(event.target.value)
    }, [setUserName])

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword])

    const onSubmit = useCallback((event) => {
        event.preventDefault()

        authService.login({userName, password})
        .then(({account, token}) => {
            console.log("Session iniciada", {account, token})
            setError('')
            localStorage.setItem('token', token)
            navigate('/', {replace: true})
           
        })
        .catch(err => {
            setError(err.error.message)
        })
    }, [userName, password, navigate, setError])


    return (
        <div className='login-page'>
            <form className='login-form' onSubmit={onSubmit}>
                <h1 className='login-form__title'>Iniciar Sesion</h1>
                <label className='login-form__field'>
                    Nombre de usuario:
                    <input type="text" className='login-form__username' onChange={onChangeUserName}  value={userName} />
                </label>
                <label className='login-form__field'>
                    Contraseña:
                    <input type="password" className='login-form__password' onChange={onChangePassword} value={password} />
                </label>
                <p>{error}</p>
                <button type="submit" className='login-form__submit'>Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage