import React from 'react';
import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';

import { Registry } from '@/modules/registry/models/registry';
import { EditRegistryForm } from '@/modules/registry';

type RegistryEditPageProps = {
    registry: Registry;
};

const RegistryEditPage: React.FC<RegistryEditPageProps> = ({ registry }) => {
    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Back', href: route('registry.show', registry.id) },
                { title: 'Edit registry', href: '/' },
            ]}
        >
            <Head title={registry.name} />
            <EditRegistryForm defaultValue={registry} />
        </AppLayout>
    );
};

export default RegistryEditPage;
