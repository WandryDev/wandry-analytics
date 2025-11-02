import { codeToHtml } from 'shiki';

export async function highlightCode(code: string, language: string = 'tsx') {
    const theme = ['dark', 'system'].includes(
        localStorage.getItem('appearance') ?? 'system',
    )
        ? 'github-dark'
        : 'github-light';

    const html = await codeToHtml(code, {
        lang: language,
        theme: theme ?? 'github-dark',
        transformers: [
            {
                pre(node) {
                    node.properties['class'] =
                        'no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0 !bg-transparent';
                },
                code(node) {
                    node.properties['data-line-numbers'] = '';
                },
                line(node) {
                    node.properties['data-line'] = '';
                },
            },
        ],
    });

    return html;
}
