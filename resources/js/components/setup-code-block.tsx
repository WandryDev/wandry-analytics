import React from 'react';
import { CodeBlock } from './code-block';
import { useWatch } from '@wandry/inertia-form';

type SetupCodeBlockProps = {
    token: string;
};

export const SetupCodeBlock: React.FC<SetupCodeBlockProps> = ({ token }) => {
    return (
        <CodeBlock
            code={`import { captureRegistryEvent } from '@wandry/analytics-sdk';
        
export function middleware(request: NextRequest) {                                
    captureRegistryEvent(request, "${token ?? 'token'}");
    return NextResponse.next();
}`}
            lang="bash"
        />
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
