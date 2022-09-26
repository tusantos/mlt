import Image from 'next/future/image'
import { ProductContainer } from './style'

interface ComponentProps {
  title?: string
  condition?: string
  soldQuantity?: number
  price?: string
  picture?: string
  description?: string
}

export function ProductComponent({
  title,
  condition = 'Nuevo',
  soldQuantity = 0,
  price,
  picture,
  description,
}: ComponentProps) {
  return (
    <ProductContainer>
      <div className="header-infos">
        {picture && (
          <Image
            src={picture}
            alt={`Mercado Livre - ${title}`}
            width="600"
            height="600"
            className="img"
          />
        )}
        <div className="infos">
          <h3 className="sold">
            {condition} - {soldQuantity} vendidos
          </h3>
          {title && <h1 className="title">{title}</h1>}
          {price && <h2 className="price">{price}</h2>}
          <button className="cta">Comprar</button>
        </div>
      </div>
      <div className="footer-infos">
        <h3 className="title">Descripción del producto</h3>
        <p className="description">{description}</p>
      </div>
    </ProductContainer>
  )
}
