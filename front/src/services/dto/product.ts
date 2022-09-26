interface Author {
  name: string
  lastname: string
}

interface Price {
  currency: string
  amount: number
  decimals: number
  format: string
}

interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
  sold_quantity: number
  description: string
  categories: string[]
}

export interface ProductDTO {
  author: Author
  item: Item
}
