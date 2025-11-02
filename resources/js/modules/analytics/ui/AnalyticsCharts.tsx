'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

import { AnalyticData, Totals } from '@/modules/analytics/model/analytics';
import { RegistryTotals } from '@/modules/analytics/ui/RegistryTotals';
import { useCallback, useEffect, useState } from 'react';

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'var(--chart-1)',
    },
    mobile: {
        label: 'Mobile',
        color: 'var(--chart-2)',
    },
} satisfies ChartConfig;

type AnalyticsChartsProps = {
    totals: Totals;
    component: string;
    data: AnalyticData[];
};

export function AnalyticsCharts({
    component,
    data,
    totals,
}: AnalyticsChartsProps) {
    const searchParams = new URLSearchParams(window.location.search);

    const [timeRange, setTimeRange] = useState<string>(
        searchParams.get('period') || 'week',
    );

    const xFormatter = useCallback(
        (value: string) => {
            const date = new Date(value);

            console.log(timeRange);

            if (timeRange === 'day') {
                return date.toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                });
            }

            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
            });
        },
        [timeRange],
    );

    useEffect(() => {
        setTimeRange(searchParams.get('period') || 'week');
    }, [searchParams.get('period')]);

    return (
        <Card className="border-0 px-0 shadow-none">
            <CardHeader className="px-0">
                <RegistryTotals data={totals} title={component} />
            </CardHeader>
            <CardContent className="px-0">
                <ChartContainer
                    className="max-h-[55vh] w-full"
                    config={chartConfig}
                >
                    <AreaChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={xFormatter}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="total"
                            type="linear"
                            fill="var(--color-mobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
