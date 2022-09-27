import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BreadcrumbComponent } from './index'

describe('BreadcrumbComponent component', () => {
  it('renders correctly', () => {
    render(<BreadcrumbComponent />)

    expect(screen.getByTestId('breadcrumbComponent')).toBeInTheDocument()
  })
  it('category data prop', () => {
    render(<BreadcrumbComponent data={['category1', 'category2']} />)

    const categories = screen.getByTestId('breadcrumbComponent').textContent

    expect(categories).toBe('category1 > category2')
  })
})
