import React, { useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';
import { Spinner } from '@/components/ui/spinner';
import { router } from '@inertiajs/react';
import { SetupCodeBlock } from '@/components/setup-code-block';

type RegenerateTokenFormProps = {
    registryId: number;
    onSuccess: () => void;
};

type RegerateTokenModalProps = {
    registryId: number;
};

export const RegerateTokenModal: React.FC<RegerateTokenModalProps> = ({
    registryId,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">Regenerate token</Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[65vw]">
                <DialogHeader>
                    <DialogTitle>Create a new token</DialogTitle>
                    <DialogDescription>
                        Fill in the details for the new registry.
                    </DialogDescription>
                </DialogHeader>
                <RegenerateTokenForm
                    registryId={registryId}
                    onSuccess={() => setOpen(false)}
                />
            </DialogContent>
        </Dialog>
    );
};

const RegenerateTokenForm: React.FC<RegenerateTokenFormProps> = ({
    registryId,
    onSuccess,
}) => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('******************');

    // TODO: PEREPISATb НА NORMALNUЮ HUINU
    const onRegenerate = async () => {
        setLoading(true);
        const response = await fetch(`${registryId}/token-regenerate`, {
            headers: {
                'X-CSRF-TOKEN': document
                    .querySelector('meta[name="csrf-token"]')
                    ?.getAttribute('content') as string,
            },
            method: 'POST',
        });

        if (!response.ok) {
            setLoading(false);
            toast.error('Failed to regenerate token.');
            return;
        }

        const data = await response.json();
        setToken(data.token);
        toast.success('Token regenerated successfully.');
        setLoading(false);
    };

    return (
        <>
            <Field>
                <FieldLabel>Your token</FieldLabel>
                <InputGroup>
                    <InputGroupInput readOnly value={token} />
                    <InputGroupAddon align="inline-end">
                        <Button
                            size="sm"
                            variant="ghost"
                            type="button"
                            onClick={onRegenerate}
                            disabled={loading}
                        >
                            {loading ? (
                                <Spinner />
                            ) : (
                                <RefreshCcw className="size-4" />
                            )}
                            Regenerate
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
                <FieldDescription>
                    This is your registry token. Keep it secret.
                </FieldDescription>
            </Field>

            <SetupCodeBlock token={token} />
        </>
    );
};
