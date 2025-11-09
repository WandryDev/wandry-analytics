import React from 'react';
import { usePage } from '@inertiajs/react';

import {
    ComponentsAnalytics,
    CountriesAnalytics,
    RegistryAnalytics,
    Totals,
} from '../model/analytics';
import { SharedData } from '@/types';
import { PeriodFilter } from './PeriodFilter';
import { RegistryTotals } from './RegistryTotals';
import { AnalyticsCharts } from './AnalyticsCharts';
import { RegerateTokenModal } from './RegerateTokenModal';
import { CountriesStats } from './CountriesStats';
import { ComponentsStats } from './ComponentsStats';

type RegistryAnalyticsProps = {
    registry: any;
    analytics: {
        totals: Totals;
        analytics: RegistryAnalytics;
        countryAnalytics: CountriesAnalytics[];
        componentsAnalytics: ComponentsAnalytics;
    };
};

export const RegistryStats: React.FC = () => {
    const page = usePage<SharedData & RegistryAnalyticsProps>();
    const registry = page.props.registry;
    const registryTotals = page.props.analytics?.totals ?? {
        total: 0,
        days: 0,
        views: 0,
        visitors: 0,
    };

    const countryAnalytics = page.props.analytics.countryAnalytics;
    const componentsAnalytics = page.props.analytics.componentsAnalytics;

    return (
        <div className="space-y-6 px-4 py-8 sm:px-6 sm:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h1 className="text-3xl font-bold text-balance sm:text-4xl">
                    {registry.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <PeriodFilter />
                    <RegerateTokenModal registryId={registry.id} />
                </div>
            </div>
            <RegistryTotals data={registryTotals} />
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <CountriesStats countries={countryAnalytics} />
                <ComponentsStats components={componentsAnalytics} />
            </div>
            {page.props.analytics &&
                Object.entries(page.props.analytics?.analytics).map(
                    ([component, data]) => (
                        <AnalyticsCharts
                            key={component}
                            component={component}
                            data={data}
                            totals={registryTotals}
                        />
                    ),
                )}
        </div>
    );
};
