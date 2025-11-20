import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Pricing() {
    return (
        <div className="relative py-16 md:py-32" id="pricing">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
                        Start managing your company smarter today
                    </h2>
                </div>
                <div className="mt-8 md:mt-20">
                    <div className="relative rounded-3xl border bg-card shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pr-12 md:pb-0">
                                <h3 className="text-2xl font-semibold">
                                    Free for Now — Early Access
                                </h3>
                                <p className="mt-2 text-lg">
                                    For your company of any size
                                </p>
                                <span className="mt-12 mb-6 inline-block text-6xl font-bold">
                                    <span className="text-4xl">$</span>0
                                </span>

                                <div className="flex justify-center">
                                    <Button
                                        size="lg"
                                        render={
                                            <Link href={route('login')}>
                                                Get started
                                            </Link>
                                        }
                                    ></Button>
                                </div>

                                <p className="mt-12 text-sm text-muted-foreground">
                                    Includes : Security, Unlimited Storage,
                                    Payment, Search engine, and all features
                                </p>
                            </div>
                            <div className="relative">
                                <ul role="list" className="space-y-4">
                                    {[
                                        'Component Insights',
                                        'Geographic Analytics',
                                        'Privacy-Friendly',
                                        'Multi-Registry Support',
                                        'No Hidden Limits',
                                        'Easy Setup',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <Check className="size-3" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    Team can be any size, and you can add or
                                    switch members as needed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
