import { CodeBlock } from '@/components/code-block';
import TextField from '@/components/text-field';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import registry from '@/routes/registry';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Form } from '@wandry/inertia-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Registry setup',
        href: dashboard().url,
    },
];

const CreateRegistry = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Setup registry" />
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
                        <Form
                            action=""
                            method="post"
                            defaultValues={{ token: 'asdasdsaSADASDsadasdasd' }}
                        >
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
                        <CodeBlock
                            code={`import { captureRegistryEvents } from '@wandry/analytics-sdk';

export function middleware(request: NextRequest) {                                
    captureRegistryEvents(request, token);
    return NextResponse.next();
}`}
                            lang="bash"
                        />
                    </div>
                </div>
                <Button className="mt-5">
                    <Link href={registry.show('3')}>Finish setup</Link>
                </Button>
            </div>
        </AppLayout>
    );
};

export default CreateRegistry;
