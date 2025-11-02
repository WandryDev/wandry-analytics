import React from 'react';
import { Form } from '@wandry/inertia-form';

import { CodeBlock } from '@/components/code-block';
import { Button } from '@/components/ui/button';

import TextField from '@/components/text-field';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { SetupCodeBlock } from '@/components/setup-code-block';

type SetupRegistryProps = {
    token: string;
    registry: any;
};

export const SetupRegistry: React.FC<SetupRegistryProps> = ({
    registry,
    token,
}) => {
    const [loading, setLoading] = React.useState(false);
    const testSdk = async () => {
        setLoading(true);
        const registryJsonUrl = `${registry.url}/r/registry.json`;
        const response = await fetch(registryJsonUrl);

        if (response.ok) {
            toast.info('Try to fetch registry.json succeeded!', {
                description:
                    'If you’re still seeing this setup guide, it means we weren’t able to collect the event.',
            });

            setTimeout(() => {
                window.location.reload();
                setLoading(false);
            }, 5000);

            return;
        }

        setLoading(false);

        return toast.error(
            'If you’re still seeing this setup guide, it means we weren’t able to collect the event.',
        );
    };

    return (
        <div className="max-w-full px-6 py-10 md:max-w-[55vw]">
            <h2 className="text-4xl font-extrabold tracking-tight text-balance">
                Setup your Regisry
            </h2>
            <p className="mt-4 leading-7">
                There are a few steps required to enable analytics. Follow the
                instructions below — do them in order and everything will work
                great.
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
                            Start tracking events for fetching registry.json in
                            your code.
                        </h3>
                    </div>
                    <p>
                        For a Nextjs project paste this code snippet in your
                        middleware or API route
                    </p>
                    <SetupCodeBlock token={token} />
                </div>
            </div>
            <Button
                className="mt-5 cursor-pointer"
                onClick={testSdk}
                disabled={loading}
            >
                {loading && <Spinner />}
                Test event and Finish setup
            </Button>
        </div>
    );
};
