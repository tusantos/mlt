import type { NextPage, GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { PageContainer } from '../../styles/pages'
import { BreadcrumbComponent } from '../../components/breadcrumb'
import { HeaderComponent } from '../../components/header'
import { ProductListComponent } from '../../components/productList'
import { queryProducts } from '../../services/mercadolivre'
import { QueryResultDTO } from '../../services/dto/queryResult'

interface PageProps {
  products?: QueryResultDTO
  query?: string
}

const SearchPage: NextPage = (props: PageProps) => {
  return (
    <>
      <NextSeo
        title={`Mercado Livre - Compre ${props?.query}`}
        description={`Compre ${props?.query} com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.`}
      />
      <HeaderComponent />
      <PageContainer>
        <div className="breadcrumb">
          <BreadcrumbComponent data={props?.products?.categories || []} />
        </div>
        <ProductListComponent products={props?.products?.items} />
      </PageContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let handleProducts

  if (context?.query?.search && typeof context?.query?.search === 'string') {
    handleProducts = await queryProducts(context.query.search)
  }

  return {
    props: {
      products: handleProducts,
      query: context?.query?.search,
    },
  }
}

export default SearchPage
