import { FC } from 'react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-base mt-32 text-gray-400 dark:text-gray-600">
            <div className="max-w-5xl text-center m-auto">
                <p>Made in France in {currentYear} with NextJS, Typescript, Strapi, Tailwind etc.</p>
            </div>
        </footer>
    );
};

export default Footer;
