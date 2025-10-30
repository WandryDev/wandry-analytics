import SubmitButton from '@/components/submit-button';
import TextField from '@/components/text-field';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import registry from '@/routes/registry';
import { Form } from '@wandry/inertia-form';
import { useState } from 'react';

export function CreateRegistryModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>Create a new registry</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a new registry</DialogTitle>
                    <DialogDescription>
                        Fill in the details for the new registry.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...registry.store.form()}
                    id="registry_create"
                    options={{ onSuccess: () => setIsOpen(false) }}
                    resetOnSuccess
                >
                    <TextField
                        name="name"
                        label="Registry name"
                        placeholder="@wandry-ui"
                        description="The name can be arbitrary — it will be displayed in the menu."
                    />
                    <TextField
                        name="url"
                        label="Registry URL"
                        placeholder="https://wandry-ui.com"
                    />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <SubmitButton form="registry_create">
                            Create
                        </SubmitButton>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
