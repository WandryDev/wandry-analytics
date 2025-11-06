'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useCallback, useEffect, useState } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

import { AnalyticData, Totals } from '@/modules/analytics/model/analytics';
import { RegistryTotals } from '@/modules/analytics/ui/RegistryTotals';
import { kebabeToPascal } from '@/lib/component';
import {
    fillDailyData,
    fillMonthlyData,
    fillWeeklyData,
    xFormatter,
} from '@/lib/analytics';

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

    const prepareDate = useCallback(() => {
        if (timeRange === 'week') {
            return fillWeeklyData(data);
        }

        if (timeRange === 'month') {
            return fillMonthlyData(data);
        }

        if (timeRange === 'day') {
            return fillDailyData(data);
        }
    }, [timeRange, data]);

    const xFormatterFn = useCallback(
        (value: string) => xFormatter(value, timeRange),
        [timeRange],
    );

    useEffect(() => {
        setTimeRange(searchParams.get('period') || 'week');
    }, [searchParams.get('period')]);

    return (
        <Card className="border-0 px-0 shadow-none">
            <CardHeader className="px-0">
                <RegistryTotals
                    data={totals}
                    title={kebabeToPascal(component)}
                    hasCards={false}
                />
            </CardHeader>
            <CardContent className="px-0">
                <ChartContainer
                    className="max-h-[40vh] w-full"
                    config={chartConfig}
                >
                    <AreaChart
                        accessibilityLayer
                        data={prepareDate()}
                        margin={{
                            top: 20,
                            left: 0,
                            right: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <YAxis
                            domain={[
                                0,
                                (dataMax: any) => Math.ceil(dataMax * 1.1),
                            ]}
                            allowDecimals={false}
                            axisLine={false} // убрать вертикальную ось
                            tickLine={false} // убрать маленькие черточки
                            tick={{ fill: '#9ca3af', fontSize: 12 }} // приглушённый цвет (серый)
                            width={30}
                        />
                        <XAxis
                            interval={3}
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={xFormatterFn}
                        />
                        <ChartTooltip
                            cursor={{
                                strokeDasharray: '10 10',
                                stroke: '#8884d8',
                            }}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            isAnimationActive={false}
                            dataKey="total"
                            type="linear"
                            fill="var(--color-mobile)"
                            fillOpacity={0.2}
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
