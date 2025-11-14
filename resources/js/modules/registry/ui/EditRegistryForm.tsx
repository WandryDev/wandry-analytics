import React from 'react';
import { Form } from '@wandry/inertia-form';
import { toast } from 'sonner';

import TextField from '@/components/text-field';
import SwitchField from '@/components/switch-field';
import SubmitButton from '@/components/submit-button';

import { SoonCard } from '@/components/soon-card';
import { Button } from '@/components/ui/button';

import { Registry } from '../models/registry';
import { RegerateTokenModal } from './RegerateTokenModal';

type EditRegistryFormProps = {
    defaultValue: Registry;
};

const EditRegistryForm: React.FC<EditRegistryFormProps> = ({
    defaultValue: { id, ...defaultValue },
}) => {
    return (
        <div className="px-10 pt-10">
            <Form
                method="put"
                action={route('registry.update', id)}
                defaultValues={defaultValue}
                className="space-y-8"
                options={{
                    onSuccess: () =>
                        toast.success('Registry successfully updated'),
                }}
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

                <div className="">
                    <h3 className="text-2xl font-semibold">Policies</h3>
                    <div className="mt-6 flex flex-col">
                        <div className="mb-3 flex items-start justify-between">
                            <div className="">
                                <p className="text-lg">
                                    Allow collection of anonymized country
                                    analytics
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    We collect anonymized data about the user's
                                    country to analyze the usage of the registry
                                    in different regions
                                </p>
                            </div>
                            <SwitchField name="country_stats" />
                        </div>
                    </div>
                </div>

                <SubmitButton>Save changes</SubmitButton>
            </Form>

            <div className="mt-8 border-t pt-4">
                <h3 className="text-2xl font-semibold">Danger zone</h3>
                <div className="mt-6 flex flex-col gap-y-4">
                    <div className="mb-3 flex items-start justify-between">
                        <div className="">
                            <p className="text-lg">Regenerate registry token</p>
                            <p className="text-sm text-muted-foreground">
                                Is your registry token compromised or lost? You
                                can regenerate it here.
                            </p>
                        </div>
                        <RegerateTokenModal registryId={id} />
                    </div>
                    <SoonCard>
                        <div className="flex items-start justify-between">
                            <div className="">
                                <p className="text-lg">Delete registry</p>
                                <p className="text-sm text-muted-foreground">
                                    Once you delete a registry, there is no
                                    going back. Please be certain.
                                </p>
                            </div>
                            <Button variant="destructive">
                                Delete registry
                            </Button>
                        </div>
                    </SoonCard>
                </div>
            </div>
        </div>
    );
};

export default EditRegistryForm;
