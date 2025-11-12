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
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <HeroSection />
            <UserStory />
            <Features />
            <SetupSection />
            <Pricing />
            <FooterSection />
            {/* 
            <SeoBlock />
            
            <FooterSection /> */}
        </>
    );
}
