import { Component } from 'react';
import Header from './header';
import Footer from './footer';

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
                    <img className="w-full rounded-md" src={this.props.headerImage} />
                </figure>
            );
        }
    }

    render(): JSX.Element {
        return (
            <div className="text-base text-gray-700">
                <Header page={this.props.page} />
                {this.headerImage()}
                <div className="mx-auto my-0 max-w-3xl">
                    <main lang="en" className="p-4 lg:p-0">
                        {this.props.children}
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;
