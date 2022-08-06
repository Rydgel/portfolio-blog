import { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Toggle from '../theme/themeToggle';
import Image from 'next/image';
import ImageStrapi from '../../interfaces/image';
import urljoin from 'url-join';
import Config from '../../interfaces/config';

type LayoutProps = {
    page: string;
    config?: Config;
    headerImage?: ImageStrapi;
    children?: React.ReactNode;
};

class Layout extends Component<LayoutProps> {
    headerImage(): JSX.Element {
        if (this.props.headerImage && this.props.config) {
            const src = urljoin(this.props.config.strapi_url, this.props.headerImage.url);

            return (
                <figure className="mb-8 max-w-full lg:max-w-5xl mx-auto">
                    <Image
                        className="rounded-md dark:opacity-90"
                        src={src}
                        width={this.props.headerImage.width}
                        height={this.props.headerImage.height}
                        blurDataURL="URL"
                        placeholder="blur"
                    />
                </figure>
            );
        }
    }

    render(): JSX.Element {
        return (
            <>
                <div className="bg-white dark:bg-dark-bg dark:antialiased">
                    <div className="text-base text-gray-700 dark:text-gray-200 p-8 min-h-screen">
                        <Header page={this.props.page} />
                        {this.props.headerImage && this.headerImage()}
                        <div className="mx-auto my-0 max-w-3xl">
                            <main lang="en" className="p-4 lg:p-0">
                                {this.props.children}
                            </main>
                        </div>
                        <Footer />
                    </div>
                </div>
                <div className="fixed left-0 bottom-0">
                    <Toggle />
                </div>
            </>
        );
    }
}

export default Layout;
