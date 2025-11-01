import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';

const links = [
    {
        title: 'Features',
        href: '#feature',
    },
    {
        title: 'Pricing',
        href: '#pricing',
    },
    {
        title: 'About',
        href: '#about',
    },
];

export default function FooterSection() {
    return (
        <footer className="flex w-full flex-col px-6 py-16">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="go home"
                    className="flex size-fit items-center"
                >
                    <AppLogo />
                </Link>
                <div className="flex items-center justify-between gap-x-6">
                    <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="block text-muted-foreground duration-150 hover:text-primary"
                            >
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="https://x.com/kapish_dima"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X/Twitter"
                            className="block text-muted-foreground hover:text-primary"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <span className="block text-left text-sm text-muted-foreground">
                © {new Date().getFullYear()} Wandry Analytics, All rights
                reserved
            </span>
        </footer>
    );
}
