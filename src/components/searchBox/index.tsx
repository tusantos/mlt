import { SearchContainer } from './style'
import searchIcon from '../../assets/searchicon.png'
import Image from 'next/future/image'

export const SearchBoxComponent = () => {
  return (
    <SearchContainer>
      <input type="text" placeholder="Buscar produtos, marcas e muito mais…"></input>
      <button type="submit">
        <Image src={searchIcon} alt="Icone de busca" width="17" />
      </button>
    </SearchContainer>
  )
}
