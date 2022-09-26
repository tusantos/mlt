import { useRouter } from 'next/router'
import { useEffect, useState, KeyboardEvent } from 'react'
import Image from 'next/future/image'
import { SearchContainer } from './styles'
import searchIcon from '../../assets/searchicon.png'

export function SearchBoxComponent() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = () => {
    if (searchInput.length) {
      router.push(`/items?search=${searchInput}`)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    const searchParam = router?.query?.search

    if (searchParam && typeof searchParam === 'string') {
      setSearchInput(searchParam)
    }
  }, [router.query])

  return (
    <SearchContainer>
      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={searchInput}
        placeholder="Buscar produtos, marcas e muito mais…"
      />
      <button type="submit" onClick={handleSearch}>
        <Image src={searchIcon} alt="Icone de busca" width="17" />
      </button>
    </SearchContainer>
  )
}
