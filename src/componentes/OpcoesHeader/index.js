import styled from 'styled-components';
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]

const OpcoesContainer = styled.ul`
    display: flex;
`

const OpcaoContainer = styled.li `
 min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;`

function OpcoesHeader() {
    return (
        <OpcoesContainer>
            {
                textoOpcoes.map((texto) => (
                    <OpcaoContainer><p>{texto}</p></OpcaoContainer>
                ))
            }
        </OpcoesContainer>
    )
}

export default OpcoesHeader;