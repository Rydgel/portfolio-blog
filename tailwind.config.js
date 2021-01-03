module.exports = {
    important: true,
    purge: {
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    },
    theme: {
        extend: {
            colors: {
                "bblue": {
                    "100": "#f0faff",
                    "200": "#c7ecff",
                    "300": "#99dfff",
                    "400": "#70d4ff",
                    "500": "#42caff",
                    "600": "#00b3ff",
                    "700": "#0081bd",
                    "800": "#004e75",
                    "900": "#002133"
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
