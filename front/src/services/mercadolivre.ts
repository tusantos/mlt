import api from '../lib/axios'

export const getProduct = async (productId: string) => {
  try {
    const handle = await api.get(`/api/items/${productId}`)
    return handle?.data
  } catch {
    return null
  }
}

export const queryProducts = async (query: string) => {
  try {
    const handle = await api.get(`/api/items?q=${query}`)
    return handle?.data
  } catch {
    return null
  }
}
