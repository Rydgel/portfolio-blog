import { Component } from 'react';

type LayoutProps = {
    children?: React.ReactNode;
};

class Layout extends Component<LayoutProps> {
    render(): JSX.Element {
        return <div>{this.props.children}</div>;
    }
}

export default Layout;
