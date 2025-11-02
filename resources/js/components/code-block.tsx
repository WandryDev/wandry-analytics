import React from 'react';
import { highlightCode } from '@/lib/highlight';
import { Button } from './ui/button';
import { CheckCheck, Copy } from 'lucide-react';

type CodeBlockProps = {
    code: string;
    lang?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang }) => {
    const [isCopied, setIsCopied] = React.useState<boolean>(false);
    const [html, setHtml] = React.useState<string>('');

    const getHighlightedCode = async () => {
        const highlighted = await highlightCode(code, lang);
        setHtml(highlighted);
    };

    const copyToClipboard = () => {
        window.navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    React.useEffect(() => {
        getHighlightedCode();
    }, [code, lang]);

    return (
        <div className="relative w-fit rounded-lg bg-muted px-4 py-2 pr-15">
            <div
                className="not-prose"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <Button
                size="icon"
                variant="ghost"
                className="absolute top-1 right-0 z-10"
                onClick={copyToClipboard}
            >
                {isCopied ? <CheckCheck /> : <Copy />}
            </Button>
        </div>
    );
};
