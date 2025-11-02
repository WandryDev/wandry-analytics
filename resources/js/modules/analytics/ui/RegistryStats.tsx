import React from 'react';
import { usePage } from '@inertiajs/react';

import { RegistryAnalytics, Totals } from '../model/analytics';
import { SharedData } from '@/types';
import { PeriodFilter } from './PeriodFilter';
import { RegistryTotals } from './RegistryTotals';
import { AnalyticsCharts } from './AnalyticsCharts';
import { RegerateTokenModal } from './RegerateTokenModal';

type RegistryAnalyticsProps = {
    registry: any;
    analytics: {
        totals: Totals;
        analytics: RegistryAnalytics;
    };
};

export const RegistryStats: React.FC = () => {
    const page = usePage<SharedData & RegistryAnalyticsProps>();
    const registry = page.props.registry;
    const registryTotals = page.props.analytics?.totals ?? {
        days: 0,
        views: 0,
        visitors: 0,
    };

    return (
        <div className="space-y-4 px-6 py-10">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{registry.name}</h1>
                <div className="flex items-center gap-x-2">
                    <PeriodFilter />
                    <RegerateTokenModal registryId={registry.id} />
                </div>
            </div>
            <RegistryTotals data={registryTotals} />
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
