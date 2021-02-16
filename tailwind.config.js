const colors = require('tailwindcss/colors');

module.exports = {
    important: false,
    darkMode: 'class',
    purge: {
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    },
    theme: {
        extend: {
            colors: {
                'gray': colors.blueGray,
                'dark-bg': '#04060b',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        strong: theme('colors.gray.700'),
                        code: {
                            'font-family': 'zeitung-mono, monospace',
                            color: theme('colors.gray.700'),
                        },
                        blockquote: {
                            color: theme('colors.gray.400'),
                            'border-left-color': theme('colors.gray.400'),
                        },
                        thead: {
                            th: {
                                color: theme('colors.gray.700'),
                            },
                        },
                        tr: {
                            'border-bottom-color': theme('colors.gray.200'),
                            'text-align': 'center',
                        },
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
                            'font-family': 'zeitung-mono, monospace',
                            'font-size': '15px !important',
                        },
                    },
                },

                dark: {
                    css: {
                        color: theme('colors.gray.400'),
                        strong: theme('colors.gray.400'),
                        code: {
                            'font-family': 'zeitung-mono, monospace',
                            color: theme('colors.gray.400'),
                        },
                        blockquote: {
                            color: theme('colors.gray.700'),
                            'border-left-color': theme('colors.gray.700'),
                        },
                        thead: {
                            th: {
                                color: theme('colors.gray.400'),
                            },
                        },
                        tr: {
                            'border-bottom-color': theme('colors.gray.700'),
                            'text-align': 'center',
                        },
                        h1: {
                            color: theme('colors.gray.300'),
                        },
                        h2: {
                            color: theme('colors.gray.300'),
                        },
                        h3: {
                            color: theme('colors.gray.300'),
                        },
                        h4: {
                            color: theme('colors.gray.300'),
                        },
                        h5: {
                            color: theme('colors.gray.300'),
                        },
                        h6: {
                            color: theme('colors.gray.300'),
                        },
                        a: {
                            color: theme('colors.gray.300'),
                            '&:hover': {
                                color: theme('colors.gray.200'),
                            },
                        },
                        img: {
                            'opacity': '0.9',
                        },
                        pre: {
                            'font-family': 'zeitung-mono, monospace',
                            'font-size': '15px !important',
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['responsive', 'dark'],
        fontSmoothing: ['dark'],
        opacity: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
    future: {
        purgeLayersByDefault: true,
    },
};
