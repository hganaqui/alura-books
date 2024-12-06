import logo from '../../images/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="Logo da empresa Alura Books, é um triangulo"></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    );
}

export default Logo;

