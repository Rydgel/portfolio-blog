// global css, useful for loading fonts
import '../../styles/global.css';

import Umami from '@components/analytics/umami';
import { ThemeProvider } from '@components/theme/themeContext';
import { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // we skip theme detection for SSR
    return !isMounted ? (
        <Component {...pageProps} />
    ) : (
        <ThemeProvider>
            <Umami />
            {isMounted && <Component {...pageProps} />}
        </ThemeProvider>
    );
};

export default App;
