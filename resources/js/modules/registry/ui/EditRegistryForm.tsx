import React from 'react';
import { Form } from '@wandry/inertia-form';

import TextField from '@/components/text-field';
import SwitchField from '@/components/switch-field';

import { Button } from '@/components/ui/button';

import { Registry } from '../models/registry';
import { RegerateTokenModal } from './RegerateTokenModal';
import { SoonCard } from '@/components/soon-card';

type EditRegistryFormProps = {
    defaultValue: Registry;
};

const EditRegistryForm: React.FC<EditRegistryFormProps> = ({
    defaultValue: { id, ...defaultValue },
}) => {
    return (
        <Form
            method="put"
            action={route('registry.update', id)}
            defaultValues={defaultValue}
            className="space-y-8 px-10 pt-10"
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
                <SoonCard>
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
                            <SwitchField name="allowCountryAnalytics" />
                        </div>
                    </div>
                </SoonCard>
            </div>

            <div className="border-t pt-4">
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
        </Form>
    );
};

export default EditRegistryForm;
