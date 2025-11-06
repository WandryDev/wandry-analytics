import React from 'react';
import { StatsCard } from '@/components/stats-card';
import { CountriesAnalytics } from '../model/analytics';

type CountriesStatsProps = {
    countries: CountriesAnalytics[];
};

const normalizeCountryName = (name: string) => {
    if (!name?.length) return 'Unknown';

    return name;
};

export const CountriesStats: React.FC<CountriesStatsProps> = ({
    countries,
}) => {
    return (
        <StatsCard title="Countries">
            <div className="flex flex-col">
                {countries.map(({ country, code, eventsCount }) => (
                    <div key={country} className="flex justify-between py-1">
                        <div className="flex items-center gap-x-2">
                            {code && (
                                <img
                                    src={`https://flag.vercel.app/s/${code}.svg`}
                                />
                            )}
                            <span className="font-medium">
                                {normalizeCountryName(country)}
                            </span>
                        </div>
                        <span className="font-bold">{eventsCount}</span>
                    </div>
                ))}
            </div>
        </StatsCard>
    );
};
