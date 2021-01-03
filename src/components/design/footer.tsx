import { Component } from 'react';

type FooterProps = {
    children?: React.ReactNode;
};

class Footer extends Component<FooterProps> {
    render(): JSX.Element {
        return (
            <footer className="text-base mt-4">
                <nav className="flex flex-wrap items-center justify-between bg-bblue-700 shadow">
                    <div className="order-1 inline-block mx-auto">
                        <a className="p-4 inline-block mt-0 text-white hover:bg-bblue-800" href="#">
                            Twitter
                        </a>
                        <a className="p-4 inline-block mt-0 text-white hover:bg-bblue-800" href="#">
                            Github
                        </a>
                        <a className="p-4 inline-block mt-0 text-white hover:bg-bblue-800" href="#">
                            RSS
                        </a>
                        <span className="p-4 inline-block mt-0 text-white">
                            Made with Nextjs in {new Date().getFullYear()}
                        </span>
                    </div>
                </nav>
            </footer>
        );
    }
}

export default Footer;
