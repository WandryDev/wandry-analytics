import React from 'react';
import { CodeBlock } from './code-block';

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
