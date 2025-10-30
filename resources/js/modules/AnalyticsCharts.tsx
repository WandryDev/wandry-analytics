'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import NumberFlow, { continuous } from '@number-flow/react';
import { useEffect, useState } from 'react';

export const description = 'An area chart with a legend';

const chartData = [
    {
        month: 'January',
        'text-field': 186,
        'select-field': 80,
        'checkbox-field': 80,
        'radio-field': 50,
    },
    {
        month: 'February',
        'text-field': 305,
        'select-field': 200,
        'checkbox-field': 100,
        'radio-field': 70,
    },
    {
        month: 'March',
        'text-field': 237,
        'select-field': 120,
        'checkbox-field': 60,
        'radio-field': 40,
    },
    {
        month: 'April',
        'text-field': 73,
        'select-field': 190,
        'checkbox-field': 30,
        'radio-field': 20,
    },
    {
        month: 'May',
        'text-field': 209,
        'select-field': 130,
        'checkbox-field': 70,
        'radio-field': 60,
    },
    {
        month: 'June',
        'text-field': 214,
        'select-field': 140,
        'checkbox-field': 90,
        'radio-field': 80,
    },
];

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

export function AnalyticsCharts() {
    const [period, setPeriod] = useState({ daily: 0, monthly: 0, weekly: 0 });

    useEffect(() => {
        setPeriod({ daily: 100020, monthly: 12031, weekly: 230 });
    }, []);

    return (
        <Card className="border-0 px-0 shadow-none">
            <CardHeader className="px-0">
                <CardHeader className="flex-row items-center justify-between px-0">
                    <CardTitle className="mb-4 text-xl">TextField</CardTitle>
                </CardHeader>
                <CardDescription className="flex">
                    <Card className="w-full rounded-md rounded-r-none py-4 shadow-none">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Total installs
                            </CardDescription>
                            <CardTitle className="text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={period.daily}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                    <Card className="w-full rounded-none border-x-0 py-4 shadow-none">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Monthly installs
                            </CardDescription>
                            <CardTitle className="text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={period.monthly}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                    <Card className="w-full rounded-md rounded-l-none py-4 shadow-none">
                        <CardContent>
                            <CardDescription className="mb-2">
                                Weekly installs
                            </CardDescription>
                            <CardTitle className="text-3xl font-semibold text-foreground">
                                <NumberFlow
                                    willChange
                                    plugins={[continuous]}
                                    value={period.weekly}
                                />
                            </CardTitle>
                        </CardContent>
                    </Card>
                </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
                <ChartContainer
                    className="max-h-[55vh] w-full"
                    config={chartConfig}
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="text-field"
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
