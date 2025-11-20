import Features from '@/components/features';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section-one';
import Pricing from '@/components/pricing';
import SeoBlock from '@/components/seo-block';
import { SetupSection } from '@/components/setup-section';
import { UserStory } from '@/components/ui/user-story';

import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Wandry Analytics - Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <HeroSection />
            <UserStory />
            <Features />
            <SetupSection />
            <Pricing />
            <FooterSection />
        </>
    );
}
