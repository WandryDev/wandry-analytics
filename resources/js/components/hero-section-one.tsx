import { useRef } from 'react';
import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

import { motion, useScroll, useTransform, Variants } from 'motion/react';

import { SiteNav } from './site-nav';
import { TextEffect } from './ui/text-effect';
import { AnimatedGroup } from './ui/animated-group';
import { BorderTrail } from './ui/border-trail';

import HeroImage from '@/assets/images/hero.png';

const itemVariants = {
    hidden: {
        opacity: 0,
        filter: 'blur(12px)',
        y: 12,
    },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 1.5,
        },
    },
} satisfies Variants;

export default function HeroSection() {
    return (
        <>
            <SiteNav />

            <main>
                <div
                    aria-hidden
                    className="absolute inset-0 isolate z-0 hidden opacity-50 contain-strict lg:block"
                >
                    <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                    <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-muted/50 dark:bg-background">
                    <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-32">
                        <div className="relative mx-auto max-w-5xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl"
                            >
                                Find out how developers use your registry
                            </TextEffect>

                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.2}
                                delay={0.5}
                                as="p"
                                className="mx-auto my-8 max-w-2xl text-xl text-muted-foreground"
                            >
                                Get complete insights into installations,
                                component popularity, and global usage — all in
                                one anonymous, privacy-friendly dashboard.
                            </TextEffect>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    item: itemVariants,
                                }}
                            >
                                <Button asChild size="lg">
                                    <Link href={route('register')}>
                                        <span className="btn-label">
                                            Start analytics for free
                                        </span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <HeroImageSection />
                </section>

                {/* After release */}
                {/* <section className="relative z-10 bg-muted/50 py-16 dark:bg-background">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">
                            Your favorite companies are our partners.
                        </h2>
                        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/column.svg"
                                alt="Column Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/laravel.svg"
                                alt="Laravel Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-7 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lilly.svg"
                                alt="Lilly Logo"
                                height="28"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                alt="Lemon Squeezy Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-6 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/openai.svg"
                                alt="OpenAI Logo"
                                height="24"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                                alt="Tailwind CSS Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/vercel.svg"
                                alt="Vercel Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/zapier.svg"
                                alt="Zapier Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    );
}

const HeroImageSection: React.FC = () => {
    const isMobile = useIsMobile();
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 0.5], [300, -300]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    if (isMobile) {
        return (
            <div
                ref={ref}
                className="relative z-9999 mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 ring-background md:mt-0 dark:inset-shadow-white/20"
            >
                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={200}
                />
                <img src={HeroImage} alt="" />
            </div>
        );
    }

    return (
        <motion.div ref={ref} style={{ y, scale }}>
            <AnimatedGroup
                variants={{
                    container: {
                        visible: {
                            transition: {
                                delayChildren: 1,
                            },
                        },
                    },
                    item: itemVariants,
                }}
                className="relative mt-8 -mr-56 overflow-hidden mask-b-from-55% px-2 sm:mt-12 sm:mr-0 md:mt-16"
            >
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20">
                    <BorderTrail
                        style={{
                            boxShadow:
                                '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                        }}
                        size={200}
                    />
                    <img src={HeroImage} alt="" />
                </div>
            </AnimatedGroup>
        </motion.div>
    );
};
