import React from 'react';
import { StatsCard } from '@/components/stats-card';
import { NotAvailableCard } from '@/components/ui/not-available-card';

import { type CountriesAnalytics } from '../model/analytics';
import { type Registry } from '@/modules/registry';

type CountriesStatsProps = {
    registry: Registry;
    countries: CountriesAnalytics[];
};

const normalizeCountryName = (name: string) => {
    if (!name?.length) return 'Unknown';

    return name;
};

export const CountriesStats: React.FC<CountriesStatsProps> = ({
    registry,
    countries,
}) => {
    return (
        <StatsCard title="Countries">
            {!registry.allowCountryAnalytics ? (
                <NotAvailableCard description="You haven’t granted permission to collect anonymous data for country analytics. If you want this, enable it in the registry settings." />
            ) : (
                <CountriesList countries={countries} />
            )}
        </StatsCard>
    );
};

const CountriesList: React.FC<{ countries: CountriesAnalytics[] }> = ({
    countries,
}) => {
    return (
        <div className="flex flex-col">
            {countries.map(({ country, code, eventsCount }) => (
                <div key={country} className="flex justify-between py-1">
                    <div className="flex items-center gap-x-2">
                        {code ? (
                            <img
                                className="w-5"
                                src={`https://flag.vercel.app/s/${code}.svg`}
                            />
                        ) : (
                            <div className="w-5" />
                        )}
                        <span className="font-medium">
                            {normalizeCountryName(country)}
                        </span>
                    </div>
                    <span className="font-bold">{eventsCount}</span>
                </div>
            ))}
        </div>
    );
};
