import { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Toggle from '../theme/themeToggle';

type LayoutProps = {
    page: string;
    headerImage?: string;
    children?: React.ReactNode;
};

class Layout extends Component<LayoutProps> {
    headerImage(): JSX.Element {
        if (this.props.headerImage) {
            return (
                <figure className="mb-8">
                    <img
                        className="max-w-full lg:max-w-5xl rounded-md mx-auto dark:opacity-90"
                        src={this.props.headerImage}
                    />
                </figure>
            );
        }
    }

    render(): JSX.Element {
        return (
            <>
                <div className="bg-white dark:bg-black">
                    <div className="text-base text-gray-700 dark:text-gray-200 p-8 min-h-screen">
                        <Header page={this.props.page} />
                        {this.headerImage()}
                        <div className="mx-auto my-0 max-w-3xl">
                            <main lang="en" className="p-4 lg:p-0">
                                {this.props.children}
                            </main>
                        </div>
                        <Footer />
                    </div>
                </div>
                <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                    <Toggle />
                </div>
            </>
        );
    }
}

export default Layout;
