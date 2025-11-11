import React, { useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import { Form } from '@wandry/inertia-form';

import { toast } from 'sonner';

import {
    FormSetupCodeBlock,
    SetupCodeBlock,
} from '@/components/setup-code-block';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import TextField from '@/components/text-field';
import SubmitButton from '@/components/submit-button';
import { token as registryUpdateToken } from '@/routes/registry/update';
import { router, usePage } from '@inertiajs/react';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';

type RegenerateTokenFormProps = {
    registryId: number;
};

type RegerateTokenModalProps = {
    registryId: number;
};

export const RegerateTokenModal: React.FC<RegerateTokenModalProps> = ({
    registryId,
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="destructive">
                    Regenerate token
                </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[65vw]">
                <DialogHeader>
                    <DialogTitle>Create a new token</DialogTitle>
                </DialogHeader>
                <RegenerateTokenForm registryId={registryId} />
            </DialogContent>
        </Dialog>
    );
};

const RegenerateTokenForm: React.FC<RegenerateTokenFormProps> = ({
    registryId,
}) => {
    const token =
        usePage<{ token: string }>().props.token ?? '*****************';

    const onRenegerate = () => {
        router.get(
            registryUpdateToken(registryId),
            {},
            {
                preserveState: true,
                only: ['token'],
                onSuccess: () =>
                    toast.success('Token regenerated successfully'),
                onError: () => toast.error('Failed to regenerate token'),
            },
        );
    };

    return (
        <div className="mt-4 w-[95%]">
            <Field>
                <FieldLabel>Your token</FieldLabel>
                <InputGroup>
                    <InputGroupInput readOnly value={token} />
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            size="sm"
                            variant="ghost"
                            type="button"
                            onClick={onRenegerate}
                        >
                            <RefreshCcw className="size-4" />
                            Regenerate
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
                <FieldDescription>
                    This is your registry token. Keep it secret.
                </FieldDescription>
            </Field>
            <div className="mt-6">
                <SetupCodeBlock token={token} />
            </div>
        </div>
    );
};
