import styled from 'styled-components'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const icones = [perfil, sacola]

const IconesContainer = styled.ul `
    display: flex;
    align-items: center;
`

const IconeContainer = styled.li `
   margin-right: 40px;
    width: 25px;
`

function IconesHeader() {
    return (
        <IconesContainer>
            {icones.map((icone) =>
                <IconeContainer><img src={icone} alt="icone"></img></IconeContainer>
            )}
        </IconesContainer>
    )
}

export default IconesHeader