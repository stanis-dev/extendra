const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  safelist: [
    'text-h1',
    'text-h2',
    'text-h3',
    'text-h4',
    'text-body',
    'text-body2',
    'text-btn',
    'text-btn2',
    'text-caption',
    'text-min'
  ],
  theme: {
    extend: {
      screens: {
        mobile: '430px',
        tablet: '744px',
        laptop: '1512px',
        desktop: '1920px',
        'desktop-xl': '1921px'
      },
      lineHeight: {
        1: '100%'
      },
      colors: {
        black: '#0F0F0F',
        cream: '#F2F2EB',
        'cream-80': '#F5F5EF',
        'cream-2-80': '#E5E5E1',
        gray: '#C6C6C6',
        blue: '#4134F3',
        'blue-dm': '#345EF3',
        'gray-dark-100': '#545454',
        'gray-dark-80': '#5E5E5E',
        'gray-dark-40': '#AFAFAF',
        'gray-dark-10': 'rgba(54, 54, 54, 0.02)',
        'gray-mid': '#909090',
        'gray-3-100': '#E7E7E7',
        'white-80': '#FDFDFB',
        'white-40': '#F8F8F3',
        'cream-80': 'rgba(242, 242, 235, 0.8)'
      },
      backgroundImage: {
        'cream-gradient':
          'linear-gradient(180deg, rgba(242, 242, 235, 0) 0%, #F2F2EB 83.85%)',
        'black-gradient':
          'linear-gradient(288.77deg, #545454 4.61%, #0F0F0F 67.05%)',
        'black-pre-gradient':
          'linear-gradient(288.77deg, #0F0F0F 4.61%, #0F0F0F 67.05%)'
      },
      background: {}
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.text-min': {
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.1'),
          fontFamily: 'FK Grotesk SemiMono'
        },
        '.text-caption': {
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.1'),
          fontFamily: 'FK Grotesk SemiMono'
        },
        '.text-btn2': {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.1'),
          fontFamily: 'FK Grotesk'
        },
        '.text-btn': {
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.1'),
          fontFamily: 'FK Grotesk'
        },
        '.text-body2': {
          fontSize: theme('fontSize.base'),
          lineHeight: '108%',
          fontFamily: 'FK Grotesk SemiMono',
          '@media (min-width: 744px)': {
            lineHeight: theme('lineHeight.1')
          },
          '@media (min-width: 1512px)': {
            lineHeight: '108%'
          },
          '@media (min-width: 1920px)': {
            lineHeight: '116%',
            fontSize: theme('fontSize.lg')
          }
        },
        '.text-body': {
          fontSize: theme('fontSize.lg'),
          lineHeight: '128%',
          fontFamily: 'FK Grotesk SemiMono',
          '@media (min-width: 744px)': {
            fontSize: theme('fontSize.xl'),
            lineHeight: '132%'
          },
          '@media (min-width: 1512px)': {
            lineHeight: '124%'
          },
          '@media (min-width: 1920px)': {
            fontSize: theme('fontSize.2xl')
          }
        },
        '.text-h4': {
          fontSize: theme('fontSize.lg'),
          lineHeight: '100%',
          fontFamily: 'FK Grotesk',
          '@media (min-width: 744px)': {
            fontSize: '22px'
          },
          '@media (min-width: 1512px)': {
            fontSize: '20px'
          },
          '@media (min-width: 1920px)': {
            fontSize: '22px'
          }
        },
        '.text-h3': {
          fontSize: '20px',
          lineHeight: '100%',
          fontFamily: 'FK Grotesk',
          '@media (min-width: 744px)': {
            fontSize: '24px'
          },
          '@media (min-width: 1920px)': {
            fontSize: '32px'
          }
        },
        '.text-h2': {
          fontSize: '28px',
          lineHeight: '116%',
          fontFamily: 'FK Grotesk',
          '@media (min-width: 744px)': {
            fontSize: '40px',
            lineHeight: '100%'
          },
          '@media (min-width: 1920px)': {
            fontSize: '48px'
          }
        },
        '.text-h1': {
          fontSize: '42px',
          lineHeight: '100%',
          fontFamily: 'FK Grotesk',
          '@media (min-width: 744px)': {
            fontSize: '60px'
          },
          '@media (min-width: 1512px)': {
            fontSize: '64px'
          },
          '@media (min-width: 1920px)': {
            fontSize: '72px'
          }
        },
        '.text-txt': {
          fontSize: '56px',
          lineHeight: '100%',
          fontFamily: 'FK Grotesk',
          '@media (min-width: 744px)': {
            fontSize: '94px'
          },
          '@media (min-width: 1512px)': {
            fontSize: '116px'
          },
          '@media (min-width: 1920px)': {
            fontSize: '150px'
          }
        },
        '.border-btn': {
          boxShadow: '0px 0px 20px rgba(0,0,0,0.07)',
          border: '0.1px solid rgba(54, 54, 54, 0.05)'
        }
      })
    })
  ]
}
