import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { kebabeToPascal } from '@/lib/component';

import {
    AnalyticData,
    ComponentsAnalytics,
    CountriesAnalytics,
    RegistryAnalytics,
    Totals,
} from '../model/analytics';
import { AnalyticsCharts } from './AnalyticsCharts';
import { Badge } from '@/components/ui/badge';

type AnalyticsCardProps = {
    component: string;
    data: AnalyticData[];
    total?: number;
};

type AnalyticsComponentsProps = {
    analytics: {
        totals: Totals;
        analytics: RegistryAnalytics;
        countryAnalytics: CountriesAnalytics[];
        componentsAnalytics: ComponentsAnalytics;
    };
};

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
    component,
    data,
    total = 0,
}) => {
    return (
        <AccordionItem value={component}>
            <Card className="border-0 px-0 shadow-none">
                <AccordionTrigger className="cursor-pointer">
                    <CardHeader className="hover:un flex flex-row items-center px-0 text-lg">
                        {kebabeToPascal(component)}
                        <Badge>{total}</Badge>
                    </CardHeader>
                </AccordionTrigger>

                <AccordionContent>
                    <CardContent className="px-0">
                        <AnalyticsCharts data={data} />
                    </CardContent>
                </AccordionContent>
            </Card>
        </AccordionItem>
    );
};

export const AnalyticsComponents: React.FC<AnalyticsComponentsProps> = ({
    analytics,
}) => {
    if (!analytics || !analytics?.analytics) return null;

    console.log('analytics', analytics);

    const defaultValue = Object.keys(analytics.analytics)[0];

    return (
        <Accordion type="multiple" defaultValue={[defaultValue]}>
            {Object.entries(analytics.analytics).map(([component, data]) => (
                <AnalyticsCard
                    key={component}
                    component={component}
                    data={data}
                    total={analytics?.componentsAnalytics?.[component] ?? 0}
                />
            ))}
        </Accordion>
    );
};
