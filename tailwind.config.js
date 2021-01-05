module.exports = {
    important: false,
    purge: {
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    },
    theme: {
        extend: {
            gridTemplateColumns: {
                'about-mobile': '6rem 1fr [social-col] repeat(4, 1rem)',
                'about': '9.6rem 1fr [social-col] repeat(4, 1.6rem)',
            },
            gridTemplateRows: {
                'about-mobile': '6rem 1fr',
                'about': '9.6rem 1fr',
            },
            gridColumn: {
                '2-end': '2 / end',
            },
            gridColumnStart: {
                'social-col': 'social-col',
            },
            spacing: {
                'bio-mobile': '1rem',
                'bio' : '1.6rem'
            },
            width: {
                'avatar-mobile': '6em',
                'avatar': '9.6rem',
            },
            height: {
                'avatar-mobile': '6em',
                'avatar': '9.6rem',
            },
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
                }
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
