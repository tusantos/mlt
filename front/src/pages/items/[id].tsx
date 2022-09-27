import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import { HeaderComponent } from '../../components/header'
import { PageContainer } from '../../styles/pages'
import { BreadcrumbComponent } from '../../components/breadcrumb'
import { ProductComponent } from '../../components/product'
import { getProduct } from '../../services/mercadolivre'
import { ProductDTO } from '../../services/dto/product'

interface PageProps {
  product?: ProductDTO
}

const ProductPage: NextPage = (props: PageProps) => {
  return (
    <>
      <NextSeo
        title={`Mercado Livre - ${props.product?.item?.title}`}
        description={props?.product?.item?.description}
      />
      <HeaderComponent />
      <PageContainer data-testid="productPage">
        <div className="breadcrumb">
          <BreadcrumbComponent data={props?.product?.item?.categories} />
        </div>
        {props.product && (
          <ProductComponent
            title={props.product?.item?.title}
            condition={props?.product?.item?.condition}
            soldQuantity={props?.product?.item?.sold_quantity}
            price={props?.product?.item?.price?.format}
            picture={props?.product?.item?.picture}
            description={props?.product?.item?.description}
          />
        )}

        {!props.product && <div>Produto não encontrado</div>}
      </PageContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let handleProduct

  if (context?.params?.id && typeof context?.params?.id === 'string') {
    handleProduct = await getProduct(context.params.id)
  }

  return {
    props: {
      product: handleProduct,
    },
    revalidate: 60 * 5, // 5 min
  }
}

export default ProductPage
