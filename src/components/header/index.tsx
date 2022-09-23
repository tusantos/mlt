import { Header, HeaderContainer } from './style'
import Image from 'next/future/image'
import Logo from '../../assets/logo.png'
import { SearchBoxComponent } from '../searchBox'

export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderContainer>
        <Image src={Logo} alt="Logo Mercado Livre" width="53" className="logo" />
        <SearchBoxComponent />
      </HeaderContainer>
    </Header>
  )
}
