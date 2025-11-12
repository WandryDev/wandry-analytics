import React from 'react';
import { StatsCard } from '@/components/stats-card';
import { kebabeToPascal } from '@/lib/component';

type ComponentsStatsProps = {
    components?: Record<string, number>;
};

export const ComponentsStats: React.FC<ComponentsStatsProps> = ({
    components = {},
}) => {
    return (
        <StatsCard title="Components">
            <div className="no-scrollbar flex flex-col">
                {Object.entries(components || {}).map(([component, count]) => (
                    <div key={component} className="flex justify-between py-1">
                        <span className="font-medium">
                            {kebabeToPascal(component)}
                        </span>
                        <span className="font-bold">{count}</span>
                    </div>
                ))}
            </div>
        </StatsCard>
    );
};
