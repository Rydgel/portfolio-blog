import Script from 'next/script';
import { FC } from 'react';

const Umami: FC = () => {
    return (
        <Script
            async
            defer
            strategy="lazyOnload"
            data-website-id="3a4c9c13-471e-40d5-9066-40d0ed33f9c7"
            src="https://umami.jeromem.dev/umami.js"
        />
    );
};

export default Umami;
