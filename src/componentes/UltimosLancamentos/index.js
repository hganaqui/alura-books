import { Titulo } from '../Titulos'
import  livrosLancamentos  from './dadosUltimosLancamentos'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="white">ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livrosLancamentos.map( livro => (
                    <img src={livro.src} alt='teste'/>
                ) ) }
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos