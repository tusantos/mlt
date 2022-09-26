import type { NextPage } from 'next'
import { PageContainer } from './styles'
import { BreadcrumbComponent } from '../../components/breadcrumb'
import { HeaderComponent } from '../../components/header'

const SearchPage: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <PageContainer>
        <div className="breadcrumb">
          <BreadcrumbComponent data={['risos', 'risos2']} />
        </div>
      </PageContainer>
    </>
  )
}

export default SearchPage
