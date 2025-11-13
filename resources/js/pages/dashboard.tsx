import { Head, usePage } from '@inertiajs/react';

import { SharedData, type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';

import { EmptyRegistries, RegistriesList } from '@/modules/registry';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
];

export default function Dashboard() {
    const { props } = usePage<SharedData>();

    const registries = props.auth.registries;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            {!registries?.length ? (
                <EmptyRegistries />
            ) : (
                <RegistriesList registries={registries} />
            )}
        </AppLayout>
    );
}
