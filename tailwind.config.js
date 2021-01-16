const colors = require('tailwindcss/colors');

module.exports = {
    important: false,
    purge: {
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    },
    theme: {
        extend: {
            colors: {
                'bblue': {
                    '50': '#f9f9fb',
                    '100': '#f5f3f8',
                    '200': '#eadff2',
                    '300': '#dec3ec',
                    '400': '#cf94e1',
                    '500': '#bc67d4',
                    '600': '#9845ba',
                    '700': '#6e3594',
                    '800': '#4f2a6b',
                    '900': '#3c2351',
                },
                'gray': colors.blueGray,
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        strong: theme('colors.gray.700'),
                        h1: {
                            color: theme('colors.gray.700'),
                        },
                        h2: {
                            color: theme('colors.gray.700'),
                        },
                        h3: {
                            color: theme('colors.gray.700'),
                        },
                        h4: {
                            color: theme('colors.gray.700'),
                        },
                        h5: {
                            color: theme('colors.gray.700'),
                        },
                        h6: {
                            color: theme('colors.gray.700'),
                        },
                        a: {
                            color: theme('colors.gray.500'),
                            '&:hover': {
                                color: theme('colors.gray.600'),
                            },
                        },
                        pre: {
                            'font-family': 'ff-nexus-typewriter, monospace',
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['responsive', 'dark'],
    },
    plugins: [require('@tailwindcss/typography')],
    future: {
        purgeLayersByDefault: true,
    },
};
