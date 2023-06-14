import MainNav from './MainNav';
import './MainHeader.css';

function MainHeader(){
    return (
        <header className='main-header'>
            <h1 className='main-header-title'>Aplicaciones Hibridas</h1>
            <MainNav />
        </header>
    )
}

export default MainHeader;