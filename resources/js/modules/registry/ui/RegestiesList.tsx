import React from 'react';
import { router } from '@inertiajs/react';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RegistriesListProps = {
    registries?: any[];
};

export const RegistriesList: React.FC<RegistriesListProps> = ({
    registries,
}) => {
    return (
        <div className="my-8 w-full px-4 sm:px-6">
            <h3 className="text-2xl font-medium text-balance">
                Your registries
            </h3>
            <div className="grid min-w-0 gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-3">
                {registries?.map((registry) => (
                    <Card
                        key={registry.id}
                        className="h-full min-w-0 cursor-pointer transition-colors hover:border-primary/40"
                        onClick={() => router.visit(`/registry/${registry.id}`)}
                    >
                        <CardHeader className="space-y-2">
                            <CardTitle>{registry.name}</CardTitle>
                            <CardDescription
                                className="truncate text-sm text-muted-foreground"
                                title={registry.url}
                            >
                                {registry.url}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};
