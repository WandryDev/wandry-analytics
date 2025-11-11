import { useState } from 'react';
import { PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useSidebar } from '@/components/ui/sidebar';

import { CreateRegistryForm } from './CreateRegistryForm';

type CreateRegistryModalProps = {
    insideSidebar?: boolean;
};

function CreateRegistryModal({
    insideSidebar = true,
}: CreateRegistryModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { open: sidebarOpened } = useSidebar();

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    className="cursor-pointer"
                    size={insideSidebar && !sidebarOpened ? 'icon' : 'default'}
                >
                    <PlusIcon />
                    {!insideSidebar || sidebarOpened
                        ? 'Create a new registry'
                        : ''}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]" tabIndex={-1}>
                <DialogHeader>
                    <DialogTitle>Create a new registry</DialogTitle>
                    <DialogDescription>
                        Fill in the details for the new registry.
                    </DialogDescription>
                </DialogHeader>
                <CreateRegistryForm onSuccess={() => setIsOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}

export default CreateRegistryModal;
