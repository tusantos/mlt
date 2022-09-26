import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { HeaderComponent } from '../components/header'

const HomePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Mercado Livre Brasil - Frete Grátis no mesmo dia"
        description="Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis."
      />
      <HeaderComponent />
    </>
  )
}

export default HomePage
