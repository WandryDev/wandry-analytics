import React from 'react';
import { CodeBlock } from './code-block';
import {
    AnimatedTabPanel,
    Tabs,
    TabsContent,
    TabsList,
    TabsPanel,
    TabsTrigger,
} from '@/components/ui/tabs';
import { middlewareCode, proxyCode } from '@/config/code';

type SetupCodeBlockProps = {
    token: string;
};

export const PublicSetupCodeBlock: React.FC<SetupCodeBlockProps> = ({
    token,
}) => {
    return (
        <Tabs defaultValue="middleware" className="w-full">
            <TabsList variant="underline" className="mb-4">
                <TabsTrigger value="middleware">middleware.ts</TabsTrigger>
                <TabsTrigger value="proxy">proxy.ts</TabsTrigger>
            </TabsList>
            <TabsPanel value="middleware">
                <AnimatedTabPanel className="min-h-[35vh]">
                    <CodeBlock code={middlewareCode(token)} lang="typescript" />
                </AnimatedTabPanel>
            </TabsPanel>
            <TabsPanel value="proxy">
                <AnimatedTabPanel className="min-h-[35vh]">
                    <CodeBlock code={proxyCode(token)} lang="typescript" />
                </AnimatedTabPanel>
            </TabsPanel>
        </Tabs>
    );
};

export const SiteCodeBlock: React.FC<SetupCodeBlockProps> = ({ token }) => {
    return (
        <CodeBlock
            hasCopyButton={false}
            containerClassName="px-3 no-scrollbar mt-4 bg-neutral-500/9"
            codeClassName="text-xs "
            code={`import { captureRegistryEvent } from '@wandry/analytics-sdk';
        
export function middleware(request: NextRequest) {                                
    captureRegistryEvent(request, "${token ?? 'token'}");
    return NextResponse.next();
}`}
            lang="bash"
        />
    );
};
