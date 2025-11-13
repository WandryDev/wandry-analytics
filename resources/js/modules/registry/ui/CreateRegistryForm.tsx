import React from 'react';
import { Form } from '@wandry/inertia-form';

import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import TextField from '@/components/text-field';
import SubmitButton from '@/components/submit-button';

type CreateRegistryFormProps = {
    onSuccess?: () => void;
};

export const CreateRegistryForm: React.FC<CreateRegistryFormProps> = ({
    onSuccess,
}) => {
    return (
        <Form
            action={route('registry.store')}
            id="registry_create"
            options={{ onSuccess }}
            resetOnSuccess
        >
            <TextField
                tabIndex={1}
                name="name"
                label="Registry name"
                placeholder="@wandry-ui"
                description="The name can be arbitrary — it will be displayed in the menu."
            />
            <TextField
                tabIndex={2}
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
                <SubmitButton form="registry_create" tabIndex={3}>
                    Create
                </SubmitButton>
            </DialogFooter>
        </Form>
    );
};
