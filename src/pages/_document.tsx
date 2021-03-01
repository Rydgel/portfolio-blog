import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

function setInitialColorMode() {
    function getInitialColorMode() {
        const preference = window.localStorage.getItem('theme');
        let hasPreference = typeof preference === 'string';

        /**
         * If the user has explicitly chosen light or dark,
         * use it. Otherwise, this value will be null.
         */
        if (hasPreference) {
            return preference;
        }

        // If there is no saved preference, use a media query
        const mediaQuery = '(prefers-color-scheme: dark)';
        const mql = window.matchMedia(mediaQuery);

        hasPreference = typeof mql.matches === 'boolean';
        if (hasPreference) {
            return mql.matches ? 'dark' : 'light';
        }

        // default to 'light'.
        return 'light';
    }

    const rawTheme = getInitialColorMode();

    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);
}

// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: blockingSetInitialColorMode,
                        }}
                    ></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
