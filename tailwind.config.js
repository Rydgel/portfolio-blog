const colors = require('tailwindcss/colors');

module.exports = {
    important: false,
    purge: {
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    },
    theme: {
        extend: {
            colors: {
                "bblue": {
                    '50':  '#f9f9fb',
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
                "gray": colors.blueGray,
            }
        }
    },
    variants: {
        typography: ["responsive", "dark"]
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    future: {
        purgeLayersByDefault: true,
    },
};
