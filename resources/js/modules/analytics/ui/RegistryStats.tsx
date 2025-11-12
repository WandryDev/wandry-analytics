import React from 'react';
import { Link, usePage } from '@inertiajs/react';

import { SharedData } from '@/types';
import { edit as registryEdit } from '@/routes/registry';

import { Registry } from '@/modules/registry';
import { Button } from '@/components/ui/button';

import {
    ComponentsAnalytics,
    CountriesAnalytics,
    RegistryAnalytics,
    Totals,
} from '../model/analytics';
import { PeriodFilter } from './PeriodFilter';
import { RegistryTotals } from './RegistryTotals';
import { CountriesStats } from './CountriesStats';
import { ComponentsStats } from './ComponentsStats';
import { AnalyticsComponents } from './AnalyticsCard';

type RegistryAnalyticsProps = {
    registry: Registry;
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
    const registryTotals = page.props?.analytics?.totals ?? {
        total: 0,
        days: 0,
        views: 0,
        visitors: 0,
    };

    const countryAnalytics = page.props.analytics?.countryAnalytics ?? [];
    const componentsAnalytics = page.props.analytics?.componentsAnalytics ?? {};

    return (
        <div className="space-y-4 px-6 py-10">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{registry.name}</h1>
                <div className="flex items-center gap-x-2">
                    <PeriodFilter />
                    <Button asChild>
                        <Link href={registryEdit.url(registry.id)}>
                            Edit registry
                        </Link>
                    </Button>
                </div>
            </div>
            <RegistryTotals data={registryTotals} />
            <div className="mt-4 grid grid-cols-2 gap-x-4">
                <CountriesStats
                    registry={registry}
                    countries={countryAnalytics}
                />
                <ComponentsStats components={componentsAnalytics} />
            </div>
            <AnalyticsComponents analytics={page.props.analytics} />
        </div>
    );
};

//
