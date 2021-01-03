import { Component } from 'react';

type HeaderProps = {
    children?: React.ReactNode;
};

class Header extends Component<HeaderProps> {
    handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        const dropdowns = document.querySelectorAll('.navbar-menu');
        for (let j = 0; j < dropdowns.length; j++) {
            dropdowns[j].classList.toggle('hidden');
        }
    }

    render(): JSX.Element {
        return (
            <header className="text-base">
                <nav className="flex flex-wrap items-center justify-between bg-bblue-700 shadow">
                    <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                        <a className="block text-xl text-white font-bold font-heading p-4 lg:p-0 typewriter" href="#">
                            {'./jerome{m}'}
                        </a>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={this.handleClick}
                            className="navbar-burger flex items-center py-2 px-3 text-white rounded border border-white mr-3"
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
                        <a
                            className="block p-1 lg:p-4 lg:inline-block mt-4 lg:mt-0 text-white hover:bg-bblue-800"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="block p-1 lg:p-4 lg:inline-block mt-4 lg:mt-0 text-white hover:bg-bblue-800"
                            href="#"
                        >
                            Articles
                        </a>
                        <a
                            className="block p-1 lg:p-4 lg:inline-block mt-4 lg:mt-0 text-white hover:bg-bblue-800"
                            href="#"
                        >
                            Projects
                        </a>
                    </div>
                    <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
                        <a
                            className="block p-1 lg:p-4 lg:inline-block mt-4 lg:mt-0 text-white hover:bg-bblue-800"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="block p-1 lg:p-4 lg:inline-block mt-4 lg:mt-0 text-white hover:bg-bblue-800"
                            href="#"
                        >
                            Github
                        </a>
                        <a
                            className="block p-1 lg:p-4 lg:inline-block mt-4 lg:mt-0 text-white hover:bg-bblue-800"
                            href="#"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
