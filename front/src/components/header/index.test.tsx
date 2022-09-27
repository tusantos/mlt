import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderComponent } from './index'

vitest.mock('next/router', () => {
  return {
    useRouter() {
      return {}
    },
  }
})

describe('Header component', () => {
  it('renders correctly', () => {
    render(<HeaderComponent />)

    expect(screen.getByTestId('headerComponent')).toBeInTheDocument()
  })
  it('renders searchBox correctly', () => {
    render(<HeaderComponent />)

    expect(screen.getByTestId('searchBoxComponent')).toBeInTheDocument()
  })
})
