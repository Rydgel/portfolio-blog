import { Component } from 'react';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
    children?: React.ReactNode;
};

class Layout extends Component<LayoutProps> {
    render(): JSX.Element {
        return (
            <div className="text-base">
                <Header />
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
