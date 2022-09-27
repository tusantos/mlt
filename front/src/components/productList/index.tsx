import Image from 'next/future/image'
import Link from 'next/link'
import { ProductListContainer } from './style'
import ShippingIcon from '../../assets/shippingicon.png'
import { Item } from '../../services/dto/queryResult'

interface ComponentProps {
  products?: Item[]
  maxProduts?: number
}

export function ProductListComponent({ products, maxProduts = 4 }: ComponentProps) {
  return (
    <ProductListContainer data-testid="productListComponent">
      {products?.length &&
        products
          .map((el) => {
            return (
              <Link key={el.id} href={`/items/${el.id}`}>
                <a className="product" data-testid={`product${el.id}`}>
                  <Image
                    src={el.picture}
                    alt={`Imagem de ${el.title}`}
                    width="180"
                    height="180"
                    quality="50"
                    className="img"
                    data-testid={`product${el.id}-picture`}
                  />
                  <div className="infos">
                    <div className="priceBox">
                      <h1 data-testid={`product${el.id}-price`}>{el.price.format}</h1>
                      {el.free_shipping && (
                        <Image
                          src={ShippingIcon}
                          alt="Icone shipping"
                          width="22"
                          height="22"
                          className="icon"
                          data-testid={`product${el.id}-shipping`}
                        />
                      )}
                    </div>
                    <h3 className="title" data-testid={`product${el.id}-title`}>
                      {el.title}
                    </h3>
                  </div>
                  <h4 className="city">Mendoza</h4>
                </a>
              </Link>
            )
          })
          .slice(0, maxProduts)}
    </ProductListContainer>
  )
}
