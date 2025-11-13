import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import FeatureCountries from '@/assets/images/features/countries.png';
import FeatureComponent from '@/assets/images/features/components.png';
import FeaturePrivacy from '@/assets/images/features/privacy.png';
import FeatureRegistries from '@/assets/images/features/registries.png';

import ComponentsChart from '@/assets/images/features/components-chart.png';
import CountriesChart from '@/assets/images/features/countries-chart.png';
import FeaturePrivacy2 from '@/assets/images/features/privacy-2.png';
import { Button } from './ui/button';
import { Link } from '@inertiajs/react';

type Feature = {
    heading: string;
    description: string;
    image: string;
    chart?: string;
    hasCTA?: boolean;
};

const features: Feature[] = [
    {
        heading: 'Component Insights',
        description: 'View installs per component or block',
        image: FeatureComponent,
        chart: ComponentsChart,
    },
    {
        heading: 'Geographic Analytics',
        description: 'Track usage by country',
        image: FeatureCountries,
        chart: CountriesChart,
    },
    {
        heading: 'Privacy-Friendly',
        description: '100% anonymous data collection',
        image: FeaturePrivacy,
        chart: FeaturePrivacy2,
    },
    {
        heading: 'Multi-Registry Support',
        description: 'Manage multiple registries in one dashboard',
        image: FeatureRegistries,
        hasCTA: true,
    },
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prevFeature) => {
                const currentIndex = features.findIndex(
                    (feature) => feature.heading === prevFeature.heading,
                );
                const nextIndex = (currentIndex + 1) % features.length;
                return features[nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-zinc-50 dark:bg-transparent" id="feature">
            <div className="@container mx-auto max-w-6xl px-6">
                <motion.h2
                    className="text-3xl font-semibold text-balance md:max-w-4xl md:text-4xl lg:text-5xl"
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ margin: '-50px', once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Meet the analytics tool made for YOUR Registry
                </motion.h2>
                <motion.p
                    className="my-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ margin: '-80px', once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Our app automatically collects and visualizes installation
                    statistics from your registry. See how many installations
                    your components get, which ones are most loved, and from
                    which countries developers are installing them. All data is
                    completely anonymous — no personal info, ever.
                </motion.p>

                <div className="grid-col-1 grid h-auto md:h-[80vh] md:grid-cols-2 lg:mt-20">
                    <div className="flex flex-col">
                        {features.map((feature, index) => (
                            <div
                                data-active={
                                    activeFeature.heading === feature.heading
                                }
                                key={index}
                                className="relative z-1 flex cursor-pointer flex-col gap-y-1 py-7 transition-all duration-300 hover:translate-x-8"
                                onClick={() => setActiveFeature(feature)}
                            >
                                <div
                                    data-active={
                                        activeFeature.heading ===
                                        feature.heading
                                    }
                                    className="absolute top-0 -left-8 -z-1 h-full w-full rounded-xl bg-neutral-900 opacity-0 transition-all duration-300 data-[active=true]:opacity-20"
                                ></div>
                                <h4 className="text-3xl font-semibold text-balance lg:text-3xl">
                                    {feature.heading}
                                </h4>
                                <p className="text-md text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                        <Button asChild size="lg" className="mt-10 w-max">
                            <Link href={route('register')}>
                                <span className="btn-label">
                                    Start collect statistics
                                </span>
                            </Link>
                        </Button>
                    </div>
                    <div className="hidden overflow-hidden rounded-md md:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature.heading}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img src={activeFeature.image} alt="" />
                            </motion.div>
                        </AnimatePresence>
                        {activeFeature.chart && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className="px-2.5 pt-10"
                                    key={activeFeature.heading}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={activeFeature.chart} alt="" />
                                </motion.div>
                            </AnimatePresence>
                        )}
                        {activeFeature.hasCTA && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className="px-15 pt-10"
                                    key={activeFeature.heading}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    <Button asChild size="lg">
                                        <Link href={route('register')}>
                                            <span className="btn-label">
                                                Add your Registry now
                                            </span>
                                        </Link>
                                    </Button>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
