import React from 'react';
import { Form } from '@wandry/inertia-form';

import { CodeBlock } from '@/components/code-block';
import { SetupCodeBlock } from '@/components/setup-code-block';

import TextField from '@/components/text-field';
import SwitchField from '@/components/switch-field';
import SubmitButton from '@/components/submit-button';
import { SoonCard } from '@/components/soon-card';

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
            action={route('registry.setup', registry.id)}
            method="post"
            defaultValues={{ id: registry.id }}
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

                <div className="mt-10 space-y-6">
                    <div className="space-y-5">
                        <div className="flex items-center gap-x-4">
                            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-xs font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-medium tracking-tight">
                                Install @wandry/analytics-sdk
                            </h3>
                        </div>
                        <CodeBlock
                            code={`npm install @wandry/analytics-sdk`}
                            lang="bash"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-4">
                            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-xs font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-medium tracking-tight">
                                Get the token and add it to your project.
                            </h3>
                        </div>
                        <Form action="" method="post" defaultValues={{ token }}>
                            <TextField readOnly name="token" />
                        </Form>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-x-4">
                            <div className="flex size-10 items-center justify-center rounded-full bg-muted text-xs font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-medium tracking-tight">
                                Start tracking events for fetching registry.json
                                in your code.
                            </h3>
                        </div>
                        <p>
                            For a Nextjs project paste this code snippet in your
                            middleware or API route
                        </p>
                        <SetupCodeBlock token={token} />
                    </div>
                    <SoonCard>
                        <div className="flex items-start border-t pt-6">
                            <div className="flex flex-col gap-y-2">
                                <h4 className="font-semibold">
                                    Allow collection of anonymized country
                                    analytics
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                    We collect anonymized data about the user's
                                    country to analyze the usage of the registry
                                    in different regions. You can disable this
                                    at any time.
                                </p>
                            </div>
                            <SwitchField name="allowCountryAnalytics" />
                        </div>
                    </SoonCard>
                </div>
                <SubmitButton className="mt-5 cursor-pointer">
                    Finish setup
                </SubmitButton>
            </div>
        </Form>
    );
};
