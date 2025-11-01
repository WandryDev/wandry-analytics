import ChartsDark from '@/assets/images/charts.webp';
import ChartsLight from '@/assets/images/charts-light.webp';

export default function SeoBlock() {
    return (
        <section className="py-16 md:py-32" id="about">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                    Shadcn Registry Download Statistics and Analytics
                </h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p>
                            Analyze Shadcn Registry component downloads in real
                            time. Discover which UI components are trending,
                            compare versions, and track long-term growth
                            patterns.
                        </p>
                        <p>
                            Our Shadcn analytics tool gives developers, teams,
                            and product owners the insights they need to stay
                            ahead of design and development trends.
                        </p>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:inset-x-0 md:-inset-y-36 md:mt-0 md:mask-l-from-35% md:mask-l-to-55%">
                        <div className="relative rounded-2xl border border-dotted border-border/50 p-2">
                            <img
                                src={ChartsDark}
                                className="hidden rounded-xl dark:block"
                                alt="payments illustration dark"
                                width={1207}
                                height={929}
                            />
                            <img
                                src={ChartsLight}
                                className="rounded-xl shadow dark:hidden"
                                alt="payments illustration light"
                                width={1207}
                                height={929}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
