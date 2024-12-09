import styled from 'styled-components';
import logo from '../../images/logo.svg';

const LogoContainer = styled.div `
    display: flex;
    font-size: 30px; 

.logo-img{
    margin-right: 10px;
}
`

function Logo() {
    return (
        <LogoContainer>
            <img
                src={logo}
                alt="Logo da empresa Alura Books, é um triangulo" 
                className='logo-img'></img>
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    );
}

export default Logo;

