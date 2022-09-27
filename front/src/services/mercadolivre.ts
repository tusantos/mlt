import { AxiosResponse } from 'axios'
import api from '../lib/axios'
import { ProductDTO } from './dto/product'
import { QueryResultDTO } from './dto/queryResult'

export const getProduct = async (productId: string) => {
  try {
    const handle: AxiosResponse<ProductDTO> = await api.get(`/api/items/${productId}`)
    return handle?.data
  } catch {
    return null
  }
}

export const queryProducts = async (query: string) => {
  try {
    const handle: AxiosResponse<QueryResultDTO> = await api.get(`/api/items?q=${query}`)
    return handle?.data
  } catch {
    return null
  }
}
