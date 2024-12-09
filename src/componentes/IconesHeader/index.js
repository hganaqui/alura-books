import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import './estilo.css'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) =>
                <li className='icone'><img src={icone} alt="icone"></img></li>
            )}
        </ul>
    )
}

export default IconesHeader