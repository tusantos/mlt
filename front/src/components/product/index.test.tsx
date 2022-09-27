import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductComponent } from './index'

describe('Product component', () => {
  it('renders correctly', () => {
    render(<ProductComponent />)

    expect(screen.getByTestId('productComponent')).toBeInTheDocument()
    expect(screen.getByTestId('productComponentCta')).toBeInTheDocument()
  })
  it('renders with props correctly', () => {
    render(
      <ProductComponent
        title="titulo"
        condition="condição"
        soldQuantity={5}
        price="10,00"
        description="descrição"
      />
    )

    const handleSold = screen.getByTestId('productComponentSold').textContent
    const handleTitle = screen.getByTestId('productComponentTitle').textContent
    const handlePrice = screen.getByTestId('productComponentPrice').textContent
    const handleDescription = screen.getByTestId('productComponentDescription').textContent

    expect(handleSold).toBe('condição - 5 vendidos')
    expect(handleTitle).toBe('titulo')
    expect(handlePrice).toBe('10,00')
    expect(handleDescription).toBe('descrição')
  })
})
