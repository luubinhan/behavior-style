import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
    // darkMode: 'class', // or 'media'
    theme: {
      colors: {
        violet: {
            300: '#383d6d',
            400: '#2a3064'
        },
        blue: {
            500: '#3f9ffe'
        },
        yellow: {
          100: '#ffebc7',
          200: '#fdc24d'
        }
      }
    },
  })