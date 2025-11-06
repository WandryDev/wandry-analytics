import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/stats-card';

type CountriesStatsProps = {
    countries: Record<string, number>;
};

export const CountriesStats: React.FC<CountriesStatsProps> = ({
    countries,
}) => {
    return (
        <StatsCard title="Countries">
            <div className="flex flex-col">
                {Object.entries(countries)
                    .filter(([country]) => Boolean(country))
                    .map(([country, count]) => (
                        <div
                            key={country}
                            className="flex justify-between py-1"
                        >
                            <div className="flex items-center gap-x-2">
                                <img src="https://flag.vercel.app/s/UA.svg" />
                                <span>{country}</span>
                            </div>
                            <span className="font-bold">{count}</span>
                        </div>
                    ))}
            </div>
        </StatsCard>
    );
};
