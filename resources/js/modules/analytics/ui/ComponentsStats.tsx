import React from 'react';
import { StatsCard } from '@/components/stats-card';
import { Clock2 } from 'lucide-react';

export const ComponentsStats: React.FC = () => {
    return (
        <StatsCard title="Components">
            <div className="flex h-full flex-1 flex-col items-center justify-center">
                <Clock2 className="opacity-30" />
                <span className="text-sm font-medium opacity-30">Soon</span>
            </div>
        </StatsCard>
    );
};
