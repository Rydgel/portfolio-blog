import { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
    page: string;
    children?: React.ReactNode;
};

class Header extends Component<HeaderProps> {
    isBold(comp: string): string {
        return this.props.page === comp ? 'font-bold' : '';
    }

    render(): JSX.Element {
        return (
            <header className="text-base mb-14">
                <div className="max-w-5xl flex flex-col lg:flex-row items-center text-center lg:text-left m-auto">
                    <div role="me" className="leading-none flex flex-grow items-center">
                        <Link href="/" className="p-1 block">
                            <Image src="/me.png" alt="Jérôme Mahuet" width={64} height={64} className="rounded-full" />
                        </Link>
                        <div>
                            <Link
                                href="/"
                                className="block relative typewriter px-2 py-1 font-bold text-xl text-gray-800 dark:text-gray-100"
                            >
                                {'./jerome{m}'}
                            </Link>

                            <div className="text-xl text-gray-400 pt-0 pr-0 pb-1 pl-2">Software engineer</div>
                        </div>
                    </div>
                    <nav className="select-none mt-4 lg:mt-0">
                        <ul className="text-xl text-gray-700 dark:text-gray-200">
                            <li className="inline-block">
                                <Link href="/" title="Home" className="px-3 py-1">
                                    <span className={this.isBold('index')}>Home</span>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/blog" title="Articles" className="px-3 py-1">
                                    <span className={this.isBold('articles')}>Articles</span>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/lab" title="Experiments" className="px-3 py-1">
                                    <span className={this.isBold('experiments')}>Experiments</span>
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link href="/about-me" title="About me" className="px-3 py-1">
                                    <span className={this.isBold('about')}>About me</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
