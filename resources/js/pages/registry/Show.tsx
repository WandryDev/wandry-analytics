import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { AnalyticsCharts } from '@/modules/AnalyticsCharts';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import NumberFlow, { continuous } from '@number-flow/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Show() {
    const page = usePage<any>();
    const registry = page.props.registry;

    const [period, setPeriod] = useState({ daily: 0, monthly: 0, weekly: 0 });

    useEffect(() => {
        setPeriod({ daily: 100020, monthly: 12031, weekly: 230 });
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={registry.name} />

            <div className="space-y-4 px-6 py-10">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">{registry.name}</h1>
                        <Select defaultValue="daily">
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a period" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="daily">24 hours</SelectItem>
                                <SelectItem value="weeky">7 days</SelectItem>
                                <SelectItem value="monthly">30 days</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <CardTitle className="mt-6 mb-3 text-xl">
                        Total registry installations
                    </CardTitle>
                    <CardDescription className="mt-0 flex">
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
                </div>
                <AnalyticsCharts />
                <AnalyticsCharts />
                <AnalyticsCharts />
            </div>
        </AppLayout>
    );
}
