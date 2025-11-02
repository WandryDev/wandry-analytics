import { Head, usePage } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { SharedData, type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';

import { RegistryAnalytics, Totals } from '@/modules/analytics/model/analytics';
import { RegistryStats } from '@/modules/analytics/ui/RegistryStats';
import { SetupRegistry } from '@/modules/registry/ui/SetupRegistry';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

type RegistryShowProps = {
    registry: any;
    analytics: {
        totals: Totals;
        analytics: RegistryAnalytics;
    };
};

export default function Show() {
    const page = usePage<SharedData & RegistryShowProps>();
    const registry = page.props.registry;

    console.log('page', page);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={registry.name} />
            {page.props.analytics ? (
                <RegistryStats />
            ) : (
                <SetupRegistry registry={registry} />
            )}
        </AppLayout>
    );
}
