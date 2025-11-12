import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

import AppLogo from './app-logo';
import { Button } from '@/components/ui/button';
import { dashboard, login, register } from '@/routes';

const menuItems = [
    { name: 'Features', href: '#feature' },
    { name: 'Pricing', href: '#pricing' },
    {
        name: 'Getting started',
        href: '#getting-started',
    },
];

export const SiteNav: React.FC = () => {
    const [menuState, setMenuState] = useState(false);
    const { auth } = usePage<any>().props;

    const onNavItemClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuState(false);
    };

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="relative z-20 w-full border-b border-dashed bg-white backdrop-blur dark:bg-zinc-950/50 lg:dark:bg-transparent"
            >
                <div className="m-auto max-w-5xl px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2"
                            >
                                <AppLogo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={
                                    menuState == true
                                        ? 'Close Menu'
                                        : 'Open Menu'
                                }
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                                <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                            </button>
                        </div>

                        <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:pr-4">
                                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={() =>
                                                    onNavItemClick(
                                                        item.href.substring(1),
                                                    )
                                                }
                                                className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                {auth?.user ? (
                                    <Button asChild size="sm">
                                        <Link href={dashboard()}>
                                            <span>Go to dashboard</span>
                                        </Link>
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                        >
                                            <Link href={login()}>
                                                <span>Login</span>
                                            </Link>
                                        </Button>
                                        <Button asChild size="sm">
                                            <Link href={register()}>
                                                <span>Sign Up</span>
                                            </Link>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
