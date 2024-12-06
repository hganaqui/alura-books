import logo from '../../images/logo.svg';
import './estilo.css';


function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt="Logo da empresa Alura Books, é um triangulo" 
                className='logo-img'></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    );
}

export default Logo;

