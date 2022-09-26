import { Request, Response } from 'express'

import mercadolivreController from '../controllers/mercadolivre.controller'

const searchProducts = async (req: Request, res: Response) => {
  const requestQuery = req?.query?.q

  if (!requestQuery || typeof requestQuery !== 'string') {
    return res.status(404).send({
      error: 'not found',
    })
  }

  const handleSearch = await mercadolivreController.handleQueryResult(requestQuery)
  return res.send(handleSearch)
}

const getProduct = async (req: Request, res: Response) => {
  const id = req?.params?.id
  const handleProduct = await mercadolivreController.handleProduct(id)
  return res.send(handleProduct)
}

export default {
  searchProducts,
  getProduct,
}
