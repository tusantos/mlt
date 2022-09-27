import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '../../pages'

vitest.mock('next/router', () => {
  return {
    useRouter() {
      return {}
    },
  }
})

describe('Index page', () => {
  it('renders correctly', () => {
    render(<HomePage />)

    expect(screen.getByTestId('headerComponent')).toBeInTheDocument()
    expect(screen.getByTestId('searchBoxComponent')).toBeInTheDocument()
  })
})
