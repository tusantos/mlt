import Image from 'next/future/image'
import Link from 'next/link'
import { Header, HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'
import { SearchBoxComponent } from '../searchBox'

export function HeaderComponent() {
  return (
    <Header data-testid="headerComponent">
      <HeaderContainer>
        <Link href="/">
          <a>
            <Image src={Logo} alt="Logo Mercado Livre" width="53" height="36" className="logo" />
          </a>
        </Link>
        <SearchBoxComponent />
      </HeaderContainer>
    </Header>
  )
}
