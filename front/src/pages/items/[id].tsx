import type { NextPage, GetServerSideProps } from 'next'
import { HeaderComponent } from '../../components/header'
import { PageContainer } from './styles'
import { BreadcrumbComponent } from '../../components/breadcrumb'
import { ProductComponent } from '../../components/product'
import { getProduct } from '../../services/mercadolivre'

interface PageProps {
  product?: {
    author: {
      name: string
      lastname: string
    }
    item: {
      categories?: string[]
      condition: string
      description: string
      free_shipping: boolean
      id: string
      picture?: string
      sold_quantity: number
      title: string
      price: {
        amount: number
        currency: string
        decimals: number
        format: string
      }
    }
  }
}

const ProductPage: NextPage = (props: PageProps) => {
  return (
    <>
      <HeaderComponent />
      <PageContainer>
        <div className="breadcrumb">
          <BreadcrumbComponent data={props?.product?.item?.categories || []} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  let handleProduct

  if (context?.params?.id && typeof context?.params?.id === 'string') {
    handleProduct = await getProduct(context.params.id)
  }

  return {
    props: {
      product: handleProduct,
    },
  }
}

export default ProductPage
