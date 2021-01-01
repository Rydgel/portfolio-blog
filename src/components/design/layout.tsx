import { Component } from 'react';
import Header from './header';

type LayoutProps = {
    children?: React.ReactNode;
};

class Layout extends Component<LayoutProps> {
    render(): JSX.Element {
        return (
            <div className="mx-auto my-0 max-w-5xl">
                <Header />
                <main className="p-4">{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;
