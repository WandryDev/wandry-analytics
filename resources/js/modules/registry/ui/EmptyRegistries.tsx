import React from 'react';
import { Folder } from 'lucide-react';

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';

import CreateRegistryModal from './CreateRegistryModal';

const EmptyRegistries: React.FC = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Folder />
                </EmptyMedia>
                <EmptyTitle>No registries</EmptyTitle>
                <EmptyDescription>
                    You need to create a registry
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <CreateRegistryModal insideSidebar={false} />
            </EmptyContent>
        </Empty>
    );
};

export default EmptyRegistries;
