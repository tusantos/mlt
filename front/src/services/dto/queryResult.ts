interface Author {
  name: string
  lastname: string
}

interface Price {
  currency: string
  amount: number
  decimals?: number
  format: string
}

export interface Item {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
}

export interface QueryResultDTO {
  author: Author
  categories: string[]
  items: Item[]
}
