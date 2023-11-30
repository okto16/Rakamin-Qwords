import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '1000',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'lg': {'min': '1023px'},
        // => @media (max-width: 1279px) { ... }
  
        'laptop': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '767px'},
        // => @media (max-width: 767px) { ... }
        'tablet': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'min': '639px'},
        // => @media (max-width: 639px) { ... }
        'phone': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
        daisyui: {
            themes: [
              "bumblebee",
            ],
          },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
    plugins: [require('daisyui')],
};
