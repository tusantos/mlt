import type { NextPage } from 'next'
import { SearchContainer } from './styles'
import { BreadcrumbComponent } from '../../components/breadcrumb'
import { HeaderComponent } from '../../components/header'

const SearchPage: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <SearchContainer>
        <div className="breadcrumb">
          <BreadcrumbComponent data={['risos', 'risos2']} />
        </div>
      </SearchContainer>
    </>
  )
}

export default SearchPage
