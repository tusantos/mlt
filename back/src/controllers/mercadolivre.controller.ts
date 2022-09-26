import axios, { AxiosResponse } from 'axios'

import { ProductDTO } from './dto/product.dto'
import { ProductCategoryDTO } from './dto/productCategory.dto'
import { ProductDescriptionDTO } from './dto/productDescription.dto'
import { QueryResultDTO, Price } from './dto/queryResult.dto'

const requestQueryResult = async (query: string) => {
  try {
    const handleRequest: AxiosResponse<QueryResultDTO> = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
    )
    return handleRequest?.data
  } catch {
    return undefined
  }
}

const requestProduct = async (productId: string) => {
  try {
    const handleRequest: AxiosResponse<ProductDTO> = await axios.get(
      `https://api.mercadolibre.com/items/${productId}`,
    )
    return handleRequest?.data
  } catch {
    return undefined
  }
}

const requestProductDescription = async (productId: string) => {
  try {
    const handleRequest: AxiosResponse<ProductDescriptionDTO> = await axios.get(
      `https://api.mercadolibre.com/items/${productId}/description`,
    )
    return handleRequest?.data
  } catch {
    return undefined
  }
}

const requestProductCategory = async (categoryId: string) => {
  try {
    const handleRequest: AxiosResponse<ProductCategoryDTO> = await axios.get(
      `https://api.mercadolibre.com/categories/${categoryId}`,
    )
    return handleRequest?.data
  } catch {
    return undefined
  }
}

const handleSearchQueryCategory = (data: QueryResultDTO) => {
  const handleFilters = data?.filters?.find((el) => el.id === 'category')
  const handleAvailableFilters = data?.available_filters?.find((el) => el.id === 'category')

  if (handleFilters) {
    const data = handleFilters?.values
      ?.map((el) => el.path_from_root.map((elem) => elem.name))
      .slice(0, 3)

    return data?.[0]
  }

  return handleAvailableFilters?.values?.map((el) => el.name).slice(0, 3)
}

const formatPrice = (price?: number) => {
  const formatPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  const format = price ? formatPrice.format(price) : null

  return format
}

const defineProductPrice = (price: number, prices: Price[]) => {
  const findPrice = prices.find((el) => el.amount === price)

  return {
    currency: findPrice?.currency_id || 'ARS',
    amount: findPrice?.amount || price,
    decimals: price ? parseFloat(price.toFixed(2)) : null,
    format: formatPrice(price),
  }
}

const handleQueryResult = async (query: string) => {
  try {
    const request = await requestQueryResult(query)

    if (!request) {
      return null
    }

    const handleCategory = handleSearchQueryCategory(request)

    const handleItems = request.results.map((el) => ({
      id: el?.id,
      title: el?.title,
      price: defineProductPrice(el.price, el?.prices?.prices || []),
      picture: el?.thumbnail_id ? `https://http2.mlstatic.com/D_${el.thumbnail_id}-N.jpg` : null,
      condition: el?.condition,
      free_shipping: el?.shipping?.free_shipping || false,
    }))

    return {
      author: {
        name: 'Arthur',
        lastname: 'Santos',
      },
      categories: handleCategory,
      items: handleItems,
    }
  } catch {
    return null
  }
}

const handleProduct = async (productId: string) => {
  try {
    const handleRequestProduct = await requestProduct(productId)

    if (!handleRequestProduct) {
      return null
    }

    const handleRequestProductDescription = await requestProductDescription(productId)
    let handleRequestProductCategory

    if (handleRequestProduct?.category_id) {
      handleRequestProductCategory = await requestProductCategory(handleRequestProduct?.category_id)
    }

    return {
      author: {
        name: 'Arthur',
        lastname: 'Santos',
      },
      item: {
        id: handleRequestProduct?.id,
        title: handleRequestProduct?.title,
        price: {
          currency: handleRequestProduct?.currency_id,
          amount: handleRequestProduct?.price,
          decimals: handleRequestProduct?.price
            ? parseFloat(handleRequestProduct?.price?.toFixed(2))
            : null,
          format: formatPrice(handleRequestProduct?.price),
        },
        picture: handleRequestProduct?.thumbnail_id
          ? `https://http2.mlstatic.com/D_${handleRequestProduct?.thumbnail_id}-L.jpg`
          : null,
        condition: handleRequestProduct?.condition,
        free_shipping: handleRequestProduct?.shipping?.free_shipping,
        sold_quantity: handleRequestProduct?.sold_quantity,
        description: handleRequestProductDescription?.plain_text,
        categories:
          handleRequestProductCategory?.path_from_root?.map((el) => el.name)?.slice(0, 3) || [],
      },
    }
  } catch {
    return null
  }
}

export default {
  handleQueryResult,
  handleProduct,
}
