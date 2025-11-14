import React from 'react';
import { StatsCard } from '@/components/stats-card';
import { NotAvailableCard } from '@/components/ui/not-available-card';

import { type CountriesAnalytics } from '../model/analytics';
import { type Registry } from '@/modules/registry';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

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
            {!registry.country_stats ? (
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
        <div className="no-scrollbar flex flex-col">
            {countries.map(({ country, code, eventsCount }) => (
                <div key={country} className="flex justify-between py-1">
                    <div className="flex items-center gap-x-2">
                        {code ? (
                            <img
                                className="w-5"
                                src={`https://flag.vercel.app/s/${code}.svg`}
                            />
                        ) : (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className="w-5">
                                        <Info size="16" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>
                                        We couldn’t determine your country, or
                                        you had location data collection and
                                        storage disabled.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
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
