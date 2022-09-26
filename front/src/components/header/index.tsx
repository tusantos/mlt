import Image from 'next/future/image'
import { Header, HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'
import { SearchBoxComponent } from '../searchBox'

export function HeaderComponent() {
  return (
    <Header>
      <HeaderContainer>
        <Image src={Logo} alt="Logo Mercado Livre" width="53" className="logo" />
        <SearchBoxComponent />
      </HeaderContainer>
    </Header>
  )
}
