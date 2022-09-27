import { describe, expect, it, vitest } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchBoxComponent } from './index'
import { useRouter } from 'next/router'

const pushMock = vitest.fn()
vitest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        push: pushMock,
      }
    },
  }
})

describe('SearchBox component', () => {
  it('renders correctly', () => {
    render(<SearchBoxComponent />)

    expect(screen.getByTestId('searchBoxComponent')).toBeInTheDocument()
  })
  it('click search', () => {
    render(<SearchBoxComponent />)

    const handleSearchInput = screen.getByTestId('searchBoxComponentSearchInput')
    const handleSearchButton = screen.getByTestId('searchBoxComponentSearchButton')

    fireEvent.change(handleSearchInput, { target: { value: 'teste' } })
    fireEvent.click(handleSearchButton)

    expect(pushMock).toHaveBeenCalledTimes(1)
  })
})
