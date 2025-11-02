import React from 'react';
import { CodeBlock } from './code-block';

type SetupCodeBlockProps = {
    token: string;
};

export const SetupCodeBlock: React.FC<SetupCodeBlockProps> = ({ token }) => {
    return (
        <CodeBlock
            code={`import { captureRegistryEvents } from '@wandry/analytics-sdk';
        
export function middleware(request: NextRequest) {                                
    captureRegistryEvents(request, ${token ?? 'token'});
    return NextResponse.next();
}`}
            lang="bash"
        />
    );
};
