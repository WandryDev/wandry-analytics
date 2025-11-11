import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useCallback, useEffect, useState } from 'react';

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

import { AnalyticData } from '@/modules/analytics/model/analytics';
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
    data: AnalyticData[];
};

export function AnalyticsCharts({ data }: AnalyticsChartsProps) {
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
        <ChartContainer className="max-h-[40vh] w-full" config={chartConfig}>
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
                    domain={[0, (dataMax: any) => Math.ceil(dataMax * 1.1)]}
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
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
                    dataKey="total"
                    type="linear"
                    fill="var(--color-mobile)"
                    fillOpacity={0.15}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    );
}
