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
        <footer className="w-full px-6 py-12 sm:py-16">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-3xl bg-secondary/40 p-6 shadow-sm ring-1 ring-secondary lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center justify-between gap-6">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="flex size-fit items-center"
                    >
                        <AppLogo />
                    </Link>
                    <Link
                        href="https://x.com/kapish_dima"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-muted-foreground/20 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                        <svg
                            className="size-5"
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
                <nav className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="transition-colors hover:text-primary"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>
            <span className="mt-8 block text-center text-xs text-muted-foreground sm:text-sm">
                © {new Date().getFullYear()} Wandry Analytics, All rights
                reserved
            </span>
        </footer>
    );
}
