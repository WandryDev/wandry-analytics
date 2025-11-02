import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { SharedData, type BreadcrumbItem } from '@/types';
import { EmptyRegistries } from '@/modules/registry/ui/EmptyRegistries';
import { RegistriesList } from '@/modules/registry/ui/RegestiesList';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const { props } = usePage<SharedData>();

    const registries = props.auth.registries;

    console.log('props.auth', props.auth);

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
