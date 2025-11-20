import React from 'react';
import { Form } from '@wandry/inertia-form';

import { CodeBlock } from '@/components/code-block';
import { PublicSetupCodeBlock } from '@/components/setup-code-block';
import { Tabs, TabsList, TabsPanel, TabsTab } from '@/components/ui/tabs';

import TextField from '@/components/text-field';
import SwitchField from '@/components/switch-field';
import SubmitButton from '@/components/submit-button';
import { StepItem } from '@/components/step';

type SetupRegistryProps = {
    token: string;
    registry: any;
};

export const SetupRegistry: React.FC<SetupRegistryProps> = ({
    registry,
    token,
}) => {
    return (
        <Form
            method="post"
            action={route('registry.setup', registry.id)}
            defaultValues={{ id: registry.id, token }}
        >
            <div className="max-w-full px-6 py-10 md:max-w-[55vw]">
                <h2 className="text-4xl font-extrabold tracking-tight text-balance">
                    Setup your Regisry
                </h2>
                <p className="mt-4 leading-7">
                    There are a few steps required to enable analytics. Follow
                    the instructions below — do them in order and everything
                    will work great.
                </p>

                <Tabs defaultValue="public" className="mt-10">
                    <TabsList className="mb-6" variant="underline">
                        <TabsTab value="public">Public Registry</TabsTab>
                        <TabsTab value="private">Private Registry</TabsTab>
                    </TabsList>

                    <TabsPanel value="public" className="space-y-6">
                        <div className="space-y-5">
                            <StepItem
                                stepNumber={1}
                                title="Install @wandry/analytics-sdk"
                            />

                            <CodeBlock
                                code={`npm install @wandry/analytics-sdk`}
                                lang="bash"
                                minHeight="min-h-15"
                            />
                        </div>
                        <div className="space-y-2">
                            <StepItem
                                stepNumber={2}
                                title="Get the token and add it to your project."
                            />

                            <TextField readOnly name="token" />
                        </div>
                        <div className="space-y-2">
                            <StepItem
                                stepNumber={2}
                                title="Start tracking events for fetching
                                    registry.json in your code."
                                description={
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        For a Nextjs project paste this code
                                        snippet in your middleware or API route
                                    </p>
                                }
                            />

                            <PublicSetupCodeBlock token={token} />
                        </div>
                    </TabsPanel>

                    <TabsPanel value="private" className="space-y-6">
                        <div className="space-y-5">
                            <StepItem
                                stepNumber={1}
                                title="Install @wandry/analytics-sdk"
                            />

                            <CodeBlock
                                code={`npm install @wandry/analytics-sdk`}
                                lang="bash"
                                minHeight="min-h-15"
                            />
                        </div>
                        <div className="space-y-2">
                            <StepItem
                                stepNumber={2}
                                title="Get the token and add it to your project."
                            />

                            <TextField readOnly name="token" />
                        </div>
                        <div className="space-y-2">
                            <StepItem
                                stepNumber={2}
                                title="Start tracking events for fetching
                                    registry.json in your code."
                                description={
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        For a Nextjs project paste this code
                                        snippet in your middleware or API route
                                    </p>
                                }
                            />

                            <PublicSetupCodeBlock token={token} />
                        </div>
                    </TabsPanel>
                </Tabs>
                <div className="mt-4 flex items-start border-t pt-6">
                    <div className="flex flex-col gap-y-2">
                        <h4 className="font-semibold">
                            Allow collection of anonymized country analytics
                        </h4>
                        <p className="text-xs text-muted-foreground">
                            We collect anonymized data about the user's country
                            to analyze the usage of the registry in different
                            regions. You can disable this at any time.
                        </p>
                    </div>
                    <SwitchField name="allowCountryAnalytics" />
                </div>

                <SubmitButton className="mt-5 cursor-pointer">
                    Finish setup
                </SubmitButton>
            </div>
        </Form>
    );
};
