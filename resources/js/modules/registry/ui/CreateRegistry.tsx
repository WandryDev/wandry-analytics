import { CodeBlock } from '@/components/code-block';
import { CreateRegistryModal } from '@/modules/CreateRegistryModal';

const CreateRegistry = () => {
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
                            Create a registry
                        </h3>
                    </div>
                    <CreateRegistryModal insideSidebar={false} />
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
        </div>
    );
};

export default CreateRegistry;
