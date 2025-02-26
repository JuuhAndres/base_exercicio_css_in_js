import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import GlobalStyled, { ContainerGlobal } from './global'

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Hero />
      <ContainerGlobal>
        <ListaVagas />
      </ContainerGlobal>
    </>
  )
}

export default App
