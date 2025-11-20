import { Head, usePage } from '@inertiajs/react';
import { SharedData, type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';

import { RegistryAnalytics, Totals } from '@/modules/analytics/model/analytics';
import { RegistryStats } from '@/modules/analytics/ui/RegistryStats';
import { SetupRegistry } from '@/modules/registry/ui/SetupRegistry';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
];

type RegistryShowProps = {
    token: string;
    registry: any;
    analytics: {
        totals: Totals;
        analytics: RegistryAnalytics;
    };
};

export default function Show() {
    const page = usePage<SharedData & RegistryShowProps>();
    const registry = page.props.registry;
    const token = page.props.token;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={registry.name} />
            <SetupRegistry registry={registry} token={token} />
            {/* <RegistryStats /> */}
            {/* {!page.props.token ? (
                <RegistryStats />
            ) : (
                <SetupRegistry registry={registry} token={token} />
            )} */}
        </AppLayout>
    );
}
