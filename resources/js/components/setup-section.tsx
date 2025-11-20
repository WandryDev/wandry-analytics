import React from 'react';
import { Link } from '@inertiajs/react';

import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { SiteCodeBlock } from './setup-code-block';

import SetupChart from '@/assets/images/setup-chart.png';

export const SetupSection: React.FC = () => {
    return (
        <section
            className="bg-gray-50 py-16 dark:bg-transparent"
            id="getting-started"
        >
            <div className="mx-auto max-w-6xl px-6">
                <h4 className="mb-8 max-w-4xl text-4xl font-semibold text-balance lg:text-5xl">
                    Get Started in Minutes
                </h4>
                <p className="my-8 max-w-2xl text-xl text-muted-foreground">
                    Set up analytics for your custom shadcn registry in just a
                    few steps — no complicated configuration required.
                </p>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative mx-auto size-fit pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <span className="text-5xl font-semibold">
                                        1
                                    </span>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <Button
                                        size="sm"
                                        className="w-full"
                                        render={
                                            <Link href={route('register')}>
                                                <span>Create an account</span>
                                            </Link>
                                        }
                                    ></Button>
                                    <p className="text-muted-foreground">
                                        Sign up to access your dashboard and
                                        start tracking installations
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <span className="text-5xl font-semibold">
                                        2
                                    </span>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">
                                        Add your Registry
                                    </h2>
                                    <p className="text-muted-foreground">
                                        Fill in all the required information and
                                        confirm your consent to data collection,
                                        if you can.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <span className="text-5xl font-semibold">
                                        3
                                    </span>
                                </div>
                                <div className="relative z-10 mt-14 space-y-2 text-center">
                                    <p className="text-muted-foreground">
                                        Install SDK into your registry
                                    </p>
                                    <div className="rounded-md bg-neutral-500/9 p-2 font-semibold">
                                        npm install @wandry/analytics-sdk
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="pt-2">
                                <div className="relative z-10 flex w-full gap-x-6">
                                    <div className="relative flex aspect-square size-12 items-center justify-center rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        4
                                    </div>
                                    <div className="w-full">
                                        <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">
                                            Add Middleware Snippet
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Insert the tracking into your
                                            registry’s request flow.
                                        </p>
                                    </div>
                                </div>
                                <SiteCodeBlock token="********" />
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-24 items-center justify-center rounded-full border text-2xl before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        🎉
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">
                                            Enjoy the Insights
                                        </h2>
                                        <p className="text-muted-foreground">
                                            Your dashboard will start showing
                                            installation stats
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src={SetupChart}
                                    alt="Setup Chart"
                                    className="h-full w-full object-cover px-4"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
