import { FC } from 'react';
import Head from 'next/head';

const Umami: FC = () => {
    return (
        <Head>
            <script
                async
                defer
                data-website-id="3a4c9c13-471e-40d5-9066-40d0ed33f9c7"
                src="https://umami.jeromem.dev/umami.js"
            ></script>
        </Head>
    );
};

export default Umami;
