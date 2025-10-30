import AppLayout from '@/layouts/app-layout';
import { AnalyticsCharts } from '@/modules/AnalyticsCharts';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="space-y-10 px-6 py-10">
                <AnalyticsCharts />
                <AnalyticsCharts />
                <AnalyticsCharts />
            </div>
        </AppLayout>
    );
}
