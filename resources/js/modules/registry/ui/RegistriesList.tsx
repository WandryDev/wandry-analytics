import React from 'react';
import { router } from '@inertiajs/react';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type RegistriesListProps = {
    registries?: any[];
};

const RegistriesList: React.FC<RegistriesListProps> = ({ registries }) => {
    return (
        <div className="mt-8 px-4">
            <h3 className="text-2xl font-medium">Your registries</h3>
            <div className="grid grid-cols-3 gap-4 pt-4">
                {registries?.map((registry) => (
                    <Card
                        key={registry.id}
                        className="cursor-pointer"
                        onClick={() => router.visit(`/registry/${registry.id}`)}
                    >
                        <CardHeader>
                            <CardTitle>{registry.name}</CardTitle>
                            <CardDescription>{registry.url}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RegistriesList;
