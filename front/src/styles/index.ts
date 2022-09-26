import { createStitches } from '@stitches/react'

export const { config, styled, css, globalCss, keyframes, getCssText, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        yellow500: '#FFE600',
        grey800: '#333333',
        grey500: '#666666',
        grey300: '#999999',
        grey100: '#EEEEEE',
        placeholder: '#bfbfbf',
        white: '#FFFFFF',
      },
    },
  })
