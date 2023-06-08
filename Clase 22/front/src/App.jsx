import {useNavigate, Outlet, Link} from 'react-router-dom'
import authService from './services/auth.service'
import 'minireset.css'
import './App.css'

function App(){
    const navigate = useNavigate()

    const onLogOut = () => {
        authService.logout()

        localStorage.removeItem('token')

        navigate('/login', {replace: true})
    }


    
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link onClick={onLogOut} >Salir</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default App