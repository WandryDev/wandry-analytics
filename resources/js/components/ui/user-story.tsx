import React from 'react';
import { motion } from 'motion/react';
import { ChartNoAxesCombined } from 'lucide-react';

export const UserStory: React.FC = () => {
    return (
        <section
            className="mt-10 bg-zinc-50 pb-12 md:-mt-48 md:pt-32 dark:bg-transparent"
            id="feature"
        >
            <div className="@container relative mx-auto max-w-6xl items-center justify-between px-6">
                <motion.h2
                    className="text-3xl font-semibold text-balance md:text-4xl lg:text-5xl"
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ margin: '-50px', once: true }}
                    transition={{ duration: 0.8 }}
                >
                    You built your Registry... But have no Idea how People
                    actually use it
                </motion.h2>
                <motion.p
                    className="my-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ margin: '-80px', once: true }}
                    transition={{ duration: 0.8 }}
                >
                    When you publish a custom shadcn registry, you can’t tell
                    which components are popular, how often they’re installed,
                    or where your users are coming from. Without this data, it’s
                    hard to make improvements, plan updates, or understand your
                    impact.
                </motion.p>
                <motion.div
                    className="absolute top-30 right-10"
                    initial={{ opacity: 0, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 0.2, filter: 'blur(0px)' }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.p
                        animate={{
                            scale: [1, 0.95, 1],
                            transition: {
                                duration: 10,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            },
                        }}
                    >
                        <ChartNoAxesCombined className="size-60 font-semibold text-muted-foreground" />
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
